/**
* 本文件由Omi.js自动生成，谨慎改动！
* 生成时间：2022年11月4日 17:40:51.
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
	GetSectionsByName(ctx *gin.Context, name string) []Section
	PostSections(ctx *gin.Context, section Section) Section
	DeleteSections(ctx *gin.Context, SectionId int) int
	// 创建、获取和删除文章
	PostArticle(ctx *gin.Context, article Article) int
	GetArticleById(ctx *gin.Context, articleId int) Article
	GetArticlesByTitle(ctx *gin.Context, title string) []Article
	GetArticles(ctx *gin.Context, Page int, PageSize int) GetArticlesResponse
	PutArticle(ctx *gin.Context, article Article)
	DeleteArticle(ctx *gin.Context, articleId int)
	// 合集的CURD
	PostAlbum(ctx *gin.Context, album Album) int
	GetAlbums(ctx *gin.Context, page int, pageSize int) GetAlbumsResponse
	DeleteAlbum(ctx *gin.Context, album int)
	PutAlbum(ctx *gin.Context, album Album)
}
type TypeBlogDefinition struct {
	GET_LIMIT_PATH             string
	GET_SECTIONS_PATH          string
	GET_SECTIONS_BY_NAME_PATH  string
	POST_SECTIONS_PATH         string
	DELETE_SECTIONS_PATH       string
	POST_ARTICLE_PATH          string
	GET_ARTICLE_BY_ID_PATH     string
	GET_ARTICLES_BY_TITLE_PATH string
	GET_ARTICLES_PATH          string
	PUT_ARTICLE_PATH           string
	DELETE_ARTICLE_PATH        string
	POST_ALBUM_PATH            string
	GET_ALBUMS_PATH            string
	DELETE_ALBUM_PATH          string
	PUT_ALBUM_PATH             string
}

var BlogDefinition = &TypeBlogDefinition{
	GET_LIMIT_PATH:             "/Blog.Limit",
	GET_SECTIONS_PATH:          "/Blog.Sections",
	GET_SECTIONS_BY_NAME_PATH:  "/Blog.SectionsByName",
	POST_SECTIONS_PATH:         "/Blog.Sections",
	DELETE_SECTIONS_PATH:       "/Blog.Sections",
	POST_ARTICLE_PATH:          "/Blog.Article",
	GET_ARTICLE_BY_ID_PATH:     "/Blog.ArticleById",
	GET_ARTICLES_BY_TITLE_PATH: "/Blog.ArticlesByTitle",
	GET_ARTICLES_PATH:          "/Blog.Articles",
	PUT_ARTICLE_PATH:           "/Blog.Article",
	DELETE_ARTICLE_PATH:        "/Blog.Article",
	POST_ALBUM_PATH:            "/Blog.Album",
	GET_ALBUMS_PATH:            "/Blog.Albums",
	DELETE_ALBUM_PATH:          "/Blog.Album",
	PUT_ALBUM_PATH:             "/Blog.Album",
}
