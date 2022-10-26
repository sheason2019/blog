import { getUserClient } from "../../api-client";
import { setUser } from "../signals/user";

export const handleGetUserByToken = async (token: string) => {
  const client = getUserClient();

  const [err, res] = await client.GetUserByToken({ token });
  if (err) {
    throw err;
  }

  setUser(res);
  console.log(res);
};
