import { Component } from "solid-js";
import Button from "../../../../../../common/components/button";
import { handleOpenCreateSectionModal } from "../create-modal/signals";

const SectionController: Component = () => {
  return (
    <div class="mb-2">
      <Button onClick={handleOpenCreateSectionModal} class="px-4">
        新建版块
      </Button>
    </div>
  );
};

export default SectionController;
