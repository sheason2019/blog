import { Component, ParentProps } from "solid-js";

const ModalContent: Component<ParentProps> = (props) => {
  return <div class="px-4 py-2">{props.children}</div>;
};

export default ModalContent;
