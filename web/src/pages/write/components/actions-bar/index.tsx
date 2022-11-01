import { useNavigate } from "@solidjs/router";
import { Component } from "solid-js";
import { getBlogClient } from "../../../../api-client";
import Button from "../../../../common/components/button";
import Container from "../../../../common/components/container";
import { setOpen } from "../submit-modal/signals";

const ActionsBar: Component = () => {
  const handleOnClick = () => {
    setOpen(true);
  };

  return (
    <>
      <div class="absolute inset-x-0 bottom-0 h-14 border-t border-gray-300 bg-white flex justify-end items-center px-2">
        <Container>
          <div class="flex items-center">
            <div class="text-sm">提交至：文章/留言板</div>
            <div class="flex-1" />
            <Button onClick={handleOnClick}>提交</Button>
          </div>
        </Container>
      </div>
      <div class="h-14" />
    </>
  );
};

export default ActionsBar;
