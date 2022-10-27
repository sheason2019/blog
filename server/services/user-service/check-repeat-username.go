package user_service

import (
	"errors"
	"fmt"

	"github.com/sheason2019/blog/dao"
	"github.com/sheason2019/blog/db"
)

// 检查是否有重复的用户名
func CheckRepeatUsername(username string) error {
	conn := db.GetConn()

	var count int64 = 0

	user := &dao.User{Username: username}
	conn.Model(user).Where(user).Count(&count)
	fmt.Println(count)
	if count == 0 {
		return nil
	}
	return errors.New("重复的用户名")
}
