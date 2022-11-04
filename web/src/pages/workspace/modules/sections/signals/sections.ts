import { createSignal } from "solid-js";
import { getBlogClient } from "../../../../../api-client";
import { Pagination, Section } from "../../../../../api-lib/blog-client";
import { handleAddErrorNotifier } from "../../../../../common/utils/use-notifier";

export const [sections, setSections] = createSignal<Section[]>([]);
export const [pagination, setPagination] = createSignal<Pagination>({
  Page: 1,
  PageSize: 10,
  Count: 0,
});

export const [currentSection, setCurrentSection] = createSignal<
  Section | undefined
>();
export const [showDeleteConfirm, setShowDeleteConfirm] = createSignal(false);

// GET 版块信息
export const fetchSections = async () => {
  const client = getBlogClient();

  const [err, res] = await client.GetSections({
    Page: pagination().Page,
    PageSize: pagination().PageSize,
  });

  if (err) {
    handleAddErrorNotifier(err.message, "获取版块信息时发生错误");
    throw err;
  }

  setSections(res.Sections);
  setPagination(res.Pagination);
};

export const deleteSection = async () => {
  const client = getBlogClient();
  const [err, res] = await client.DeleteSections({
    SectionId: currentSection()!.SectionId,
  });
  if (err) {
    handleAddErrorNotifier(err.message, "删除版块信息时发生错误");
    throw err;
  }

  await fetchSections();
  setShowDeleteConfirm(false);
};
