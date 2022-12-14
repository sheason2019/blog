import { Component, ParentProps } from "solid-js";
import Header from "../../../header";
import CloseSvg from "./close-svg";

interface Props {
  onClose?: () => any;
}

const ModalHeader: Component<ParentProps<Props>> = (props) => {
  return (
    <div class="pl-4 pr-2 py-2 flex items-center justify-between border-b border-gray-300">
      <Header>{props.children}</Header>
      <div
        onClick={props.onClose}
        class="hover:bg-gray-200 p-2 rounded-full cursor-pointer"
      >
        <CloseSvg />
      </div>
    </div>
  );
};

export default ModalHeader;
