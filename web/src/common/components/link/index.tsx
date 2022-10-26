import { Component, createMemo, JSX } from "solid-js";

const Link: Component<JSX.AnchorHTMLAttributes<HTMLAnchorElement>> = (
  props
) => {
  const className = createMemo(() => {
    const classList = ["link select-none"];

    if (props.class) {
      classList.push(props.class);
    }

    return classList.join(" ");
  });

  return <a {...props} class={className()} />;
};

export default Link;
