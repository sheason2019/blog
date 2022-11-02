import { useNavigate } from "@solidjs/router";
import { Component, createEffect } from "solid-js";
import Header from "../../../../common/components/header";
import Link from "../../../../common/components/link";
import ArticleContainer from "./components/article-container";
import { handleFetchArticles } from "./signals";

const Articles: Component = () => {
  createEffect(() => {
    handleFetchArticles();
  });

  const navigate = useNavigate();

  return (
    <div>
      <div class="flex justify-between">
        <Header>最近更新</Header>
        <Link onClick={() => navigate("/posts")}>查看全部</Link>
      </div>
      <ArticleContainer />
    </div>
  );
};

export default Articles;
