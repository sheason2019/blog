import { getUserClient } from "../../api-client";
import { handleGetUserByToken } from "./handle-get-user-by-token";
import { handleAddErrorNotifier } from "./use-notifier";
import { setUserToken } from "./user-token";

export const handleLogin = async (username: string, password: string) => {
  setUserToken("");

  const client = getUserClient();

  const [err, res] = await client.Login({
    user: {
      UserId: 0,
      Username: username,
      Password: password,
    },
  });

  if (err) {
    handleAddErrorNotifier(err.message, "登录失败");
    throw err;
  }

  // 登录成功后设置用户信息和Token
  setUserToken(res);
  // 随后拉取用户信息
  handleGetUserByToken(res);
};
