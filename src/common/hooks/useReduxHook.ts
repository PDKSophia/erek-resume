import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { pick, flattenDeep } from 'lodash';
import { AppStoreType } from '@src/app/store/reducers';

/**
 * @desc 构建redux操作方法
 * @author {pengdaokuan}
 * @param {string} name -- 该redux的名称
 * @param {string} storeType -- 存储该redux的type
 * @param {string} initType -- 初始化该redux的type
 */
export function useCreateReduxFunction(name: string, storeType: string, initType: string) {
  // 获取redux的方法
  const useGetSelector = function(...keys: any) {
    const realKeys: Array<any> = flattenDeep(keys);
    if (realKeys.length === 0) {
      return useSelector((state: AppStoreType) => state[name]);
    } else if (realKeys.length === 1) {
      if (typeof realKeys[0] === 'string') {
        return useSelector((state: AppStoreType) => state[name][realKeys[0]]);
      } else {
        return useSelector(realKeys[0], shallowEqual);
      }
    } else {
      return useSelector((state: AppStoreType) => pick(state[name], realKeys), shallowEqual);
    }
  };
  //设置redux的方法
  const useSetDispatch = function(key: string) {
    const dispatch = useDispatch();
    if (!key) {
      return (props: any) => {
        dispatch({
          type: storeType,
          props
        });
      };
    }
    return (value: any) => {
      dispatch({
        type: storeType,
        props: {
          [key]: value
        }
      });
    };
  };

  // reduxState
  const useReduxFunction = function(key: string) {
    const value = useGetSelector(key);
    const changeValue = useSetDispatch(key);
    return [value, changeValue];
  };

  const funcArray = [useReduxFunction, useGetSelector, useSetDispatch];

  if (initType) {
    // 初始化redux
    const useInitFunction = function() {
      const dispatch = useDispatch();
      return () =>
        dispatch({
          type: initType
        });
    };
    funcArray.push(useInitFunction);
  }
  return funcArray;
}
