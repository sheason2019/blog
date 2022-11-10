import { CodeNode, CodeHighlightNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { ListNode, ListItemNode } from "@lexical/list";
import { registerMarkdownShortcuts, TRANSFORMERS } from "@lexical/markdown";
import { HeadingNode, QuoteNode, registerRichText } from "@lexical/rich-text";
import { TableNode, TableCellNode, TableRowNode } from "@lexical/table";
import { createEditor, LexicalEditor } from "lexical";
import exampleTheme from "../../../pages/write/components/editor/themes/example";
import { useList } from "./components/use-list";

class RichTextEditor {
  constructor(root: HTMLElement) {
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
    editor.setRootElement(root);

    registerRichText(editor);

    useList(editor);
    registerMarkdownShortcuts(editor, TRANSFORMERS);

    this.editor = editor;
  }

  editor: LexicalEditor;
}

export default RichTextEditor;
