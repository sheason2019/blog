package blog_controller

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/dao"
	"github.com/sheason2019/blog/db"
	"github.com/sheason2019/blog/middleware"
	"github.com/sheason2019/blog/omi/blog"
)

func (blogImpl) DeleteSections(ctx *gin.Context, SectionId int) int {
	conn := db.GetConn()

	daoSection := dao.Section{}
	daoSection.ID = uint(SectionId)
	conn.Where(&daoSection).Select("Posts").Delete(&daoSection)

	return SectionId
}

func attachDeleteSections(r *gin.Engine) {
	r.DELETE(blog.BlogDefinition.DELETE_SECTIONS_PATH, middleware.CheckWriteLimit, func(ctx *gin.Context) {
		props := blog.DeleteSectionsRequest{}
		ctx.BindQuery(&props)

		ctx.JSON(200, controller.DeleteSections(ctx, props.SectionId))
	})
}
