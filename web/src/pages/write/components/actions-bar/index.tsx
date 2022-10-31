import { useNavigate } from "@solidjs/router";
import { Component } from "solid-js";
import { getBlogClient } from "../../../../api-client";
import Button from "../../../../common/components/button";
import Container from "../../../../common/components/container";
import {
  handleAddErrorNotifier,
  handleAddSuccessNotifier,
} from "../../../../common/utils/use-notifier";
import { content } from "../editor";
import { title } from "../title";

const ActionsBar: Component = () => {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const client = getBlogClient();
    if (title().length === 0) {
      handleAddErrorNotifier("请输入文章标题", "验证错误");
      return;
    }

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

    handleAddSuccessNotifier("正在跳转至阅读页面", "创建文章成功");
    setTimeout(() => {
      navigate("/post/" + res);
    }, 1500);
  };

  return (
    <>
      <div class="absolute inset-x-0 bottom-0 h-14 border-t border-gray-300 bg-white flex justify-end items-center px-2">
        <Container>
          <div class="flex items-center">
            <div class="text-sm">提交至：文章/留言板</div>
            <div class="flex-1" />
            <Button onClick={handleSubmit}>提交</Button>
          </div>
        </Container>
      </div>
      <div class="h-14" />
    </>
  );
};

export default ActionsBar;
