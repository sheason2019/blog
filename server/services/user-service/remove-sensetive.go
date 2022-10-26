package user_service

import "github.com/sheason2019/blog/omi/blog"

// 用户信息脱敏
func RemoveSensitive(user *blog.User) {
	// 去除密码信息
	user.Password = nil
}
