/**
 * @desc 主题 theme reducer
 * @author pengdaokuan
 * @createTime 2020-03-28
 * @lastModify 2020-04-01
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

function themeStore(
  state = initialState,
  action: { type: string; payload: any }
) {
  const payload = action.payload || {};
  switch (action.type) {
    case actionTypes.STORE_PROPS:
      return Immutable.replace(state, payload);
    default:
      return state;
  }
}

export default themeStore;
