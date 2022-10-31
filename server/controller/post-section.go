package controller

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/dao"
	"github.com/sheason2019/blog/db"
	"github.com/sheason2019/blog/middleware"
	"github.com/sheason2019/blog/omi/blog"
)

func (blogImpl) PostSections(ctx *gin.Context, section blog.Section) blog.Section {
	daoSection := dao.Section{
		Name: *section.SectionName,
	}

	conn := db.GetConn()

	var count int64
	conn.Where(&daoSection).Count(&count)
	if count != 0 {
		panic("已存在同样命名的版块")
	}

	err := conn.Create(&daoSection).Error
	if err != nil {
		panic(err)
	}

	return section
}

func attachPostSections(r *gin.Engine) {
	r.POST(blog.BlogDefinition.POST_SECTIONS_PATH, middleware.CheckWriteLimit, func(ctx *gin.Context) {
		props := blog.PostSectionsRequest{}
		ctx.BindJSON(&props)

		ctx.JSON(200, controller.PostSections(ctx, props.Section))
	})
}
