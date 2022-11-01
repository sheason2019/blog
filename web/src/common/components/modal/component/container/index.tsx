import { Component, ParentProps } from "solid-js";

enum ModalSize {
  sm = "640px",
  md = "768px",
  lg = "1024px",
}

const Container: Component<ParentProps> = (props) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      class="bg-white shadow-md rounded-md"
      style={{ width: ModalSize.sm }}
    >
      {props.children}
    </div>
  );
};

export default Container;
