package blog_controller

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/db"
	"github.com/sheason2019/blog/middleware"
	"github.com/sheason2019/blog/omi/blog"
	"github.com/sheason2019/blog/service"
)

func (blogImpl) PutArticle(ctx *gin.Context, article blog.Article) {
	conn := db.GetConn()

	daoArticle := service.CreateArticleByIDL(article)
	conn.Save(&daoArticle)
}

func attachPutArticle(r *gin.Engine) {
	r.PUT(blog.BlogDefinition.PUT_ARTICLE_PATH, middleware.CheckWriteLimit, func(ctx *gin.Context) {
		props := blog.PutArticleRequest{}
		ctx.BindJSON(&props)

		controller.PutArticle(ctx, props.Article)
		ctx.String(200, "OK")
	})
}
