package user_service

import "github.com/sheason2019/blog/omi/blog"

// 注册表单校验
func registValidate(user blog.User) (bool, []string) {
	errList := make([]string, 0)
	if len(*user.Username) < 4 {
		errList = append(errList, "用户名长度不能小于4位")
	}
	if len(*user.Username) > 16 {
		errList = append(errList, "用户名长度不能大于16位")
	}
	if len(*user.Password) < 4 {
		errList = append(errList, "用户密码长度不能小于4位")
	}
	if len(*user.Password) > 64 {
		errList = append(errList, "用户密码长度不能大于64位")
	}

	if len(errList) == 0 {
		return true, errList
	}
	return false, errList
}
