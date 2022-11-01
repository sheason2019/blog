package controller

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/dao"
	"github.com/sheason2019/blog/db"
	"github.com/sheason2019/blog/omi/blog"
)

func (blogImpl) GetArticleById(ctx *gin.Context, articleId int) blog.Article {
	conn := db.GetConn()
	daoArticle := dao.Article{}
	daoArticle.ID = uint(articleId)

	err := conn.Model(&daoArticle).Preload("Sections").Where(&daoArticle).First(&daoArticle).Error
	if err != nil {
		panic(err)
	}

	return daoArticle.ToIDL()
}

func attachGetArticleById(r *gin.Engine) {
	r.GET(blog.BlogDefinition.GET_ARTICLE_BY_ID_PATH, func(ctx *gin.Context) {
		props := blog.GetArticleByIdRequest{}
		ctx.BindQuery(&props)

		ctx.JSON(200, controller.GetArticleById(ctx, props.ArticleId))
	})
}
