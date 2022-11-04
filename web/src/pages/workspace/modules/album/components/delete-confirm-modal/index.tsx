import { Component } from "solid-js";
import Button from "../../../../../../common/components/button";
import Modal from "../../../../../../common/components/modal";
import { albumId, handleDeleteAlbum, showDeleteConfirm } from "../../signals";

const DeleteConfirmModal: Component = () => {
  return (
    <Modal
      header={<ModalHeader />}
      content={<ModalContent />}
      actions={<ModalActions />}
      show={showDeleteConfirm()}
    />
  );
};

const ModalHeader = () => {
  return <div>确认删除合集</div>;
};

const ModalContent = () => {
  return (
    <div>正在请求删除ID为{albumId()}的合集，该操作不可撤销，请谨慎确认</div>
  );
};

const ModalActions = () => {
  return (
    <div>
      <Button variant="outline">取消</Button>
      <Button variant="error" class="ml-2" onClick={handleDeleteAlbum}>
        确认删除
      </Button>
    </div>
  );
};

export default DeleteConfirmModal;
