import { useNavigate } from "@solidjs/router";
import { Component, For } from "solid-js";
import { Article } from "../../../../../../api-lib/blog-client";
import ArticleItem from "../article-item";

interface Props {
  articles?: Article[];
}

const ArticleContainer: Component<Props> = (props) => {
  const navigate = useNavigate();

  return (
    <div class="grid grid-cols-3 gap-4 mt-2">
      <For each={props.articles}>
        {(item) => (
          <ArticleItem
            article={item}
            onClick={() => navigate("/post/" + item.Id)}
          />
        )}
      </For>
    </div>
  );
};

export default ArticleContainer;
