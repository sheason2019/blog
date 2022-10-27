import { Component, ParentProps } from "solid-js";

const Header: Component<ParentProps> = (props) => {
  return <div class="font-bold text-xl">{props.children}</div>;
};

export default Header;
