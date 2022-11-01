package homepage_controller

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/dao"
	"github.com/sheason2019/blog/db"
	"github.com/sheason2019/blog/omi/blog"
)

// 获取最新的文章，这里不需要加载文章内容
func (homepageImpl) GetNewestArticle(ctx *gin.Context, length int) []blog.Article {
	daoArticles := make([]dao.Article, 0)
	conn := db.GetConn()

	err := conn.Preload("Sections").Order("created_at desc").Limit(length).Find(&daoArticles).Error
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

func attachGetNewestArticle(r *gin.Engine) {
	r.GET(blog.HomePageDefinition.GET_NEWEST_ARTICLE_PATH, func(ctx *gin.Context) {
		props := blog.GetNewestArticleRequest{}
		ctx.BindQuery(&props)

		ctx.JSON(200, controller.GetNewestArticle(ctx, props.Length))
	})
}
