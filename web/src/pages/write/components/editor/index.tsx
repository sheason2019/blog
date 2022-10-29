import { Component, createEffect, createSignal, JSX } from "solid-js";
import Quill from "quill";

import "./index.css";
import Toolbar, { handleSetTop, setToolbar } from "../toolbar";
import Title, { handleFocusTitle, titleHeight } from "../title";
import Container from "../../../../common/components/container";

let contentQuill: Quill;

export const handleFocusContent = () => {
  contentQuill.focus();
};

const Editor: Component = () => {
  let rootRef: HTMLDivElement | undefined;

  const [contentEmpty, setContentEmpty] = createSignal(true);
  const [useBackSpace, setUseBackSpace] = createSignal(false);

  // 创建Quill实例
  createEffect(() => {
    if (!rootRef) return;

    const quill = new Quill(rootRef, {
      placeholder: "请在此处输入内容……",
    });

    quill.on("text-change", () => {
      const text = quill.getText();

      setTimeout(() => setContentEmpty(text.length <= 1), 0);
    });

    contentQuill = quill;
  });

  const handleOnKeydown: JSX.DOMAttributes<HTMLDivElement>["onkeydown"] = (
    e
  ) => {
    if (e.key === "Backspace") {
      setUseBackSpace(true);
    } else {
      setUseBackSpace(false);
    }
  };

  const handleOnMouseEnter = (e: MouseEvent) => {
    const dom = e.target! as HTMLParagraphElement;
    if (dom.tagName !== "P") return;

    const top = dom.offsetTop + titleHeight;

    handleSetTop(top);
  };

  const handleOnMouseLeave = (e: MouseEvent) => {
    const dom = e.target! as HTMLParagraphElement;
    if (dom.tagName !== "P") return;

    setToolbar((prev) => ({ ...prev, show: false }));
  };

  createEffect(() => {
    rootRef!.addEventListener("mouseenter", handleOnMouseEnter, true);
    rootRef!.addEventListener("mouseleave", handleOnMouseLeave, true);
  });

  createEffect(() => {
    const empty = contentEmpty();
    const backspace = useBackSpace();
    if (empty && backspace) {
      handleFocusTitle();
    } else {
      setUseBackSpace(false);
    }
  });

  return (
    <div class="relative flex-1 flex flex-col">
      <Container class="flex-1 flex flex-col">
        <div>
          <Title />
        </div>
        <div
          class="flex-1 cursor-text"
          onClick={() => contentQuill.focus()}
          onKeyDown={handleOnKeydown}
          ref={rootRef}
        />
        <Toolbar />
      </Container>
    </div>
  );
};

export default Editor;
