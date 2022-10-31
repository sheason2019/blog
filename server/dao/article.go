package dao

import (
	"github.com/sheason2019/blog/omi/blog"
	"gorm.io/gorm"
)

type Article struct {
	gorm.Model
	Title   string
	Content string

	Owner string
}

func (model Article) ToIDL() blog.Article {
	article := blog.Article{}

	id := int(model.ID)
	createTime := int(model.CreatedAt.Unix())

	article.Id = &id
	article.Content = &model.Content
	article.Title = &model.Title
	article.Owner = &model.Owner
	article.CreateTime = &createTime

	return article
}
