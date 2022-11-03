import { Component, createEffect } from "solid-js";
import { Section } from "../../../../api-lib/blog-client";
import ArticleContainer from "../../../home/components/articles/components/article-container";
import {
  articles,
  fetchArticles,
  searchGetNew,
  searchSections,
} from "../../signals";

const Articles: Component = () => {
  createEffect((prev: { sections: Section[]; getNew: boolean } | undefined) => {
    const sections = searchSections();
    const getNew = searchGetNew();

    if (
      !prev ||
      (prev && (prev.getNew !== getNew || prev.sections !== sections))
    ) {
      fetchArticles();
    }

    return {
      sections,
      getNew,
    };
  });

  return <ArticleContainer articles={articles()} />;
};

export default Articles;
