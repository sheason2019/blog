package controller

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/dao"
	"github.com/sheason2019/blog/middleware"
	"github.com/sheason2019/blog/omi/blog"
	"github.com/sheason2019/blog/utils"
)

func (blogImpl) GetSections(ctx *gin.Context, page, pageSize int) blog.GetSectionsResponse {
	daoSections, count := utils.QueryWithPagination[dao.Section](
		page,
		pageSize,
		nil,
	)

	sections := make([]blog.Section, len(daoSections))
	for i, v := range daoSections {
		sections[i] = v.ToIDL()
	}

	return blog.GetSectionsResponse{
		Sections: &sections,
		Pagination: &blog.Pagination{
			Page:     &page,
			PageSize: &pageSize,
			Count:    &count,
		},
	}
}

func attachGetSections(r *gin.Engine) {
	r.GET(blog.BlogDefinition.GET_SECTIONS_PATH, middleware.CheckReadLimit, func(ctx *gin.Context) {
		props := blog.GetSectionsRequest{}
		ctx.BindQuery(&props)

		ctx.JSON(200, service.GetSections(ctx, props.Page, props.PageSize))
	})
}
