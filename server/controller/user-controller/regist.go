package user_controller

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/omi/blog"
	user_service "github.com/sheason2019/blog/services/user-service"
)

func (userImpl) Regist(ctx *gin.Context, user blog.User) blog.User {
	userDao := user_service.Regist(user)

	registedUser := userDao.ToIDL()
	user_service.RemoveSensitive(&registedUser)

	return registedUser
}

func AttachRegist(r *gin.Engine) {
	r.POST(blog.UserServiceDefinition.REGIST_PATH, func(ctx *gin.Context) {
		props := blog.RegistRequest{}
		ctx.BindJSON(&props)

		ctx.JSON(200, controller.Regist(ctx, props.User))
	})
}
