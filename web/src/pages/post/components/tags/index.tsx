import { Component, For, Show } from "solid-js";
import { article } from "../..";
import Header from "../../../../common/components/header";
import Tag from "../../../../common/components/tag";

const Tags: Component = () => {
  return (
    <Show when={article()?.Sections && article()!.Sections.length > 0}>
      <Header>关联标签</Header>
      <div class="mt-2">
        <For each={article()?.Sections}>
          {(section) => <Tag>{section.SectionName}</Tag>}
        </For>
      </div>
    </Show>
  );
};

export default Tags;
