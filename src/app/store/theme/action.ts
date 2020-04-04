/**
 * @Desc: 主题 theme action
 * @Author: pengdaokuan
 * @CreateTime: 2019-11-29
 * @LastModify: 2019-11-29
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
