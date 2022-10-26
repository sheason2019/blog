package dao

import (
	"github.com/sheason2019/blog/omi/blog"
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Username string
	Password string
}

// 转换为IDL类型
func (model User) ToIDL() blog.User {
	user := blog.User{}

	id := int(model.ID)
	user.UserId = &id
	user.Username = &model.Username
	user.Password = &model.Password

	return user
}
