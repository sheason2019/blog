import { Component } from "solid-js";
import Button from "../../../../../../common/components/button";
import Input from "../../../../../../common/components/input";
import Modal from "../../../../../../common/components/modal";
import {
  setForm,
  handleSubmit,
  handleReset,
  form,
  open,
  handleCloseCreateSectionModal,
} from "./signals";

const Form: Component = () => {
  return (
    <div class="flex items-center">
      <div class="w-28 text-right">版块名称：</div>
      <Input
        value={form().sectionName}
        onInput={(e) => setForm({ sectionName: e.currentTarget.value })}
      />
    </div>
  );
};

const Actions: Component = () => {
  return (
    <>
      <Button variant="outline" class="mr-4" onClick={handleReset}>
        重置
      </Button>
      <Button onClick={handleSubmit}>提交</Button>
    </>
  );
};

const CreateModal: Component = () => {
  return (
    <Modal
      show={open()}
      onClose={handleCloseCreateSectionModal}
      header="新建版块"
      content={<Form />}
      actions={<Actions />}
    />
  );
};

export default CreateModal;
