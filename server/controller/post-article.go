package controller

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/db"
	"github.com/sheason2019/blog/middleware"
	"github.com/sheason2019/blog/omi/blog"
	"github.com/sheason2019/blog/service"
)

func (blogImpl) PostArticle(ctx *gin.Context, article blog.Article) int {
	conn := db.GetConn()

	daoArticle := service.CreateArticleByIDL(article)

	conn.Create(&daoArticle)

	return int(daoArticle.ID)
}

func attachPostArticle(r *gin.Engine) {
	r.POST(blog.BlogDefinition.POST_ARTICLE_PATH, middleware.CheckWriteLimit, func(ctx *gin.Context) {
		props := blog.PostArticleRequest{}
		ctx.BindJSON(&props)

		ctx.JSON(200, controller.PostArticle(ctx, props.Article))
	})
}
