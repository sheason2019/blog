/**
* 本文件由Omi.js自动生成，谨慎改动！
* 生成时间：2022年10月28日 22:58:51.
 */
package blog

import (
	"github.com/gin-gonic/gin"
)

type Blog interface {
	// 输入秘钥以获取用户权限
	GetLimit(ctx *gin.Context, token string) LimitResponse
	// 创建、获取和删除版块
	GetSections(ctx *gin.Context, Page int, PageSize int) GetSectionsResponse
	PostSections(ctx *gin.Context, section Section) Section
	DeleteSections(ctx *gin.Context, SectionId int) int
	// 创建、获取和删除文章
}
type TypeBlogDefinition struct {
	GET_LIMIT_PATH       string
	GET_SECTIONS_PATH    string
	POST_SECTIONS_PATH   string
	DELETE_SECTIONS_PATH string
}

var BlogDefinition = &TypeBlogDefinition{
	GET_LIMIT_PATH:       "/Blog.Limit",
	GET_SECTIONS_PATH:    "/Blog.Sections",
	POST_SECTIONS_PATH:   "/Blog.Sections",
	DELETE_SECTIONS_PATH: "/Blog.Sections",
}
