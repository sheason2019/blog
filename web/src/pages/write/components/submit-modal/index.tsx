import { Component } from "solid-js";
import AutoComplete from "../../../../common/components/auto-complete";
import Button from "../../../../common/components/button";
import Modal from "../../../../common/components/modal";
import Tag from "../../../../common/components/tag";

const SubmitModal: Component = () => {
  return (
    <Modal
      header="创建文章"
      content={<ModalContent />}
      actions={<ModalActions />}
      show
    />
  );
};

const ModalContent: Component = () => {
  const handleOnClickOptions = (value: any) => {
    console.log(value);
  };

  return (
    <div>
      <div class="flex items-center">
        <div>添加标签：</div>
        <AutoComplete options={[{ label: "TEST", value: 0 }]} />
      </div>
      <div>
        <div>当前标签：</div>
        <Tag>TestTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT</Tag>
      </div>
    </div>
  );
};

const ModalActions: Component = () => {
  return (
    <div>
      <Button>提交</Button>
    </div>
  );
};

export default SubmitModal;
