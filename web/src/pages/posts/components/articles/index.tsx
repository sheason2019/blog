import { Component, createEffect } from "solid-js";
import ArticleContainer from "../../../home/components/articles/components/article-container";
import { selectedSections } from "../../../write/components/submit-modal/signals";
import { articles, fetchArticles } from "../../signals";

const Articles: Component = () => {
  createEffect((prev) => {
    if (prev !== selectedSections()) {
      fetchArticles();
    }

    return selectedSections();
  });

  return <ArticleContainer articles={articles()} />;
};

export default Articles;
