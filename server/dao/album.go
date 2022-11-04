package dao

import (
	"sort"

	"github.com/sheason2019/blog/omi/blog"
	"gorm.io/gorm"
)

type Album struct {
	gorm.Model
	Name     string
	Describe string

	Items []AlbumItem `gorm:"foreignKey:AlbumId"`
}

func (model Album) ToIDL() blog.Album {
	album := blog.Album{}

	id := int(model.ID)

	album.Id = &id
	album.Name = &model.Name
	album.Describe = &model.Describe

	articles := make([]blog.Article, len(model.Items))
	sort.Slice(model.Items, func(i, j int) bool {
		return model.Items[i].Index < model.Items[j].Index
	})
	for i, v := range model.Items {
		articles[i] = v.Article.ToIDL()
	}

	album.Articles = &articles

	return album
}
