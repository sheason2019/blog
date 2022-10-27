import { Component, createMemo } from "solid-js";

interface Props {
  variant: "default" | "success" | "error";
}

const VariantBar: Component<Props> = (props) => {
  const cssMemo = createMemo(() => {
    const variant = props.variant;
    const classList = ["variant-bar"];

    if (variant === "error") {
      classList.push("variant-bar-error");
    } else if (variant === "success") {
      classList.push("variant-bar-success");
    } else {
      classList.push("variant-bar-default");
    }

    return classList.join(" ");
  });

  return <div class={cssMemo()} />;
};

export default VariantBar;
