/**
 * @Desc: 主题 theme action
 * @Author: pengdaokuan
 * @CreateTime: 2019-11-29
 * @LastModify: 2019-11-29
 */
import * as actionTypes from "../actionsType";
import { ThemeStateType } from "../theme/reducer";

export function setTheme(theme: ThemeStateType["theme"]) {
  return {
    type: actionTypes.SET_THEME,
    payload: {
      theme
    }
  };
}
export function selectThemeState(data: {
  bgColor: string;
  textColor: string;
  hoverColor: string;
}) {
  return {
    type: actionTypes.SELECT_THEME,
    payload: {
      data: data
    }
  };
}
