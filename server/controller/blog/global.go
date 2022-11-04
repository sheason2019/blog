package blog_controller

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/omi/blog"
)

type blogImpl struct{}

var controller blog.Blog = &blogImpl{}

func BindBlogController(r *gin.Engine) {
	// 用户权限检查
	attachGetLimit(r)
	// 版块CURD
	attachGetSections(r)
	attachPostSections(r)
	attachGetSectionsByName(r)
	// 文章CURD
	attachPostArticle(r)
	attachGetArticleById(r)
	attachPutArticle(r)
	attachGetArticles(r)
	attachGetArticlesByTitle(r)
	attachDeleteArticle(r)
	// 合集CURD
	attachGetAlbums(r)
	attachPostAlbum(r)
	attachPutAlbum(r)
	attachDeleteAlbum(r)
}
