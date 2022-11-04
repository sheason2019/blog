import { Component } from "solid-js";
import Button from "../../../../../../common/components/button";
import { ModalStatus, setModalStatus } from "../../signals";

const AlbumController: Component = () => {
  return (
    <div class="mt-2">
      <Button onClick={() => setModalStatus(ModalStatus.Create)}>
        创建合集
      </Button>
    </div>
  );
};

export default AlbumController;
