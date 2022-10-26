/**
* 本文件由Omi.js自动生成，谨慎改动！
* 生成时间：2022年10月26日 23:47:33.
 */
package blog

import (
	"github.com/gin-gonic/gin"
)

type UserService interface {
	Login(ctx *gin.Context, user User) string
	Regist(ctx *gin.Context, user User) User
	GetUserByToken(ctx *gin.Context, token string) User
}
type TypeUserServiceDefinition struct {
	LOGIN_PATH             string
	REGIST_PATH            string
	GET_USER_BY_TOKEN_PATH string
}

var UserServiceDefinition = &TypeUserServiceDefinition{
	LOGIN_PATH:             "/UserService.Login",
	REGIST_PATH:            "/UserService.Regist",
	GET_USER_BY_TOKEN_PATH: "/UserService.UserByToken",
}
