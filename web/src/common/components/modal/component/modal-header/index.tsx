import { Component, ParentProps } from "solid-js";
import Header from "../../../header";
import CloseSvg from "./close-svg";

const ModalHeader: Component<ParentProps> = (props) => {
  return (
    <div class="pl-4 pr-2 py-2 flex items-center justify-between border-b border-gray-300">
      <Header>{props.children}</Header>
      <div class="hover:bg-gray-200 p-2 rounded-full cursor-pointer">
        <CloseSvg />
      </div>
    </div>
  );
};

export default ModalHeader;
