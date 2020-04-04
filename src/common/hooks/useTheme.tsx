/**
 * 主题相关hooks
 */
import { themeList } from "../constants/theme";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "@src/app/store/reducers";
import { storeLibProps } from "@src/app/store/theme/action";
import { getLocalStorage, setLocalStorage } from "../utils/index";

/**
 * 初始化主题色
 * 1.确定当前的主题色调，采用redux和sessionStorage两种方式进行缓存
 * 2.redux是为了实现实时响应的效果（发布-订阅模式），sessionStorage是为了防止刷新之后，出现数据丢失情况
 * 3.优先级为先采用redux中的值，如果值为空，默认采用sessionStorage值，若值为空，默认给定初始值
 */
export function useInitTheme() {
  const dispatch = useDispatch();
  let sessionTheme = getLocalStorage("currentTheme");
  let useResult = sessionTheme ? sessionTheme : themeList.dark;
  return () => {
    setLocalStorage("currentTheme", useResult);
    dispatch(storeLibProps({ theme: useResult }));
  };
}

/**
 * 获取当前主题
 */
export function useStoreTheme() {
  const theme = useSelector((state: AppStoreType) => state.themeStore.theme);
  return [theme];
}

/**
 * 直接修改Redux
 */
export function useStoreLibProps() {
  const dispatch = useDispatch();
  return (params: any) => {
    dispatch(storeLibProps(params));
  };
}
