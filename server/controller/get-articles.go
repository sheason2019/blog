package controller

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/dao"
	"github.com/sheason2019/blog/middleware"
	"github.com/sheason2019/blog/omi/blog"
	"github.com/sheason2019/blog/utils"
)

func (blogImpl) GetArticles(ctx *gin.Context, page, pageSize int) blog.GetArticlesResponse {
	daoArticles, count := utils.QueryWithPagination[dao.Article](
		page,
		pageSize,
		nil,
	)

	articles := make([]blog.Article, len(daoArticles))
	for i, v := range daoArticles {
		articles[i] = v.ToIDL()
	}

	return blog.GetArticlesResponse{
		Pagination: &blog.Pagination{
			Page:     &page,
			PageSize: &pageSize,
			Count:    &count,
		},
		Articles: &articles,
	}
}

func attachGetArticles(r *gin.Engine) {
	r.GET(blog.BlogDefinition.GET_ARTICLES_PATH, middleware.CheckReadLimit, func(ctx *gin.Context) {
		props := blog.GetArticlesRequest{}
		ctx.BindQuery(&props)

		ctx.JSON(200, controller.GetArticles(ctx, props.Page, props.PageSize))
	})
}
