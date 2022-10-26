package user_service

import (
	"strings"

	"github.com/sheason2019/blog/dao"
	"github.com/sheason2019/blog/omi/blog"
)

// 注册用户方法
func Regist(user blog.User) dao.User {
	// 服务端表单校验
	success, errList := registValidate(user)
	if !success {
		panic(strings.Join(errList, "\n"))
	}

	// 检查是否为重复用户名
	if err := CheckRepeatUsername(*user.Username); err != nil {
		panic(err)
	}

	// 创建用户
	return createUser(user)
}
