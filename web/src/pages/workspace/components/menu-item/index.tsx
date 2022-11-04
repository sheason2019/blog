import { Component, ParentProps } from "solid-js";

interface Props {
  onClick?: () => any;
}

const MenuItem: Component<ParentProps<Props>> = (props) => {
  return (
    <div
      onClick={props.onClick}
      class="w-full py-2 px-4 hover:bg-gray-200 cursor-pointer"
    >
      {props.children}
    </div>
  );
};

export default MenuItem;
