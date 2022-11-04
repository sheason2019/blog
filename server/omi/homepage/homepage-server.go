/**
* 本文件由Omi.js自动生成，谨慎改动！
* 生成时间：2022年11月4日 23:58:5.
 */
package homepage

import (
	"github.com/gin-gonic/gin"
)

import blog "github.com/sheason2019/blog/omi/blog"

type HomePage interface {
	// 获取文章
	GetArticles(ctx *gin.Context, length int, offset int, GetNew bool, SectionsId []int) []blog.Article
}
type TypeHomePageDefinition struct {
	GET_ARTICLES_PATH string
}

var HomePageDefinition = &TypeHomePageDefinition{
	GET_ARTICLES_PATH: "/HomePage.Articles",
}
