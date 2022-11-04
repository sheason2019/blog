import { Component } from "solid-js";
import Button from "../../../../../../common/components/button";
import Modal from "../../../../../../common/components/modal";
import {
  currentSection,
  deleteSection,
  setShowDeleteConfirm,
  showDeleteConfirm,
} from "../../signals/sections";

const handleCloseDeleteConfirm = () => setShowDeleteConfirm(false);

const DeleteConfirmModal: Component = () => {
  return (
    <Modal
      show={showDeleteConfirm()}
      header="正在尝试删除版块"
      content={<ModalContent />}
      actions={<ModalActions />}
      onClose={handleCloseDeleteConfirm}
    />
  );
};

const ModalContent = () => {
  return (
    <div>
      警告，正在尝试删除ID为{currentSection()?.SectionId}
      的版块，该操作无法恢复，请谨慎确认
    </div>
  );
};

const ModalActions = () => {
  return (
    <div class="flex">
      <Button variant="outline" onClick={handleCloseDeleteConfirm}>
        取消
      </Button>
      <Button variant="error" class="ml-2" onClick={deleteSection}>
        确认删除
      </Button>
    </div>
  );
};

export default DeleteConfirmModal;
