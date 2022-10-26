package user_controller

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/omi/blog"
	user_service "github.com/sheason2019/blog/services/user-service"
)

func (userImpl) Login(ctx *gin.Context, user blog.User) string {
	userDao, err := user_service.Login(user)
	if err != nil {
		panic(err)
	}

	token, err := user_service.CreateJWT(*userDao)
	if err != nil {
		panic(err)
	}

	return token
}

func AttachLogin(r *gin.Engine) {
	r.POST(blog.UserServiceDefinition.LOGIN_PATH, func(ctx *gin.Context) {
		props := blog.LoginRequest{}
		ctx.BindJSON(&props)

		ctx.JSON(200, controller.Login(ctx, props.User))
	})
}
