package homepage_controller

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/dao"
	"github.com/sheason2019/blog/db"
	"github.com/sheason2019/blog/omi/blog"
	"github.com/sheason2019/blog/omi/homepage"
)

// 获取最新的文章，这里不需要加载文章内容
func (homepageImpl) GetArticles(ctx *gin.Context, length, offset int, getNew bool, sectionsId []int) []blog.Article {
	daoArticles := make([]dao.Article, 0)
	conn := db.GetConn()

	var orderString string
	if getNew {
		orderString = "created_at desc"
	} else {
		orderString = "created_at"
	}

	chain := conn.
		Preload("Sections").
		Order(orderString).
		Omit("content").
		Offset(offset).
		Limit(length)

	// 根据SectionId进行筛选
	if len(sectionsId) > 0 {
		chain.Joins("article_section", conn.Where("section_id in ?", sectionsId))
	}

	err := chain.
		Find(&daoArticles).
		Error
	if err != nil {
		panic(err)
	}

	articles := make([]blog.Article, len(daoArticles))
	emptyStr := ""
	for i, v := range daoArticles {
		articles[i] = v.ToIDL()
		articles[i].Content = &emptyStr
	}

	return articles
}

func attachGetArticles(r *gin.Engine) {
	r.GET(homepage.HomePageDefinition.GET_ARTICLES_PATH, func(ctx *gin.Context) {
		props := homepage.GetArticlesRequest{}
		ctx.BindQuery(&props)

		ctx.JSON(200, controller.GetArticles(
			ctx,
			props.Length,
			props.Offset,
			props.GetNew,
			props.SectionsId,
		))
	})
}
