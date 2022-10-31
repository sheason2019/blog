import { Component, createMemo, ParentProps, Show } from "solid-js";
import CloseSvg from "../modal/component/modal-header/close-svg";

interface Props {
  onClose?: () => any;
}

const Tag: Component<ParentProps<Props>> = (props) => {
  const rootClass = createMemo(() => {
    const classList = ["tag"];

    classList.push(props.onClose ? "pr-1" : "pr-2");
    return classList.join(" ");
  });

  return (
    <div class={rootClass()}>
      <span class="tag-content">{props.children}</span>
      <Show when={!props.onClose}>
        <span onClick={props.onClose} class="tag-button">
          <CloseSvg size={14} />
        </span>
      </Show>
    </div>
  );
};

export default Tag;
