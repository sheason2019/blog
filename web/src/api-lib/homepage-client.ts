/**
 * 本文件由Omi.js自动生成，谨慎改动！
 * 生成时间：2022年11月2日 18:57:34.
 */

import { OmiClientBase } from "@omi-stack/omi-client";
import { AxiosRequestConfig } from "axios";

import { Article } from "./blog-client";
export class HomePageClient extends OmiClientBase {
  // 获取文章
  GetArticles(
    props: {
      length: number;
      offset: number;
      GetNew: boolean;
      SectionsId: number[];
    },
    option?: Omit<AxiosRequestConfig, "params">
  ) {
    const url = "HomePage.Articles";
    const method = "Get";
    return this.request<Article[]>(url, method, props, option);
  }
}
