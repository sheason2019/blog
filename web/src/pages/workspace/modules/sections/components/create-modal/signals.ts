import { createSignal } from "solid-js";
import { getBlogClient } from "../../../../../../api-client";
import { handleAddErrorNotifier } from "../../../../../../common/utils/use-notifier";
import { fetchSections, pagination } from "../../signals/sections";

// Signals
export const [open, setOpen] = createSignal(false);

export const [form, setForm] = createSignal({
  sectionName: "",
});

// 重置表单请求
export const handleReset = () => {
  setForm({ sectionName: "" });
};
// 提交创建版块请求
export const handleSubmit = async () => {
  const client = getBlogClient();
  const [err, _] = await client.PostSections({
    section: {
      SectionId: 0,
      SectionName: form().sectionName,
    },
  });

  if (err) {
    handleAddErrorNotifier(err.message, "新建版块失败");
    throw err;
  }

  await fetchSections(pagination().Page, pagination().PageSize);
  // 关闭Modal
  handleCloseCreateSectionModal();
  // 重置表单
  handleReset();
};

export const handleOpenCreateSectionModal = () => setOpen(true);
export const handleCloseCreateSectionModal = () => setOpen(false);
