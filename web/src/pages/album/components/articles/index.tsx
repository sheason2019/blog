import { useNavigate } from "@solidjs/router";
import { Component, For, Show } from "solid-js";
import Header from "../../../../common/components/header";
import ArticleItem from "../../../home/components/articles/components/article-item";
import { album } from "../../signals";

const Articles: Component = () => {
  const navigate = useNavigate();

  const handleToPost = (postId: number) => {
    navigate(`/post/${postId}?albumId=${album()?.Id}`);
  };
  return (
    <Show when={album()!.Articles.length > 0}>
      <Header class="mt-4">文章列表</Header>
      <div class="mt-2">
        <For each={album()!.Articles}>
          {(article) => (
            <div class="mb-2">
              <ArticleItem
                article={article}
                onClick={() => handleToPost(article.Id)}
              />
            </div>
          )}
        </For>
      </div>
    </Show>
  );
};

export default Articles;
