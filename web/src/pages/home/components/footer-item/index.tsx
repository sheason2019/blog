import { Component, ParentProps } from "solid-js";

const FooterItem: Component<ParentProps> = (props) => {
  return (
    <div class="footer-item flex flex-col justify-center items-center bg-gray-200">
      {props.children}
    </div>
  );
};

export default FooterItem;
