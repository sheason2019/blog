import { Component, createEffect } from "solid-js";
import Header from "../../../../common/components/header";
import Link from "../../../../common/components/link";
import ArticleContainer from "./components/article-container";
import { handleFetchArticles } from "./signals";

const Articles: Component = () => {
  createEffect(() => {
    handleFetchArticles();
  });

  return (
    <div>
      <div class="flex justify-between">
        <Header>最新文章</Header>
        <Link>查看全部</Link>
      </div>
      <ArticleContainer />
    </div>
  );
};

export default Articles;
