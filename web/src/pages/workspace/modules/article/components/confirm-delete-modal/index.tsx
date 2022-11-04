import { Component } from "solid-js";
import Button from "../../../../../../common/components/button";
import Modal from "../../../../../../common/components/modal";
import {
  handleDeleteArticle,
  setShowDeleteConfirm,
  showDeleteConfirm,
} from "../../signals";

const ConfirmDeleteModal: Component = () => {
  return (
    <Modal
      show={showDeleteConfirm()}
      header="正在删除文章"
      content={<ModalContent />}
      actions={<ModalActions />}
    />
  );
};

const ModalContent = () => {
  return <div>正在尝试删除ID为?的文章，该操作不可恢复，请谨慎确认</div>;
};

const ModalActions = () => {
  return (
    <div>
      <Button variant="outline" onClick={() => setShowDeleteConfirm(false)}>
        取消
      </Button>
      <Button variant="error" class="ml-2" onClick={handleDeleteArticle}>
        确认删除
      </Button>
    </div>
  );
};

export default ConfirmDeleteModal;
