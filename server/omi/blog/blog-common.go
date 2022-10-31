/**
* 本文件由Omi.js自动生成，谨慎改动！
* 生成时间：2022年10月31日 19:47:7.
 */
package blog

type LimitResponse struct {
	Read  *bool
	Write *bool
}
type Section struct {
	SectionId   *int
	SectionName *string
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
}
type GetLimitRequest struct {
	Token string `form:"token"`
}
type GetSectionsRequest struct {
	Page     int `form:"Page"`
	PageSize int `form:"PageSize"`
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
