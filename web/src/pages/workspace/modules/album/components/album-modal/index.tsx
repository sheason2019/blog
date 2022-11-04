import _ from "lodash";
import {
  Component,
  createEffect,
  createMemo,
  createSignal,
  Show,
} from "solid-js";
import { getBlogClient } from "../../../../../../api-client";
import { Article } from "../../../../../../api-lib/blog-client";
import AutoComplete from "../../../../../../common/components/auto-complete";
import Button from "../../../../../../common/components/button";
import Input from "../../../../../../common/components/input";
import Modal from "../../../../../../common/components/modal";
import Spin from "../../../../../../common/components/spin";
import { handleAddErrorNotifier } from "../../../../../../common/utils/use-notifier";
import Loading from "../../../../../posts/components/loading";
import {
  setSearchArticles,
  searchArticles,
  setArticle,
  article,
  albumName,
  setAlbumName,
  setAlbumDescribe,
  albumDescribe,
  handleCreateAlbum,
  modalStatus,
  ModalStatus,
  setModalStatus,
  handleInitForm,
  albumId,
  handleUpdateAlbum,
} from "../../signals";
import ArticleQuene from "../article-quene";

// 根据用户输入的文章标题寻找指定的文章，使用lodash进行防抖
const fetchArticleByTitle = _.debounce(
  async (title: string) => {
    const client = getBlogClient();

    const [err, res] = await client.GetArticlesByTitle({ title });
    if (err) {
      handleAddErrorNotifier(err.message, "获取文章时出现错误");
      throw err;
    }

    setSearchArticles(res);
  },
  500,
  {
    trailing: true,
  }
);

const AlbumModal: Component = () => {
  return (
    <Modal
      show={modalStatus() !== ModalStatus.Close}
      onClose={() => setModalStatus(ModalStatus.Close)}
      header={modalStatus() === ModalStatus.Create ? "创建合集" : "编辑合集"}
      content={<ModalContent />}
      actions={<ModalActions />}
    />
  );
};

const ModalContent = () => {
  // 将搜索到的文章转换为AutoComplete的候选项
  const articleOptions = createMemo(() => {
    return searchArticles().map((article) => ({
      label: article.Title,
      value: article,
    }));
  });

  // 添加文章，使用Set根据ID去重
  const handleAddArticle = (newArticle: Article) => {
    const set = new Set(article().map((article) => article.Id));

    if (!set.has(newArticle.Id)) {
      setArticle((prev) => [...prev, newArticle]);
    }
  };

  // 初始化表单内容
  createEffect(() => {
    if (modalStatus() === ModalStatus.Create) {
      handleInitForm();
    }
  });

  return (
    <div>
      <Show when={modalStatus() === ModalStatus.Update}>
        <div class="flex items-center mb-2">
          <div class="w-24">合集ID</div>
          <Input disabled value={albumId()} />
        </div>
      </Show>
      <div class="flex items-center">
        <div class="w-24">合集名称</div>
        <Input
          onInput={(e) => setAlbumName(e.currentTarget.value)}
          value={albumName()}
        />
      </div>
      <div class="flex mt-2">
        <div class="w-24">合集描述</div>
        <textarea
          onInput={(e) => setAlbumDescribe(e.currentTarget.value)}
          value={albumDescribe()}
          placeholder="选填"
          class="text-sm p-2 border flex-1 h-24 border-gray-300 resize-none outline-none"
        />
      </div>
      <div class="flex items-center mt-2">
        <div class="w-24">文章列表</div>
        <AutoComplete
          placeholder="输入文章标题以搜索"
          options={articleOptions()}
          onSelect={handleAddArticle}
          onInputChange={fetchArticleByTitle}
        />
      </div>
      <div class="flex mt-2">
        <div class="w-24 shrink-0" />
        <ArticleQuene />
      </div>
    </div>
  );
};

const ModalActions = () => {
  const [loading, setLoading] = createSignal(false);

  const handleSubmit = async () => {
    setLoading(true);
    if (modalStatus() === ModalStatus.Create) {
      await handleCreateAlbum();
    }
    if (modalStatus() === ModalStatus.Update) {
      await handleUpdateAlbum();
    }
    setLoading(false);
  };

  return (
    <div>
      <Button variant="outline">取消</Button>
      <Button class="ml-2" onClick={handleSubmit}>
        <div class="flex items-center">
          <div>提交</div>
          <Show when={loading()}>
            <div class="ml-2">
              <Spin size={16} />
            </div>
          </Show>
        </div>
      </Button>
    </div>
  );
};

export default AlbumModal;
