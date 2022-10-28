/**
* 本文件由Omi.js自动生成，谨慎改动！
* 生成时间：2022年10月28日 22:58:51.
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
