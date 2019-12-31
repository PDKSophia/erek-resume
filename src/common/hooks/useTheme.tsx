/**
 * @Desc: 自定义主题色调hooks
 * @Author: pengdaokuan
 * @CreateTime: 2019-12-04
 * @LastModify: 2019-12-04
 */
import { useSelector } from "react-redux";
import { themeList } from "../../lib/theme";
import { AppStoreType } from "../../store/reducers";
import {
  isEmptyObject,
  getSessionStorage,
  setSessionStorage
} from "../../utils";

function tryThemeFunc() {
  let result: any = {};
  try {
    let sessionTheme = getSessionStorage("activeTheme");
    if (sessionTheme) {
      result = { ...sessionTheme };
    } else {
      result = { ...themeList.dark };
    }
  } catch (err) {
    result = { ...themeList.dark };
  }
  return result;
}

/**
 * 1.自定义主题hooks，所有的页面，都使用此hooks，从而确定当前的主题色调，采用redux和sessionStorage两种方式进行缓存
 * 2.redux是为了实现实时响应的效果（发布-订阅模式），sessionStorage是为了防止刷新之后，出现数据丢失情况
 * 3.优先级为先采用redux中的值，如果值为空，默认采用sessionStorage值，若值为空，默认给定初始值
 */
export function useActiveTheme() {
  const reduxTheme = useSelector(
    (state: AppStoreType) => state.themeStore.theme
  );

  let activeTheme: any = {};

  if (!isEmptyObject(reduxTheme)) {
    activeTheme = { ...reduxTheme };
  } else {
    let result = tryThemeFunc();
    activeTheme = { ...result };
  }

  setSessionStorage("activeTheme", activeTheme);
  return activeTheme;
}
