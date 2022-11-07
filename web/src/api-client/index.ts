import axios from "axios";
import { BlogClient } from "../api-lib/blog-client";
import { HomePageClient } from "../api-lib/homepage-client";
import { getToken } from "../common/utils/token";

const blogHost = "/api";

export const getAxiosInstance = () => {
  const instance = axios.create({
    paramsSerializer: (params) => {
      // 这里是为了GET方法能够正确传递数组而做出的逻辑，后续应该修改
      // omi-codegen生成的产物来彻底解决这个问题
      const paramsList: string[] = [];
      for (let i in params) {
        if (!Array.isArray(params[i])) {
          paramsList.push(`${i}=${params[i]}`);
        } else {
          const arr: any[] = params[i];
          arr.forEach((item) => {
            paramsList.push(`${i}=${item}`);
          });
        }
      }

      return paramsList.join("&");
    },
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
