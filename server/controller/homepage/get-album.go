package homepage_controller

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/dao"
	"github.com/sheason2019/blog/db"
	"github.com/sheason2019/blog/omi/blog"
	"github.com/sheason2019/blog/omi/homepage"
)

func (homepageImpl) GetAlbum(ctx *gin.Context, id int) blog.Album {
	daoAlbum := dao.Album{}
	daoAlbum.ID = uint(id)

	conn := db.GetConn()

	err := conn.Preload("Items").Preload("Items.Article").Where(&daoAlbum).Limit(1).Find(&daoAlbum).Error
	if err != nil {
		panic(err)
	}

	return daoAlbum.ToIDL()
}

func attachGetAlbum(r *gin.Engine) {
	r.GET(homepage.HomePageDefinition.GET_ALBUM_PATH, func(ctx *gin.Context) {
		props := homepage.GetAlbumRequest{}
		ctx.BindQuery(&props)
		ctx.JSON(200, controller.GetAlbum(ctx, props.Id))
	})
}
