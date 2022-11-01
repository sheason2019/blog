package controller

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/dao"
	"github.com/sheason2019/blog/db"
	"github.com/sheason2019/blog/omi/blog"
)

func (blogImpl) GetSectionsByName(ctx *gin.Context, name string) []blog.Section {
	daoSections := make([]dao.Section, 0)
	conn := db.GetConn()
	err := conn.Model(&dao.Section{}).Where("name like ?", "%"+name+"%").Find(&daoSections).Error
	if err != nil {
		panic(err)
	}

	sections := make([]blog.Section, len(daoSections))
	for i, v := range daoSections {
		sections[i] = v.ToIDL()
	}

	return sections
}

func attachGetSectionsByName(r *gin.Engine) {
	r.GET(blog.BlogDefinition.GET_SECTIONS_BY_NAME_PATH, func(ctx *gin.Context) {
		props := blog.GetSectionsByNameRequest{}
		ctx.BindQuery(&props)

		ctx.JSON(200, controller.GetSectionsByName(ctx, props.Name))
	})
}
