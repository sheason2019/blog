import { Component, ParentProps } from "solid-js";

const OptionsContainer: Component<ParentProps> = (props) => {
  return (
    <div class="text-sm rounded-md w-7 h-7 flex justify-center items-center hover:bg-gray-200 cursor-pointer">
      {props.children}
    </div>
  );
};

export default OptionsContainer;
