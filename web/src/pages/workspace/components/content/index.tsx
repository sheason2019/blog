import { Component, ParentProps } from "solid-js";

const Content: Component<ParentProps> = (props) => {
  return (
    <div class="w-full p-2">
      <div class="container overflow-hidden mx-auto">{props.children}</div>
    </div>
  );
};

export default Content;
