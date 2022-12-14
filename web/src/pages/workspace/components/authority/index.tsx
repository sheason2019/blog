import Button from "../../../../common/components/button";
import Header from "../../../../common/components/header";
import Input from "../../../../common/components/input";
import { fetchLimit } from "../../../../common/signals/limit";
import { setToken } from "../../../../common/utils/token";
import { handleAddErrorNotifier } from "../../../../common/utils/use-notifier";

const Authority = () => {
  let input: HTMLInputElement | undefined;
  const handleFetchLimit: HTMLFormElement["onsubmit"] = (e) => {
    e.preventDefault();

    const value = input!.value;
    if (value.length === 0) {
      handleAddErrorNotifier("秘钥内容不可以为空", "请输入秘钥");
      return;
    }

    setToken(value);

    fetchLimit();
  };

  return (
    <div class="flex flex-1 justify-center items-center">
      <form
        onSubmit={handleFetchLimit}
        class="flex flex-col justify-center items-center border border-gray-300 md:px-24 px-0 md:w-auto w-full mx-2 py-8 rounded-lg shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="108"
          height="108"
          fill="gray"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
        </svg>
        <Header class="mt-2 mb-4">咋回事</Header>
        <div>你好像没有使用该页面的权限</div>
        <Input
          ref={input}
          class="mt-4"
          placeholder="在此处输入秘钥以解决问题"
        />
        <Button class="px-12 py-1.5 mt-2">提交</Button>
      </form>
    </div>
  );
};

export default Authority;
