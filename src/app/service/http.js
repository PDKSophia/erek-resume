/**
 * @desc 请求文件
 * @author pengdaokuan
 * @createTime 2020-01-09
 * @lastModify 2020-01-09
 */
import axios from "axios";
import deepExtend from "deep-extend";
import { isNull, isUndefined, cloneDeep, isFunction } from "lodash";
import { BASE_URL, DEFAULT_OPTIONS, HTTP_CODE_MESSAGE } from "./constants";

class HttpService {
  constructor() {
    this.defaultOptions = { ...DEFAULT_OPTIONS };
    this.errorHandler = this.errorHandler.bind(this);
  }

  // 错误处理
  errorHandler(status) {
    const err = { code: status, msg: HTTP_CODE_MESSAGE[status] };
    return err;
  }

  async request(params) {
    let serverUrl = BASE_URL;
    let requestConfig = {};
    // 组合请求的API地址
    requestConfig.url = `${serverUrl}` + params.url;

    // 合并请求方式
    requestConfig.method = params.method || "GET";

    // 设置 jsonBody
    if (isNull(params.jsonBody) || isUndefined(params.jsonBody)) {
      requestConfig.jsonBody = true;
    }

    // 设置options
    requestConfig.options = deepExtend(
      cloneDeep(this.defaultOptions),
      params.options
    );

    // 设置 x-auth-token
    if (params.xAuthToken) {
      requestConfig.options.headers["x-auth-token"] = params.xAuthToken;
    }

    // API错误处理
    let errorHandler = this.errorHandler;
    if (isFunction(requestConfig.errorHandler)) {
      errorHandler = requestConfig.errorHandler;
    }

    // API数据返回处理
    let responseHandler = result => result;
    if (isFunction(requestConfig.responseHandler)) {
      responseHandler = requestConfig.responseHandler;
    }

    try {
      const response = axios({
        url: requestConfig.url,
        ...requestConfig.options
      });
      response.then(res => {
        if (res.status !== 200) {
          return errorHandler.call(this, response.status);
        } else {
          return responseHandler.call(this, response);
        }
      });
      response.catch(err => {
        return errorHandler.call(this, 500);
      });
    } catch (err) {
      return errorHandler.call(this, 500);
    }
  }
}

export default HttpService;
