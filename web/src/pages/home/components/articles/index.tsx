import { useNavigate } from "@solidjs/router";
import { Component, createEffect } from "solid-js";
import Header from "../../../../common/components/header";
import Link from "../../../../common/components/link";
import ArticleContainer from "./components/article-container";
import { articles, handleFetchArticles } from "./signals";

const Articles: Component = () => {
  createEffect(() => {
    handleFetchArticles();
  });

  const navigate = useNavigate();

  return (
    <div class="px-2 md:px-0">
      <div class="flex justify-between">
        <Header>最近更新</Header>
        <Link onClick={() => navigate("/posts")}>查看全部</Link>
      </div>
      <ArticleContainer articles={articles()} />
    </div>
  );
};

export default Articles;
