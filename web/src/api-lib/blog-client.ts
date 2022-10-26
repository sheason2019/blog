/**
 * 本文件由Omi.js自动生成，谨慎改动！
 * 生成时间：2022年10月26日 23:47:29.
 */

import { OmiClientBase } from "@omi-stack/omi-client";
import { AxiosRequestConfig } from "axios";

export interface User {
  UserId: number;
  Username: string;
  Password: string;
}
export class UserServiceClient extends OmiClientBase {
  Login(props: { user: User }, option?: Omit<AxiosRequestConfig, "params">) {
    const url = "UserService.Login";
    const method = "Post";
    return this.request<string>(url, method, props, option);
  }
  Regist(props: { user: User }, option?: Omit<AxiosRequestConfig, "params">) {
    const url = "UserService.Regist";
    const method = "Post";
    return this.request<User>(url, method, props, option);
  }
  GetUserByToken(
    props: { token: string },
    option?: Omit<AxiosRequestConfig, "params">
  ) {
    const url = "UserService.UserByToken";
    const method = "Get";
    return this.request<User>(url, method, props, option);
  }
}
