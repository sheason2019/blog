/**
* 本文件由Omi.js自动生成，谨慎改动！
* 生成时间：2022年11月5日 21:38:7.
 */
package homepage

type StatisticInfo struct {
	ArticlesCount   *int
	SectionsCount   *int
	AlbumsCount     *int
	WeekUpdateCount *int
}
type GetArticlesRequest struct {
	Length     int   `form:"length"`
	Offset     int   `form:"offset"`
	GetNew     bool  `form:"GetNew"`
	SectionsId []int `form:"SectionsId"`
}
type GetAlbumsRequest struct {
	Length int  `form:"length"`
	Offset int  `form:"offset"`
	GetNew bool `form:"GetNew"`
}
type GetAlbumRequest struct {
	Id int `form:"id"`
}
