/**
 * @Desc: 主题 theme reducer
 * @Author: pengdaokuan
 * @CreateTime: 2019-11-29
 * @LastModify: 2019-11-29
 */
import Immutable from "seamless-immutable";
import * as actionTypes from "../actionsType";

export interface ThemeStateType {
  theme: {
    [propName: string]: any;
  };
}

export const initialState = Immutable<ThemeStateType>({
  theme: {}
});

export default (
  state = initialState,
  action: { type: string; payload: any }
) => {
  const payload = action.payload || {};
  switch (action.type) {
    case actionTypes.SELECT_THEME:
      return state.set("theme", payload.data || {});
    default:
      return state;
  }
};
