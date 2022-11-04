package service

import (
	"github.com/sheason2019/blog/dao"
	"github.com/sheason2019/blog/omi/blog"
)

func CreateArticleByIDL(article blog.Article) dao.Article {
	daoArticle := dao.Article{}
	daoArticle.Content = *article.Content
	daoArticle.Title = *article.Title
	daoArticle.Owner = "Sheason"

	daoSections := make([]dao.Section, len(*article.Sections))
	for i, v := range *article.Sections {
		daoSections[i] = dao.Section{Name: *v.SectionName}
		daoSections[i].ID = uint(*v.SectionId)
	}
	daoArticle.Sections = daoSections
	return daoArticle
}
