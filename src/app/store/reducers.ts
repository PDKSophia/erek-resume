/**
 * @Desc: Reducer 整合
 * @Author: pengdaokuan
 * @CreateTime: 2019-11-29
 * @LastModify: 2019-11-29
 */
import { combineReducers } from "redux";
import themeStore, { ThemeStateType } from "./theme/reducer";

export interface AppStoreType {
  themeStore: ThemeStateType;
}

export default combineReducers({
  themeStore
});
