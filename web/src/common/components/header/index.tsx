import { Component, ParentProps } from "solid-js";

const Header: Component<ParentProps> = (props) => {
  return <div class="text-2xl">{props.children}</div>;
};

export default Header;
