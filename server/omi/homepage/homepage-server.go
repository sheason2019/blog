/**
* 本文件由Omi.js自动生成，谨慎改动！
* 生成时间：2022年11月5日 21:38:7.
 */
package homepage

import (
	"github.com/gin-gonic/gin"
)

import blog "github.com/sheason2019/blog/omi/blog"

type HomePage interface {
	// 获取文章
	GetArticles(ctx *gin.Context, length int, offset int, GetNew bool, SectionsId []int) []blog.Article
	// 获取合集
	GetAlbums(ctx *gin.Context, length int, offset int, GetNew bool) []blog.Album
	GetAlbum(ctx *gin.Context, id int) blog.Album
	// 获取统计信息
	GetStatisticInfo(ctx *gin.Context) StatisticInfo
}
type TypeHomePageDefinition struct {
	GET_ARTICLES_PATH       string
	GET_ALBUMS_PATH         string
	GET_ALBUM_PATH          string
	GET_STATISTIC_INFO_PATH string
}

var HomePageDefinition = &TypeHomePageDefinition{
	GET_ARTICLES_PATH:       "/HomePage.Articles",
	GET_ALBUMS_PATH:         "/HomePage.Albums",
	GET_ALBUM_PATH:          "/HomePage.Album",
	GET_STATISTIC_INFO_PATH: "/HomePage.StatisticInfo",
}
