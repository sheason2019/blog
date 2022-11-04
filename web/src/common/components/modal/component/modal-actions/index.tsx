import { Component, ParentProps } from "solid-js";

const ModalActions: Component<ParentProps> = (props) => {
  return (
    <div class="px-4 py-2 border-t border-gray-300 flex justify-end">
      {props.children}
    </div>
  );
};

export default ModalActions;
