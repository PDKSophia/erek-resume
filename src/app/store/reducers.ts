/**
 * @desc Reducer 整合
 * @author pengdaokuan
 * @createTime 2019-11-29
 * @lastModify 2020-05-14
 */
import { combineReducers } from 'redux';
import themeStore, { ThemeStateType } from './theme/reducer';
import userStore, { UserStateType } from './user/reducer';

export interface AppStoreType {
  themeStore: ThemeStateType;
  userStore: UserStateType;
}

export default combineReducers({
  themeStore,
  userStore
});
