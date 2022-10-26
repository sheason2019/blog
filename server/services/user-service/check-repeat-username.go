package user_service

import (
	"errors"

	"github.com/sheason2019/blog/dao"
	"github.com/sheason2019/blog/db"
)

// 检查是否有重复的用户名
func CheckRepeatUsername(username string) error {
	conn := db.GetConn()

	var count int64 = 0

	conn.Where(&dao.User{Username: username}).Count(&count)
	if count == 0 {
		return nil
	}
	return errors.New("重复的用户名")
}
