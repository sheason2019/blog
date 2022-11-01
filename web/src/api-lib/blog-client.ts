/**
 * 本文件由Omi.js自动生成，谨慎改动！
 * 生成时间：2022年11月1日 15:51:1.
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
export interface GetArticlesResponse {
  Pagination: Pagination;
  Articles: Article[];
}
export interface Article {
  Id: number;
  Title: string;
  Content: string;
  Owner: string;
  CreateTime: number;
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
  GetSectionsByName(
    props: { name: string },
    option?: Omit<AxiosRequestConfig, "params">
  ) {
    const url = "Blog.SectionsByName";
    const method = "Get";
    return this.request<Section[]>(url, method, props, option);
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
  PostArticle(
    props: { article: Article },
    option?: Omit<AxiosRequestConfig, "params">
  ) {
    const url = "Blog.Article";
    const method = "Post";
    return this.request<number>(url, method, props, option);
  }
  GetArticleById(
    props: { articleId: number },
    option?: Omit<AxiosRequestConfig, "params">
  ) {
    const url = "Blog.ArticleById";
    const method = "Get";
    return this.request<Article>(url, method, props, option);
  }
  GetArticles(
    props: { Page: number; PageSize: number },
    option?: Omit<AxiosRequestConfig, "params">
  ) {
    const url = "Blog.Articles";
    const method = "Get";
    return this.request<GetArticlesResponse>(url, method, props, option);
  }
  PutArticle(
    props: { article: Article },
    option?: Omit<AxiosRequestConfig, "params">
  ) {
    const url = "Blog.Article";
    const method = "Put";
    return this.request<void>(url, method, props, option);
  }
  DeleteArticle(
    props: { articleId: number },
    option?: Omit<AxiosRequestConfig, "params">
  ) {
    const url = "Blog.Article";
    const method = "Delete";
    return this.request<void>(url, method, props, option);
  }
}
