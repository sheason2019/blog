/**
* 本文件由Omi.js自动生成，谨慎改动！
* 生成时间：2022年11月4日 23:58:5.
 */
package homepage

type GetArticlesRequest struct {
	Length     int   `form:"length"`
	Offset     int   `form:"offset"`
	GetNew     bool  `form:"GetNew"`
	SectionsId []int `form:"SectionsId"`
}
