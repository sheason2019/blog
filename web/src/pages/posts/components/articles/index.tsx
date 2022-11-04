import { Component, createEffect, Match, Switch } from "solid-js";
import { Section } from "../../../../api-lib/blog-client";
import ArticleContainer from "../../../home/components/articles/components/article-container";
import {
  articles,
  fetchArticles,
  loading,
  searchGetNew,
  searchSections,
} from "../../signals";
import Loading from "../loading";

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

  return (
    <Switch>
      <Match when={loading()}>
        <Loading />
      </Match>
      <Match when={!loading()}>
        <ArticleContainer articles={articles()} />
      </Match>
    </Switch>
  );
};

export default Articles;
