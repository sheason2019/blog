import { Component, createMemo, JSX, ParentProps } from "solid-js";

const Container: Component<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  const className = createMemo(
    () => `container mx-auto flex flex-col ${props.class}`
  );

  const style = createMemo(() => {
    const propsStyle = typeof props.style === "object" ? props.style : {};

    return {
      ...propsStyle,
      "max-width": "1024px",
    };
  });

  return <div {...props} class={className()} style={style()} />;
};

export default Container;
