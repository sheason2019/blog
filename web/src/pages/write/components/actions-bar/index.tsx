import { Component } from "solid-js";
import { getBlogClient } from "../../../../api-client";
import Button from "../../../../common/components/button";
import { handleAddErrorNotifier } from "../../../../common/utils/use-notifier";
import { content } from "../editor";
import { title } from "../title";

const ActionsBar: Component = () => {
  const handleSubmit = async () => {
    const client = getBlogClient();
    const [err, res] = await client.PostArticle({
      article: {
        Id: 0,
        Title: title(),
        Content: content(),
        Owner: "",
        CreateTime: 0,
      },
    });

    if (err) {
      handleAddErrorNotifier(err.message, "创建文章时发生错误");
      throw err;
    }

    console.log("创建成功");
  };

  return (
    <>
      <div class="absolute inset-x-0 bottom-0 h-14 border-t border-gray-300 bg-white flex justify-end items-center px-2">
        <div class="text-sm">提交至：文章/留言板</div>
        <div class="flex-1" />
        <Button onClick={handleSubmit}>提交</Button>
      </div>
      <div class="h-14" />
    </>
  );
};

export default ActionsBar;
