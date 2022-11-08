import { Component, createEffect, For } from "solid-js";
import AutoComplete from "../../../../common/components/auto-complete";
import Button from "../../../../common/components/button";
import Modal from "../../../../common/components/modal";
import _ from "lodash";
import { getBlogClient } from "../../../../api-client";
import {
  handleAddErrorNotifier,
  handleAddSuccessNotifier,
} from "../../../../common/utils/use-notifier";
import { Section } from "../../../../api-lib/blog-client";
import {
  handleAddSection,
  handleRemoveSection,
  open,
  options,
  selectedSections,
  setOpen,
  setOptions,
} from "./signals";
import Tag from "../../../../common/components/tag";
import { useNavigate } from "@solidjs/router";
import { content } from "../editor";
import { title } from "../title";

const SubmitModal: Component = () => {
  createEffect(() => setOpen(false));

  return (
    <Modal
      header="创建文章"
      content={<ModalContent />}
      actions={<ModalActions />}
      onClose={() => setOpen(false)}
      show={open()}
    />
  );
};

const ModalContent: Component = () => {
  const handleOnSelect = (value: Section) => {
    handleAddSection(value);
  };

  const handleInputChange = _.debounce(
    async (value: string) => {
      const client = getBlogClient();

      const [err, res] = await client.GetSectionsByName({ name: value });
      if (err) {
        handleAddErrorNotifier(err.message, "搜索标签时出现错误");
        throw err;
      }

      setOptions(
        res.map((section) => ({
          label: section.SectionName,
          value: section,
        }))
      );
    },
    500,
    {
      trailing: true,
      maxWait: 1000,
    }
  );

  return (
    <div>
      <div class="flex items-center">
        <div>添加标签：</div>
        <AutoComplete
          onInputChange={handleInputChange}
          onSelect={handleOnSelect}
          options={options()}
        />
      </div>
      <div class="flex mt-4">
        <div>当前标签：</div>
        <div>
          <For each={selectedSections()}>
            {(item) => (
              <Tag onClose={() => handleRemoveSection(item.SectionId)}>
                {item.SectionName}
              </Tag>
            )}
          </For>
        </div>
      </div>
    </div>
  );
};

const ModalActions: Component = () => {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const client = getBlogClient();
    if (title().length === 0) {
      handleAddErrorNotifier("请输入文章标题", "验证错误");
      return;
    }

    const [err, res] = await client.PostArticle({
      article: {
        Id: 0,
        Title: title(),
        Content: content(),
        Owner: "",
        CreateTime: 0,
        Sections: selectedSections(),
      },
    });

    if (err) {
      handleAddErrorNotifier(err.message, "创建文章时发生错误");
      throw err;
    }

    handleAddSuccessNotifier("正在跳转至阅读页面", "创建文章成功");
    setTimeout(() => {
      navigate("/post/" + res);
    }, 1500);
  };

  return (
    <div>
      <Button onClick={handleSubmit}>提交</Button>
    </div>
  );
};

export default SubmitModal;
