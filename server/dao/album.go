package dao

import "gorm.io/gorm"

type Album struct {
	gorm.Model
	Name string

	Items []AlbumItem `gorm:"foreignKey:AlbumId"`
}
