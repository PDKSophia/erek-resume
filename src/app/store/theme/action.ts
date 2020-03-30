/**
 * @Desc: 主题 theme action
 * @Author: pengdaokuan
 * @CreateTime: 2019-11-29
 * @LastModify: 2019-11-29
 */
import * as actionTypes from "../actionsType";
import { ThemeStateType } from "../theme/reducer";

// 赋值当前主题
export function changeThemeState(theme: ThemeStateType["theme"]) {
  return {
    type: actionTypes.CHANGE_THEME,
    payload: {
      theme
    }
  };
}

// 直接修改redux
export function storeLibProps(params: any) {
  return {
    type: actionTypes.STORE_PROPS,
    payload: params
  }
}