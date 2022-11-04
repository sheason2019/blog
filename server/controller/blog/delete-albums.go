package blog_controller

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/dao"
	"github.com/sheason2019/blog/db"
	"github.com/sheason2019/blog/middleware"
	"github.com/sheason2019/blog/omi/blog"
	"gorm.io/gorm"
)

func (blogImpl) DeleteAlbum(ctx *gin.Context, albumId int) {
	conn := db.GetConn()

	daoAlbum := dao.Album{}
	daoAlbum.ID = uint(albumId)

	daoAlbumItem := dao.AlbumItem{
		AlbumId: daoAlbum.ID,
	}

	conn.Transaction(func(tx *gorm.DB) error {
		// 先清空合集中的Items
		err := tx.Where("album_id = ?", daoAlbum.ID).Delete(&daoAlbumItem).Error
		if err != nil {
			return err
		}

		// 再删除合集本体
		err = tx.Where("id = ?", daoAlbum.ID).Delete(&daoAlbum).Error
		if err != nil {
			return err
		}

		return nil
	})
}

func attachDeleteAlbum(r *gin.Engine) {
	r.DELETE(blog.BlogDefinition.DELETE_ALBUM_PATH, middleware.CheckWriteLimit, func(ctx *gin.Context) {
		props := blog.DeleteAlbumRequest{}
		ctx.BindQuery(&props)
		controller.DeleteAlbum(ctx, props.AlbumId)
		ctx.JSON(200, "OK")
	})
}
