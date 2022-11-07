package homepage_controller

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/dao"
	"github.com/sheason2019/blog/db"
	"github.com/sheason2019/blog/omi/blog"
	"github.com/sheason2019/blog/omi/homepage"
)

func (homepageImpl) GetAlbums(ctx *gin.Context, length int, offset int, GetNew bool) []blog.Album {
	conn := db.GetConn()

	daoAlbums := make([]dao.Album, 0)

	var orderSql string
	if GetNew {
		orderSql = "updated_at desc"
	} else {
		orderSql = "updated_at"
	}

	err := conn.Preload("Items").Offset(offset).Limit(length).Order(orderSql).Find(&daoAlbums).Error
	if err != nil {
		panic(err)
	}

	albums := make([]blog.Album, len(daoAlbums))
	for i, v := range daoAlbums {
		albums[i] = v.ToIDL()
	}

	return albums
}

func attachGetAlbums(r *gin.Engine) {
	r.GET(homepage.HomePageDefinition.GET_ALBUMS_PATH, func(ctx *gin.Context) {
		props := homepage.GetAlbumsRequest{}
		ctx.BindQuery(&props)
		ctx.JSON(200, controller.GetAlbums(ctx, props.Length, props.Offset, props.GetNew))
	})
}
