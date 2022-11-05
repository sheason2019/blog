/**
 * 本文件由Omi.js自动生成，谨慎改动！
 * 生成时间：2022年11月5日 18:0:56.
 */

import { OmiClientBase } from "@omi-stack/omi-client";
import { AxiosRequestConfig } from "axios";

import { Article, Album } from "./blog-client";
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
  // 获取合集
  GetAlbums(
    props: { length: number; offset: number; GetNew: boolean },
    option?: Omit<AxiosRequestConfig, "params">
  ) {
    const url = "HomePage.Albums";
    const method = "Get";
    return this.request<Album[]>(url, method, props, option);
  }
  GetAlbum(props: { id: number }, option?: Omit<AxiosRequestConfig, "params">) {
    const url = "HomePage.Album";
    const method = "Get";
    return this.request<Album>(url, method, props, option);
  }
}
