package blog_controller

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/dao"
	"github.com/sheason2019/blog/middleware"
	"github.com/sheason2019/blog/omi/blog"
	"github.com/sheason2019/blog/utils"
)

func (blogImpl) GetAlbums(ctx *gin.Context, page, pageSize int) blog.GetAlbumsResponse {
	daoAlbums, count := utils.QueryWithPagination[dao.Album](page, pageSize, &[]string{"Items", "Items.Article"})

	albums := make([]blog.Album, len(daoAlbums))
	for i, v := range daoAlbums {
		albums[i] = v.ToIDL()
	}

	return blog.GetAlbumsResponse{
		Albums: &albums,
		Pagination: &blog.Pagination{
			Page:     &page,
			PageSize: &pageSize,
			Count:    &count,
		},
	}
}

func attachGetAlbums(r *gin.Engine) {
	r.GET(blog.BlogDefinition.GET_ALBUMS_PATH, middleware.CheckReadLimit, func(ctx *gin.Context) {
		props := blog.GetAlbumsRequest{}
		ctx.BindQuery(&props)

		ctx.JSON(200, controller.GetAlbums(ctx, props.Page, props.PageSize))
	})
}
