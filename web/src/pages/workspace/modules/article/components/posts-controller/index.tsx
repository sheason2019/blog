import { useNavigate } from "@solidjs/router";
import { Component } from "solid-js";
import Button from "../../../../../../common/components/button";

const PostsController: Component = () => {
  const navigate = useNavigate();

  return (
    <div class="my-2">
      <Button onClick={() => navigate("/write")}>新建文章</Button>
    </div>
  );
};

export default PostsController;
