package blog_controller

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/dao"
	"github.com/sheason2019/blog/db"
	"github.com/sheason2019/blog/middleware"
	"github.com/sheason2019/blog/omi/blog"
)

func (blogImpl) GetArticlesByTitle(ctx *gin.Context, title string) []blog.Article {
	daoArticles := make([]dao.Article, 0)
	conn := db.GetConn()

	err := conn.Where("title like ?", "%"+title+"%").Omit("Content").Limit(50).Find(&daoArticles).Error
	if err != nil {
		panic(err)
	}

	articles := make([]blog.Article, len(daoArticles))
	for i, v := range daoArticles {
		articles[i] = v.ToIDL()
	}

	return articles
}

func attachGetArticlesByTitle(r *gin.Engine) {
	r.GET(blog.BlogDefinition.GET_ARTICLES_BY_TITLE_PATH, middleware.CheckReadLimit, func(ctx *gin.Context) {
		props := blog.GetArticlesByTitleRequest{}
		ctx.BindQuery(&props)

		ctx.JSON(200, controller.GetArticlesByTitle(ctx, props.Title))
	})
}
