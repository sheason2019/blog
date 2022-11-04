import { useNavigate } from "@solidjs/router";
import { Component, For, Show } from "solid-js";
import { Article } from "../../../../../../api-lib/blog-client";
import { createTimeString } from "../../../../../../common/utils/time";
import SectionTag from "../../../../../write/components/section-tag";

interface Props {
  article: Article;
}

const ArticleItem: Component<Props> = (props) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/post/" + props.article.Id);
  };

  return (
    <div
      onClick={handleOnClick}
      class="p-2 border border-gray-300 bg-gray-50 rounded-md hover:bg-gray-200 cursor-pointer"
    >
      <div class="font-bold">{props.article.Title}</div>
      <div class="text-gray-500 text-sm mt-0.5">
        {createTimeString(props.article.CreateTime)}
      </div>
      <Show when={props.article.Sections && props.article.Sections.length > 0}>
        <div class="flex">
          <For each={props.article.Sections}>
            {(item) => <SectionTag section={item} />}
          </For>
        </div>
      </Show>
    </div>
  );
};

export default ArticleItem;
