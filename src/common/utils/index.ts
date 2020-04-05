/**
 * @desc Utils
 * @author pengdaokuan
 * @createDate 2020-03-28
 * @lastModify 2020-03-28
 */
import { themeList } from "@src/common/constants/theme";

/**
 * @desc 判断某个值是否为字符串类型
 * @param {any} value - 判断的值
 */
function isString(value: any) {
  return typeof value === "string";
}

/**
 * @desc 设置LocalStorage的key值
 * @param {string} name - key
 * @param {string} value - vaule
 */
export function setLocalStorage(name: string, value: any) {
  if (value) {
    localStorage.setItem(name, isString(value) ? value : JSON.stringify(value));
  }
}
/**
 * @desc 获取LocalStorage的key值
 * @param {string} name - key
 */
export function getLocalStorage(name: string) {
  let value = localStorage.getItem(name);
  if (value) {
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  } else {
    return null;
  }
}

/**
 * @desc 对文本正则匹配关键字keyword,高亮keyword
 * @param {String} text
 * @param {String} keyword
 * @returns {Array}
 */
export function handleRegKeyword(text: string, keyword: string) {
  const regResult = text.replace(
    new RegExp(
      `>[^<]*?${keyword}[^>]*?<|^[^<]*?${keyword}|${keyword}[^>]*?$`,
      "gi"
    ),
    (value: string) => {
      return value.replace(
        new RegExp(`(${keyword})`, "gi"),
        `<span style="color:#ff7551;">$1</span>`
      );
    }
  );
  return regResult;
}

/**
 * 遍历Object，构造themelist主题色调数组
 */
export function getThemeList() {
  const arr: any = [];
  Object.keys(themeList).forEach((item: string) => {
    arr.push({ ...themeList[item] });
  });
  return arr;
}

/**
 * 判断当前浏览器类型
 */
export function getBrower() {
  const { userAgent } = window.navigator;
  const device = {
    trident: userAgent.includes("Trident"), //IE内核
    presto: userAgent.includes("Presto"), //opera内核
    iPad: userAgent.includes("iPad"), //是否iPad
    iPhone: userAgent.includes("iPhone"), //是否为iPhone或者QQHD浏览器
    webKit: userAgent.includes("AppleWebKit"), //苹果、谷歌内核
    webApp: userAgent.indexOf("Safari") === -1, //是否web应该程序，没有头部与底部
    mobile: !!userAgent.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
    ios: !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
    android: userAgent.includes("Android") || userAgent.includes("Linux"), //android终端或uc浏览器
    gecko: userAgent.includes("Gecko") && userAgent.indexOf("KHTML") === -1, //火狐内核
    is: (key: string) => device[key]
  };
  return device;
}

/**
 * @desc 判断是否属于外部连接
 * @param {string} url - 链接
 */
export function isUrl(url: string) {
  let regRule = /(http|https):\/\/([\w.]+\/?)\S*/;
  return regRule.test(url.toLowerCase());
}
