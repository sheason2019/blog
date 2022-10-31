package controller

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/dao"
	"github.com/sheason2019/blog/db"
	"github.com/sheason2019/blog/middleware"
	"github.com/sheason2019/blog/omi/blog"
)

func (blogImpl) DeleteArticle(ctx *gin.Context, articleId int) {
	conn := db.GetConn()
	article := dao.Article{}
	article.ID = uint(articleId)
	err := conn.Where(&article).Delete(&article).Error
	if err != nil {
		panic(err)
	}
}

func attachDeleteArticle(r *gin.Engine) {
	r.DELETE(blog.BlogDefinition.DELETE_ARTICLE_PATH, middleware.CheckWriteLimit, func(ctx *gin.Context) {
		props := blog.DeleteArticleRequest{}
		ctx.BindQuery(&props)

		controller.DeleteArticle(ctx, props.ArticleId)
		ctx.String(200, "OK")
	})
}
