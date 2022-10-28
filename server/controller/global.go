package controller

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/omi/blog"
)

type blogImpl struct{}

var service blog.Blog = &blogImpl{}

func BindBlogController(r *gin.Engine) {
	attachGetLimit(r)
	attachGetSections(r)
	attachPostSections(r)
}
