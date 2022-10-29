import { Component, createEffect, JSX } from "solid-js";
import Quill from "quill";

import "./index.css";
import Toolbar from "../toolbar";
import Title, { handleFocusTitle } from "../title";

let contentQuill: Quill;

export const handleFocusContent = () => {
  contentQuill.focus();
};

const Editor: Component = () => {
  let rootRef: HTMLDivElement | undefined;

  createEffect(() => {
    if (!rootRef) return;

    const quill = new Quill(rootRef, {
      placeholder: "请在此处输入内容……",
    });

    contentQuill = quill;
  });

  const handleOnKeydown: JSX.DOMAttributes<HTMLDivElement>["onkeydown"] = (
    e
  ) => {
    const text = contentQuill.getText();
    if (text.length <= 1 && e.key === "Backspace") {
      handleFocusTitle();
    }
  };

  return (
    <div
      class="mt-2 flex-1 mx-auto container"
      style={{ "max-width": "1024px" }}
    >
      <div class="relative">
        <Title />
        <div onKeyDown={handleOnKeydown} ref={rootRef} />
        <Toolbar />
      </div>
    </div>
  );
};

export default Editor;
