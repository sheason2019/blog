package blog_controller

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/middleware"
	"github.com/sheason2019/blog/omi/blog"
	"github.com/sheason2019/blog/service"
)

func (blogImpl) PostAlbum(ctx *gin.Context, album blog.Album) int {
	daoAlbum := service.CreateAlbum(album)

	return int(daoAlbum.ID)
}

func attachPostAlbum(r *gin.Engine) {
	r.POST(blog.BlogDefinition.POST_ALBUM_PATH, middleware.CheckWriteLimit, func(ctx *gin.Context) {
		props := blog.PostAlbumRequest{}
		ctx.BindJSON(&props)

		ctx.JSON(200, controller.PostAlbum(ctx, props.Album))
	})
}
