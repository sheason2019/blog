import axios from "axios";
import { UserServiceClient } from "../api-lib/blog-client";
import { getUserToken } from "../common/utils/user-token";

const blogHost = "/api";

export const getAxiosInstance = () => {
  const instance = axios.create({
    headers: {
      Authorization: getUserToken() ?? "",
    },
  });

  return instance;
};

export const getUserClient = () => {
  const client = new UserServiceClient(blogHost, getAxiosInstance());

  return client;
};
