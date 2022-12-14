import { Component, createEffect, createSignal } from "solid-js";

import { TRANSFORMERS, $convertToMarkdownString } from "@lexical/markdown";

import { handleFocusTitle } from "../title";
import RichTextEditor from "../../../../common/components/editor";
import { content, setContent } from "../../signals";
import { LexicalEditor } from "lexical";

let editor: LexicalEditor;

let editorRef: HTMLDivElement;

export const handleFocusContent = () => {
  editorRef?.focus();

  const range = window.getSelection();
  range?.selectAllChildren(editorRef);
  range?.collapseToStart();
};

export const handleSyncContent = () => {
  editor.setEditorState(editor.parseEditorState(content()));
};

const Editor: Component = () => {
  const [empty, setEmpty] = createSignal(true);

  createEffect(() => {
    if (!editorRef) return;

    const richEditor = new RichTextEditor(editorRef);
    editor = richEditor.editor;

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
