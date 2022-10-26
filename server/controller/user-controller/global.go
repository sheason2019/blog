package user_controller

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/omi/blog"
)

type userImpl struct{}

var controller blog.UserService = userImpl{}

func BindUserService(r *gin.Engine) {
	AttachLogin(r)
	AttachRegist(r)
	AttachGetUserByToken(r)
}
