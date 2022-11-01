import axios from "axios";
import { BlogClient, HomePageClient } from "../api-lib/blog-client";
import { getToken } from "../common/utils/token";

const blogHost = "/api";

export const getAxiosInstance = () => {
  const instance = axios.create({
    headers: {
      Authorization: getToken() ?? "",
    },
  });

  return instance;
};

export const getBlogClient = () => {
  const client = new BlogClient(blogHost, getAxiosInstance());

  return client;
};

export const getHomepageClient = () => {
  return new HomePageClient(blogHost, getAxiosInstance());
};
