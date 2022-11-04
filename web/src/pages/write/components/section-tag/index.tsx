import { Component, createMemo } from "solid-js";
import { Section } from "../../../../api-lib/blog-client";
import Tag from "../../../../common/components/tag";

interface Props {
  section: Section;
  onClose?: (sectionId: number) => any;
}

const SectionTag: Component<Props> = (props) => {
  const handleClose = createMemo(() => {
    if (props.onClose) {
      return () => props.onClose!(props.section.SectionId);
    }
    return undefined;
  });

  return <Tag onClose={handleClose()}>{props.section.SectionName}</Tag>;
};

export default SectionTag;
