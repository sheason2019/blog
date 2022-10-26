import { useNavigate } from "@solidjs/router";
import { Component, createEffect, createSignal } from "solid-js";
import Button from "../../../../common/components/button";
import Input from "../../../../common/components/input";
import Link from "../../../../common/components/link";
import changeTitle from "../../../../common/utils/changeTitle";
import { Panel, setPanel } from "../../signals/toggle-panel";
import { handleLogin } from "../../../../common/utils/handle-login";

import PanelContainer from "../panel-container";
import { handleRegist } from "../../../../common/utils/handle-regist";

interface Props {
  reverse?: boolean;
}

const RegistPanel: Component<Props> = (props) => {
  const navigate = useNavigate();

  const [form, setForm] = createSignal({
    username: "",
    password: "",
    repassword: "",
  });

  createEffect(() => {
    changeTitle("用户注册");
  });

  const handleInput = (e: Event & { currentTarget: HTMLInputElement }) => {
    const input = e.currentTarget;
    setForm((prev) => ({
      ...prev,
      [input.name]: input.value,
    }));
  };

  // 注册逻辑
  const handleSubmit = async (e: Event) => {
    e.preventDefault();

    const { username, password } = form();
    // 先执行注册
    await handleRegist(username, password);
    // 成功完成注册后继续用这串数据执行登录请求
    await handleLogin(username, password);
    // 成功登录后，返回首页
    navigate("/home");
  };

  const handleToLogin = () => {
    setPanel(Panel.Login);
  };

  return (
    <PanelContainer reverse={props.reverse}>
      <form
        class="flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div class="text-2xl">用户注册</div>
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
        <Input
          name="repassword"
          type="password"
          onInput={handleInput}
          class="mt-2"
          placeholder="请输入密码"
        />
        <Button class="px-16 py-1.5 mt-6 mb-5">注册</Button>
        <div class="flex text-sm items-center">
          <span>已有用户？</span>
          <Link onClick={handleToLogin}>回到登录</Link>
        </div>
      </form>
    </PanelContainer>
  );
};

export default RegistPanel;
