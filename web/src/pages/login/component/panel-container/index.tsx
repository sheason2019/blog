import { Component, createEffect, ParentProps } from "solid-js";

interface Props {
  reverse?: boolean;
}

const PanelContainer: Component<ParentProps<Props>> = (props) => {
  return (
    <div
      class="absolute duration-700 bg-white flex flex-col justify-center items-center border border-gray-300 w-full h-full rounded-md shadow-md"
      style={{
        transform: props.reverse ? "rotateY(180deg)" : "",
        "backface-visibility": "hidden",
      }}
    >
      {props.children}
    </div>
  );
};

export default PanelContainer;
