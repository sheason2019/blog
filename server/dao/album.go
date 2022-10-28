package dao

import "gorm.io/gorm"

type Album struct {
	gorm.Model
	Name string

	Posts []Post `gorm:"many2many:posts_album"`
}
