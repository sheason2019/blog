/**
 * 本文件由Omi.js自动生成，谨慎改动！
 * 生成时间：2022年10月28日 23:1:51.
 */

import { OmiClientBase } from "@omi-stack/omi-client";
import { AxiosRequestConfig } from "axios";

export interface LimitResponse {
  Read: boolean;
  Write: boolean;
}
export interface Section {
  SectionId: number;
  SectionName: string;
}
export interface Pagination {
  Page: number;
  PageSize: number;
  Count: number;
}
export interface GetSectionsResponse {
  Pagination: Pagination;
  Sections: Section[];
}
export class BlogClient extends OmiClientBase {
  // 输入秘钥以获取用户权限
  GetLimit(
    props: { token: string },
    option?: Omit<AxiosRequestConfig, "params">
  ) {
    const url = "Blog.Limit";
    const method = "Get";
    return this.request<LimitResponse>(url, method, props, option);
  }
  // 创建、获取和删除版块
  GetSections(
    props: { Page: number; PageSize: number },
    option?: Omit<AxiosRequestConfig, "params">
  ) {
    const url = "Blog.Sections";
    const method = "Get";
    return this.request<GetSectionsResponse>(url, method, props, option);
  }
  PostSections(
    props: { section: Section },
    option?: Omit<AxiosRequestConfig, "params">
  ) {
    const url = "Blog.Sections";
    const method = "Post";
    return this.request<Section>(url, method, props, option);
  }
  DeleteSections(
    props: { SectionId: number },
    option?: Omit<AxiosRequestConfig, "params">
  ) {
    const url = "Blog.Sections";
    const method = "Delete";
    return this.request<number>(url, method, props, option);
  }
  // 创建、获取和删除文章
}
