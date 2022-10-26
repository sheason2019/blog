export const getUserToken = () => {
  return localStorage.getItem("user-token");
};

export const setUserToken = (token: string) => {
  return localStorage.setItem("user-token", token);
};
