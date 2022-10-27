import {
  Component,
  createEffect,
  createMemo,
  createSignal,
  JSX,
} from "solid-js";
import {
  handleRemoveNotifier,
  handleSetNotifierHeight,
  notifier,
} from "../../../../utils/use-notifier";
import Content from "../content";
import Header from "../header";
import VariantBar from "../variant-bar";

interface Props {
  variant: "error" | "default" | "success";
  header: JSX.Element;
  content: JSX.Element;

  index: number;
}

enum NotifierStatus {
  Hide = "hide",
  Show = "show",
  Close = "close",
}

const NotifierItem: Component<Props> = (props) => {
  let containerRef: HTMLDivElement | undefined;
  const [show, setShow] = createSignal(NotifierStatus.Hide);

  const bottom = createMemo(() => {
    const status = show();
    const list = notifier();

    if (status === NotifierStatus.Hide) return "0px";
    let value = 15;
    list.forEach((element) => {
      if (element.id > props.index) {
        const height = element?.height ?? 0;
        value += height + 15;
      }
    });
    return value + "px";
  });

  createEffect(() => {
    setTimeout(() => {
      handleSetNotifierHeight(props.index, containerRef!.scrollHeight);
      setShow(NotifierStatus.Show);
    }, 50);
    setTimeout(() => {
      setShow(NotifierStatus.Close);
    }, 3000);
  });

  createEffect(() => {
    if (show() === NotifierStatus.Close) {
      setTimeout(() => {
        handleRemoveNotifier(props.index);
      }, 500);
    }
  });

  const className = createMemo(() => {
    const list = ["notifier-item"];

    list.push(show());

    return list.join(" ");
  });

  return (
    <div ref={containerRef} class={className()} style={{ bottom: bottom() }}>
      <VariantBar variant={props.variant} />
      <div class="notifier-content">
        {props.header && <Header>{props.header}</Header>}
        <Content>{props.content}</Content>
      </div>
    </div>
  );
};

export default NotifierItem;
