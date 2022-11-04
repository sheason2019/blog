package blog_controller

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/middleware"
	"github.com/sheason2019/blog/omi/blog"
	"github.com/sheason2019/blog/service"
)

func (blogImpl) PutAlbum(ctx *gin.Context, album blog.Album) {
	service.UpdateAlbum(album)
}

func attachPutAlbum(r *gin.Engine) {
	r.PUT(blog.BlogDefinition.PUT_ALBUM_PATH, middleware.CheckWriteLimit, func(ctx *gin.Context) {
		props := blog.PutAlbumRequest{}
		ctx.BindJSON(&props)
		controller.PutAlbum(ctx, props.Album)
		ctx.JSON(200, "OK")
	})
}
