import Quill from "quill";
import { Component, createEffect, JSX } from "solid-js";
import { handleFocusContent } from "../editor";

let titleQuill: Quill;

export const handleFocusTitle = () => {
  titleQuill.focus();
};

const Title: Component = () => {
  let rootRef: HTMLDivElement | undefined;

  createEffect(() => {
    if (!rootRef) return;

    const quill = new Quill(rootRef, {
      placeholder: "在此输入标题",
    });

    quill.on("text-change", (delta, oldContent) => {
      if (delta.ops[delta.ops.length - 1].insert === "\n") {
        quill.setContents(oldContent);
        setTimeout(() => handleFocusContent(), 0);
      }
      if (delta.ops[delta.ops.length - 1].insert === "\t") {
        quill.setContents(oldContent);
        setTimeout(() => handleFocusContent(), 0);
      }
    });

    titleQuill = quill;
  });

  return <div ref={rootRef} class="text-4xl font-bold title" />;
};

export default Title;
