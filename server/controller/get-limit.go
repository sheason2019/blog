package controller

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/omi/blog"
	"github.com/sheason2019/blog/secret"
)

func (blogImpl) GetLimit(ctx *gin.Context, token string) blog.LimitResponse {
	resp := blog.LimitResponse{}
	t := true
	f := false
	if token == secret.AdminSecret {
		resp.Read = &t
		resp.Write = &t
	} else if token == secret.GuestSecret {
		resp.Read = &t
		resp.Write = &f
	} else {
		panic("无效的Token信息")
	}

	return resp
}

func attachGetLimit(r *gin.Engine) {
	r.GET(blog.BlogDefinition.GET_LIMIT_PATH, func(ctx *gin.Context) {
		props := &blog.GetLimitRequest{}
		ctx.BindQuery(props)
		ctx.JSON(200, service.GetLimit(ctx, props.Token))
	})
}
