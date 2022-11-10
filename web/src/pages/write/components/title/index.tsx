import { Component, createEffect, JSX } from "solid-js";
import { setTitle, title } from "../../signals";
import { handleFocusContent } from "../editor";

let titleRef: HTMLDivElement;

export const handleFocusTitle = () => {
  titleRef.focus();

  const range = window.getSelection();
  range?.selectAllChildren(titleRef);
  range?.collapseToEnd();
};

export const handleSyncTitle = () => {
  titleRef.innerText = title();
};

const Title: Component = () => {
  const contentEditable: any = "plaintext-only";

  const handleBeforeInput: JSX.DOMAttributes<HTMLDivElement>["onbeforeinput"] =
    (e) => {
      // 用户在标题栏输入回车键时
      if (e.inputType === "insertLineBreak") {
        // 阻止这次输入
        e.preventDefault();
        // 聚焦到内容页面
        handleFocusContent();
      }
    };

  return (
    <div
      ref={titleRef}
      contentEditable={contentEditable}
      onBeforeInput={handleBeforeInput}
      oninput={(e) => setTitle(e.currentTarget.innerText)}
      class="text-4xl py-4 font-bold title editable"
      attr-empty={title().length === 0}
      attr-placeholder="请输入标题"
    />
  );
};

export default Title;
