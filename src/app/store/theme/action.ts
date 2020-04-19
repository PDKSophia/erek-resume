/**
 * @desc Redux
 * @author pengdaokuan
 * @createTime 2020-03-28
 * @lastModify 2020-04-05
 */
import * as actionTypes from "../actionsType";

// 直接修改redux
export function storeLibProps(params: any) {
  return {
    type: actionTypes.STORE_PROPS,
    payload: params
  };
}

// 修改用户同意公开信息权限
export function setAuthority(params: boolean) {
  return {
    type: actionTypes.SET_AUTHORITY,
    payload: params
  };
}
