import { Component, JSX, Show } from "solid-js";
import Background from "./component/background";
import Container from "./component/container";
import ModalActions from "./component/modal-actions";
import ModalContent from "./component/modal-content";
import ModalHeader from "./component/modal-header";

interface Props {
  header: JSX.Element;
  content: JSX.Element;
  actions: JSX.Element;
  show: boolean;
  onClose?: () => any;
}

const Modal: Component<Props> = (props) => {
  return (
    <Show when={props.show}>
      <Background onClick={props.onClose}>
        <Container>
          <ModalHeader onClose={props.onClose}>{props.header}</ModalHeader>
          <ModalContent>{props.content}</ModalContent>
          <ModalActions>{props.actions}</ModalActions>
        </Container>
      </Background>
    </Show>
  );
};

export default Modal;
