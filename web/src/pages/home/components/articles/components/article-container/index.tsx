import { Component, For } from "solid-js";
import { articles } from "../../signals";
import ArticleItem from "../article-item";

const ArticleContainer: Component = () => {
  return (
    <div class="grid grid-cols-3 gap-4 mt-2">
      <For each={articles()}>{(item) => <ArticleItem article={item} />}</For>
    </div>
  );
};

export default ArticleContainer;
