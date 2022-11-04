package middleware

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/secret"
)

func CheckWriteLimit(c *gin.Context) {
	token := GetToken(c)

	if token == secret.GuestSecret || token == secret.AdminSecret {
		c.Next()
	} else {
		panic("用户不具备写入资源的权限")
	}
}
