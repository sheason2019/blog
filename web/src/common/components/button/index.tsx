import { Component, createMemo, JSX } from "solid-js";

type ButtonVariant = "primary" | "error";

interface Props extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const getClassByVariant = (variant: ButtonVariant) => {
  if (variant === "primary") {
    return "button-primary";
  }
  if (variant === "error") {
    return "button-error";
  }
  throw new Error("Button Variant Error!");
};

const Button: Component<Props> = (props) => {
  const className = createMemo(() => {
    const classList = ["button"];

    const variant = props.variant ?? "primary";
    classList.push(getClassByVariant(variant));

    if (props.class) {
      classList.push(props.class);
    }

    return classList.join(" ");
  });

  return <button {...props} class={className()} />;
};

export default Button;
