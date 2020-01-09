/**
 * @Desc: Utils
 * @Author: pengdaokuan
 * @CreateTime: 2019-12-03
 * @LastModify: 2019-12-03
 */
/**
 * @desc 判断某个值是否为字符串类型
 * @param {any} value - 判断的值
 */
function isString(value: any) {
  return typeof value === "string";
}

/**
 * @desc 检查某对象是否为空对象
 * @param {Object} obj - 检查对象
 */
export function isEmptyObject(obj: any) {
  return Object.keys(obj).length === 0 ? true : false;
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
