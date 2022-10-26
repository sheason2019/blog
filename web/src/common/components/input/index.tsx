import { Component, createMemo, JSX } from "solid-js";

const Input: Component<JSX.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  const className = createMemo(() => {
    const classList = ["input"];

    if (props.class) {
      classList.push(props.class);
    }

    return classList.join(" ");
  });

  return <input {...props} class={className()} />;
};

export default Input;
