import { Component, createMemo, JSX } from "solid-js";

const Container: Component<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  const className = createMemo(() => `md:px-0 px-2 ${props.class}`);

  return (
    <div
      class="container mx-auto flex flex-col"
      style={{ "max-width": "1024px" }}
    >
      <div {...props} class={className()} />
    </div>
  );
};

export default Container;
