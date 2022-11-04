package dao

import "gorm.io/gorm"

type AlbumItem struct {
	gorm.Model

	Index uint64

	Album   Album `gorm:"foreignKey:AlbumId"`
	AlbumId uint

	Article   Article `gorm:"foreignKey:ArticleId"`
	ArticleId uint
}
