import { useParams } from "@solidjs/router";
import { Component, createEffect } from "solid-js";
import { Article } from "../../api-lib/blog-client";
import AppBar from "../../common/components/app-bar";
import ActionsBar from "./components/actions-bar";
import Main from "./components/main";
import SubmitModal from "./components/submit-modal";
import { handleFetchArticle, init } from "./signals";

const WritePage: Component = () => {
  const { id } = useParams();

  createEffect(async () => {
    const articleId = Number(id);
    let article: Article | undefined;
    if (!Number.isNaN(articleId)) {
      article = await handleFetchArticle(articleId);
    }
    init(article);
  });

  return (
    <>
      <AppBar />
      <Main />
      <ActionsBar />
      <SubmitModal />
    </>
  );
};

export default WritePage;
