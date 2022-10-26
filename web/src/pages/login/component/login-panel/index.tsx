import { useNavigate } from "@solidjs/router";
import { Component, createSignal } from "solid-js";
import Button from "../../../../common/components/button";
import Input from "../../../../common/components/input";
import Link from "../../../../common/components/link";
import { Panel, setPanel } from "../../signals/toggle-panel";
import { handleLogin } from "../../../../common/utils/handle-login";
import PanelContainer from "../panel-container";

interface Props {
  reverse?: boolean;
}

const LoginPanel: Component<Props> = (props) => {
  const navigate = useNavigate();

  const [form, setForm] = createSignal({
    username: "",
    password: "",
  });

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    const { username, password } = form();
    // 尝试登录
    await handleLogin(username, password);
    // 成功后返回首页
    navigate("/home");
  };

  const handleInput = (e: Event & { currentTarget: HTMLInputElement }) => {
    const input = e.currentTarget;
    setForm((prev) => ({
      ...prev,
      [input.name]: input.value,
    }));
  };

  const handleToRegist = () => {
    setPanel(Panel.Regist);
  };

  return (
    <PanelContainer reverse={props.reverse}>
      <form
        onSubmit={handleSubmit}
        class="flex flex-col justify-center items-center"
      >
        <div class="text-2xl">用户登录</div>
        <Input
          name="username"
          onInput={handleInput}
          class="mt-6"
          placeholder="请输入用户名"
        />
        <Input
          name="password"
          type="password"
          onInput={handleInput}
          class="mt-2"
          placeholder="请输入密码"
        />
        <Button class="px-16 py-1.5 mt-6 mb-5">登录</Button>
        <div class="flex text-sm items-center">
          <span>暂无用户？</span>
          <Link onClick={handleToRegist}>此处注册</Link>
        </div>
      </form>
    </PanelContainer>
  );
};

export default LoginPanel;
