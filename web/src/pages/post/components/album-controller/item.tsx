import { Component, ParentProps } from "solid-js";

interface Props extends ParentProps {
  onClick?: () => any;
}

const Item: Component<Props> = (props) => {
  return (
    <div
      onClick={props.onClick}
      class="flex flex-col justify-center items-center border border-blue-500 py-4 rounded-md font-bold cursor-pointer hover:bg-blue-50"
    >
      {props.children}
    </div>
  );
};

export default Item;
