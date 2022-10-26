import { handleGetUserByToken } from "./handle-get-user-by-token";
import { getUserToken } from "./user-token";

export const tryLogin = () => {
  const token = getUserToken();
  console.log(token);

  if (token) {
    handleGetUserByToken(token);
  }
};
