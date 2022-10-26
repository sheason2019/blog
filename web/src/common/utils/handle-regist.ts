import { getUserClient } from "../../api-client";

export const handleRegist = async (username: string, password: string) => {
  const client = getUserClient();
  // 先发起注册请求
  const [err, _] = await client.Regist({
    user: { Username: username, Password: password, UserId: 0 },
  });

  if (err) {
    console.error(err);
    throw err;
  }
};
