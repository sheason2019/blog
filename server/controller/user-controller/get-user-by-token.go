package user_controller

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/omi/blog"
	user_service "github.com/sheason2019/blog/services/user-service"
)

func (userImpl) GetUserByToken(ctx *gin.Context, token string) blog.User {
	userDao := user_service.GetUserByToken(token)

	user := userDao.ToIDL()
	user_service.RemoveSensitive(&user)

	return user
}

func AttachGetUserByToken(r *gin.Engine) {
	r.GET(blog.UserServiceDefinition.GET_USER_BY_TOKEN_PATH, func(ctx *gin.Context) {
		props := blog.GetUserByTokenRequest{}
		ctx.BindQuery(&props)

		ctx.JSON(200, controller.GetUserByToken(ctx, props.Token))
	})
}
