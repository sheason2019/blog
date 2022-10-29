import { Component, ParentProps } from "solid-js";
import Container from "../../../../common/components/container";

const Content: Component<ParentProps> = (props) => {
  return (
    <div class="w-full p-2">
      <Container>{props.children}</Container>
    </div>
  );
};

export default Content;
