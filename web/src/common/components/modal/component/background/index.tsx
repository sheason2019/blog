import { Component, ParentProps } from "solid-js";

interface Props {
  onClick?: () => any;
}

const Background: Component<ParentProps<Props>> = (props) => {
  return (
    <div
      onClick={props.onClick}
      class="fixed inset-0 z-50 bg-black bg-opacity-20 flex justify-center items-center"
      children={props.children}
    />
  );
};

export default Background;
