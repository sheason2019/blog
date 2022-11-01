import { LexicalEditor } from "lexical";
import { Component, createEffect } from "solid-js";
import { article } from "../..";
import RichTextEditor from "../../../../common/components/editor";

const Article: Component = () => {
  let articleRef: HTMLDivElement | undefined;

  let editor: LexicalEditor | undefined;
  createEffect(() => {
    if (!articleRef) return;

    const editorContainer = new RichTextEditor(articleRef);
    editor = editorContainer.editor;
    editor.setEditable(false);
  });

  createEffect(() => {
    const _article = article();
    if (!editor || !_article) return;

    editor.setEditorState(editor.parseEditorState(_article?.Content));
  });

  return <div class="article" ref={articleRef} />;
};

export default Article;
