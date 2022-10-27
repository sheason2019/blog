import { Component, For, Show } from "solid-js";
import { notifier } from "../../utils/use-notifier";
import NotifierItem from "./components/notifier-item";

const NotifierStack: Component = () => {
  return (
    <div class="fixed right-0 bottom-0">
      <div class="relative p-2">
        <For each={notifier()}>
          {(item, index) => (
            <NotifierItem
              variant={item.variant}
              content={item.content}
              header={item.header}
              index={item.id}
            />
          )}
        </For>
      </div>
    </div>
  );
};

export default NotifierStack;
