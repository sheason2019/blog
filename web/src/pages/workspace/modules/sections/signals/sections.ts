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

export const fetchSections = async (page: number, pageSize: number) => {
  const client = getBlogClient();

  const [err, res] = await client.GetSections({
    Page: page,
    PageSize: pageSize,
  });

  if (err) {
    handleAddErrorNotifier(err.message, "获取表格发生错误");
    throw err;
  }

  setSections(res.Sections);
  setPagination(res.Pagination);
};
