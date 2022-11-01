package blog_controller

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/omi/blog"
)

type blogImpl struct{}

var controller blog.Blog = &blogImpl{}

func BindBlogController(r *gin.Engine) {
	attachGetLimit(r)
	attachGetSections(r)
	attachPostSections(r)
	attachPostArticle(r)
	attachGetArticleById(r)
	attachPutArticle(r)
	attachGetArticles(r)
	attachDeleteArticle(r)
	attachGetSectionsByName(r)
}
