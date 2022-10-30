import { Component, createEffect, createSignal } from "solid-js";

import { $getRoot, createEditor, LexicalEditor } from "lexical";
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

let editorRef: HTMLDivElement | undefined;

export const handleFocusContent = () => {
  editorRef?.focus();
};

const Editor: Component = () => {
  const [editor, setEditor] = createSignal<LexicalEditor>();

  const [empty, setEmpty] = createSignal(true);

  createEffect(() => {
    if (!editorRef) return;

    const config = {
      namespace: "ContentEditor",
      theme: exampleTheme,
      nodes: [
        HeadingNode,
        ListNode,
        ListItemNode,
        QuoteNode,
        CodeNode,
        CodeHighlightNode,
        TableNode,
        TableCellNode,
        TableRowNode,
        AutoLinkNode,
        LinkNode,
      ],
    };

    const editor = createEditor(config);
    editor.setRootElement(editorRef);
    setEditor(editor);

    registerRichText(editor);

    registerMarkdownShortcuts(editor, TRANSFORMERS);

    editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const markdownStr = $convertToMarkdownString(TRANSFORMERS);
        setEmpty(markdownStr.length === 0);
      });
    });
  });

  return (
    <div
      class="editor editable flex-1"
      onkeydown={(e) => empty() && handleFocusTitle()}
      attr-empty={empty()}
      attr-placeholder="在此输入内容"
      contentEditable
      ref={editorRef}
    />
  );
};

export default Editor;
