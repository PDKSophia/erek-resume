/**
 * @Desc: 主题相关处理文件
 * @Author: pengdaokuan
 * @CreateTime: 2019-01-06
 * @LastModify: 2020-01-06
 */

import { themeList } from "../lib/theme";
import { getSessionStorage } from "../utils";

/**
 * 获取主题色
 * 1.确定当前的主题色调，采用redux和sessionStorage两种方式进行缓存
 * 2.redux是为了实现实时响应的效果（发布-订阅模式），sessionStorage是为了防止刷新之后，出现数据丢失情况
 * 3.优先级为先采用redux中的值，如果值为空，默认采用sessionStorage值，若值为空，默认给定初始值
 */
export function retrieveTheme() {
  let result: any = {};
  try {
    let sessionTheme = getSessionStorage("currentTheme");
    result = sessionTheme ? sessionTheme : themeList.dark;
  } catch (err) {
    result = { ...themeList.dark };
  }
  return result;
}
