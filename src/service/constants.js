/**
 * @Desc 请求相关常量文件
 * @Author pengdaokuan
 * @CreateTime 2020-01-09
 * @LastModify 2020-01-09
 */
export const BASE_URL = "/";

// 默认options
export const DEFAULT_OPTIONS = {
  method: "GET",
  dataType: "json",
  contentType: "json",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "x-app-version": "2.0.1",
    "x-req-ip": "1.1.1.1"
  }
};

// 所有的HTTP请求状态码
export const HTTP_CODE_MESSAGE = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。"
};
