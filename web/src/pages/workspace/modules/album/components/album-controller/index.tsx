import { Component } from "solid-js";
import Button from "../../../../../../common/components/button";
import { ModalStatus, setModalStatus } from "../../signals";

const AlbumController: Component = () => {
  return (
    <div class="mt-2">
      <Button onClick={() => setModalStatus(ModalStatus.Create)}>
        εε»Ίει
      </Button>
    </div>
  );
};

export default AlbumController;
