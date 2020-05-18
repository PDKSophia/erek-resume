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
  const dispatch = useDispatch();
  let funcArray: Array<any> = [];

  // 获取某个key的值
  const useGetSelector = function(...keys: any) {
    let data = undefined;
    const realKeys: Array<any> = flattenDeep(keys);
    if (realKeys.length === 0) {
      return useSelector((state: AppStoreType) => state[name]);
    } else if (realKeys.length === 1) {
      if (typeof realKeys[0] === 'string') {
        data = useSelector((state: AppStoreType) => state[name][realKeys[0]]);
      } else {
        data = useSelector(realKeys[0], shallowEqual);
      }
    } else {
      data = useSelector((state: AppStoreType) => pick(state[name], realKeys), shallowEqual);
    }
    return {
      data
    };
  };

  // 设置某个key的值
  const useSetDispatch = function(key: string) {
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

  // 定义[value, changeValue]的方法
  const useReduxFunction = function(key: string) {
    const value = useGetSelector(key);
    const changeValue = useSetDispatch(key);
    return [value, changeValue];
  };

  funcArray = [useGetSelector, useSetDispatch, useReduxFunction];

  // 初始化redux
  if (initType) {
    const initReduxFunction = function() {
      return () => {
        dispatch({
          type: initType
        });
      };
    };
    funcArray.push(initReduxFunction);
  }
  return funcArray;
}
