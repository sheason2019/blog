package controller

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/dao"
	"github.com/sheason2019/blog/db"
	"github.com/sheason2019/blog/middleware"
	"github.com/sheason2019/blog/omi/blog"
)

func (blogImpl) PostArticle(ctx *gin.Context, article blog.Article) {
	conn := db.GetConn()
	daoArticle := dao.Article{}
	daoArticle.Content = *article.Content
	daoArticle.Title = *article.Title
	daoArticle.Owner = "Sheason"

	conn.Create(&daoArticle)
}

func attachPostArticle(r *gin.Engine) {
	r.POST(blog.BlogDefinition.POST_ARTICLE_PATH, middleware.CheckWriteLimit, func(ctx *gin.Context) {
		props := blog.PostArticleRequest{}
		ctx.BindJSON(&props)

		service.PostArticle(ctx, props.Article)
		ctx.String(200, "OK")
	})
}
