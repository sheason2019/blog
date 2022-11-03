import _ from "lodash";
import { Component, createEffect, createSignal, For } from "solid-js";
import { getBlogClient } from "../../../../api-client";
import { Section } from "../../../../api-lib/blog-client";
import AutoComplete, {
  Option,
} from "../../../../common/components/auto-complete";
import Button from "../../../../common/components/button";
import Link from "../../../../common/components/link";
import Modal from "../../../../common/components/modal";
import { handleAddErrorNotifier } from "../../../../common/utils/use-notifier";
import SectionTag from "../../../write/components/section-tag";
import {
  selectedSections,
  setSelectedSections,
} from "../../../write/components/submit-modal/signals";

const [sections, setSections] = createSignal<Section[]>([]);
const [options, setOptions] = createSignal<Option[]>([]);
export const [show, setShow] = createSignal(true);

const SettingModal: Component = () => {
  return (
    <Modal
      header="文章筛选设置"
      content={<ModalContent />}
      actions={<ModalActions />}
      show={show()}
    />
  );
};

const ModalContent: Component = () => {
  const sectionSet = new Set();

  createEffect(() => {
    if (show()) {
      sectionSet.clear();
      selectedSections().forEach((section) => {
        sectionSet.add(section.SectionId);
      });

      setSections(selectedSections());
    }
  });

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

  const handleAddSection = (section: Section) => {
    if (sectionSet.has(section.SectionId)) {
      return;
    }

    sectionSet.add(section.SectionId);
    setSections((prev) => [...prev, section]);
  };

  const handleRemoveSection = (sectionId: number) => {
    sectionSet.delete(sectionId);
    setSections((prev) =>
      prev.filter((section) => section.SectionId !== sectionId)
    );
  };

  return (
    <div>
      <div class="flex items-center">
        <div class="w-24">展示顺序</div>
        <Link>最新</Link>
      </div>
      <div class="flex items-center mt-4">
        <div class="w-24">搜索版块</div>
        <AutoComplete
          options={options()}
          onInputChange={handleInputChange}
          onSelect={handleAddSection}
        />
      </div>
      <div class="flex">
        <div class="w-24" />
        <div class="flex">
          <For each={sections()}>
            {(item) => (
              <div class="mt-2">
                <SectionTag section={item} onClose={handleRemoveSection} />
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  );
};

const ModalActions: Component = () => {
  const handleSubmit = () => {
    setSelectedSections(sections());
  };

  return (
    <div>
      <Button class="mr-3" variant="outline">
        取消
      </Button>
      <Button onClick={handleSubmit}>确定</Button>
    </div>
  );
};

export default SettingModal;
