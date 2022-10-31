import { Component, createEffect, createSignal } from "solid-js";

import { createEditor } from "lexical";
import { HeadingNode, QuoteNode, registerRichText } from "@lexical/rich-text";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import {
  TRANSFORMERS,
  registerMarkdownShortcuts,
  $convertToMarkdownString,
} from "@lexical/markdown";

import exampleTheme from "./themes/example";
import "./index.css";
import { handleFocusTitle } from "../title";
import RichTextEditor from "../../../../common/components/editor";

let editorRef: HTMLDivElement;

export const handleFocusContent = () => {
  editorRef?.focus();

  const range = window.getSelection();
  range?.selectAllChildren(editorRef);
  range?.collapseToStart();
};

export const [content, setContent] = createSignal("");

const Editor: Component = () => {
  const [empty, setEmpty] = createSignal(true);

  createEffect(() => {
    if (!editorRef) return;

    const richEditor = new RichTextEditor(editorRef);
    const editor = richEditor.editor;

    editor.registerUpdateListener(({ editorState }) => {
      setContent(JSON.stringify(editorState.toJSON()));
      editorState.read(() => {
        const markdownStr = $convertToMarkdownString(TRANSFORMERS);
        setTimeout(() => setEmpty(markdownStr.length === 0), 0);
      });
    });
  });

  return (
    <div
      class="editor editable flex-1"
      onkeydown={(e) => e.key === "Backspace" && empty() && handleFocusTitle()}
      attr-empty={empty()}
      attr-placeholder="在此输入内容"
      contentEditable
      ref={editorRef}
    />
  );
};

export default Editor;
