import { Component, JSX } from "solid-js";

const Header: Component<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  return <div {...props} class={`text-2xl ${props.class}`} />;
};

export default Header;
