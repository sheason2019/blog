package middleware

import "github.com/gin-gonic/gin"

func GetToken(c *gin.Context) string {
	return c.GetHeader("Authorization")
}
