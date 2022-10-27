import { Component, ParentProps } from "solid-js";

const Content: Component<ParentProps> = (props) => {
  return <div class="mt-1">{props.children}</div>;
};

export default Content;
