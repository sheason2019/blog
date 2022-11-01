import { useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";
import { getBlogClient } from "../../../../api-client";
import { Section } from "../../../../api-lib/blog-client";
import { Option } from "../../../../common/components/auto-complete";
import {
  handleAddErrorNotifier,
  handleAddSuccessNotifier,
} from "../../../../common/utils/use-notifier";
import { content } from "../editor";
import { title } from "../title";

// set防止写入重复的标签
const sectionSet = new Set<number>();

/** SubmitModal是否开启 */
export const [open, setOpen] = createSignal(false);

export const [options, setOptions] = createSignal<Option[]>([]);

export const [selectedSections, setSelectedSections] = createSignal<Section[]>(
  []
);

export const handleAddSection = (section: Section) => {
  if (sectionSet.has(section.SectionId)) {
    handleAddErrorNotifier("当前已写入该标签", "添加标签时发生错误");
    return;
  }
  setSelectedSections((prev) => [...prev, section]);
};

export const handleRemoveSection = (sectionId: number) => {
  setSelectedSections((prev) =>
    prev.filter((item) => item.SectionId !== sectionId)
  );
  sectionSet.delete(sectionId);
};
