/**
* 本文件由Omi.js自动生成，谨慎改动！
* 生成时间：2022年10月26日 23:47:33.
 */
package blog

type User struct {
	UserId   *int
	Username *string
	Password *string
}
type LoginRequest struct {
	User User `json:"user"`
}
type RegistRequest struct {
	User User `json:"user"`
}
type GetUserByTokenRequest struct {
	Token string `form:"token"`
}
