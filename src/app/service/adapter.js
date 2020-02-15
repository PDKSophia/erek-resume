/**
 * Desc: Adapter requestAPI
 * Author: pengdaokuan
 * CreateTime: 2020-01-04
 * LastModify: 2020-01-04
 */
/**
 * 普通方法调用
 *  adapter.requestAPI(
 *     {
 *       url: 'https://www.class.seewo.com',
 *       method: 'POST',
 *       data: data,
 *       header: {}
 *     }
 *  ).then(res => {
 *     console.log(data)
 * })
 */
import HttpService from "./http";

class AdapterService {
  constructor() {
    this.http = new HttpService();
  }
  async requestAPI(params = {}, requireXToken = false) {
    try {
      if (requireXToken) {
        // 注入token
        const xToken = this.ctx.cookies.get("x-token", {
          signed: false
        });
        if (xToken) {
          params.xAuthToken = xToken;
        }
      }
      const response = this.http(params);
      return response;
    } catch (err) {
      return { code: 500, msg: err.toString() };
    }
  }

  // 对返回的resonse进行处理
  async callAPI(params = {}) {
    const response = await this.requestAPI(params);
    const result = await this.useCheckCode(response.data);
    return result;
  }

  // 检查返回值
  async useCheckCode(res) {
    if (res.code === 0) {
      return res.data;
    } else {
      return { code: res.code, msg: res.msg };
    }
  }
}

export default new AdapterService();
