/**
* 本文件由Omi.js自动生成，谨慎改动！
* 生成时间：2022年11月4日 23:58:5.
 */
package blog

type LimitResponse struct {
	Read  *bool
	Write *bool
}
type Section struct {
	SectionId    *int
	SectionName  *string
	ArticleCount *int
}
type Pagination struct {
	Page     *int
	PageSize *int
	Count    *int
}
type GetSectionsResponse struct {
	Pagination *Pagination
	Sections   *[]Section
}
type GetArticlesResponse struct {
	Pagination *Pagination
	Articles   *[]Article
}
type Article struct {
	Id         *int
	Title      *string
	Content    *string
	Owner      *string
	CreateTime *int
	Sections   *[]Section
}
type Album struct {
	Id       *int
	Name     *string
	Describe *string
	Articles *[]Article
}
type GetAlbumsResponse struct {
	Albums     *[]Album
	Pagination *Pagination
}
type GetLimitRequest struct {
	Token string `form:"token"`
}
type GetSectionsRequest struct {
	Page     int `form:"Page"`
	PageSize int `form:"PageSize"`
}
type GetSectionsByNameRequest struct {
	Name string `form:"name"`
}
type PostSectionsRequest struct {
	Section Section `json:"section"`
}
type DeleteSectionsRequest struct {
	SectionId int `form:"SectionId"`
}
type PostArticleRequest struct {
	Article Article `json:"article"`
}
type GetArticleByIdRequest struct {
	ArticleId int `form:"articleId"`
}
type GetArticlesByTitleRequest struct {
	Title string `form:"title"`
}
type GetArticlesRequest struct {
	Page     int `form:"Page"`
	PageSize int `form:"PageSize"`
}
type PutArticleRequest struct {
	Article Article `json:"article"`
}
type DeleteArticleRequest struct {
	ArticleId int `form:"articleId"`
}
type PostAlbumRequest struct {
	Album Album `json:"album"`
}
type GetAlbumsRequest struct {
	Page     int `form:"page"`
	PageSize int `form:"pageSize"`
}
type DeleteAlbumRequest struct {
	AlbumId int `form:"albumId"`
}
type PutAlbumRequest struct {
	Album Album `json:"album"`
}
