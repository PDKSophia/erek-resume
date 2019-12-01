/**
 * @Desc: 首页
 * @Author: pengdaokuan
 * @CreateTime: 2019-11-23
 * @LastModify: 2019-12-01
 */
import React, { useEffect, useCallback } from "react";
import styles from "./index.module.css";
import classnames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import * as themeAction from "../../store/theme/action";
import Image from "../../common/components/Image";
import ThemeBox from "../../business/ThemeBox";
import Introduce from "../../business/Introduce";
import Copyright from "../../business/Copyright";
import Menu from './Menu'
import { product } from "../../lib/constant";
import { AppStoreType } from "../../store/reducers";
import { themeList } from "../../lib/theme";
import { ThemeStateFace } from "../../lib/interface";
let cx = classnames.bind(styles);

/**
 * @hooks Home
 * @extends {React.Hooks}
 */

export default function Home(props: any) {
  const dispatch = useDispatch();
  const currentTheme = useSelector(
    (state: AppStoreType) => state.themeStore.theme
  );

  useEffect(() => {
    setThemeFunc(themeList.dark);
  }, []);

  function setThemeFunc(item: ThemeStateFace) {
    dispatch(
      themeAction.selectThemeState({
        ...item
      })
    );
  }

  // theme 主题回调
  const themeCallbackFunc = useCallback((item: ThemeStateFace) => {
    setThemeFunc(item);
  }, []);

  return (
      <div
        className={cx({
          container: true
        })}
        style={{ backgroundColor: currentTheme.bgColor }}
      >
        <div
          className={cx({
            content: true
          })}
        >
          <div
            className={cx({
              logo: true,
              flex: true
            })}
          >
            <Image cover={product.LOGO} />
          </div>
          <div
            className={cx({
              flex: true
            })}
          >
            <Introduce
              title={product.TITLE}
              summary={product.SUMMARY}
              style={{
                textAlign: "center",
                backgroundColor: currentTheme.bgColor,
                color: currentTheme.textColor
              }}
            />
          </div>
          <div
            className={cx({
              flex: true
            })}
          >
            <ThemeBox callbackFunc={themeCallbackFunc} />
          </div>
          <div 
            className={cx({
              menu: true
            })}
          >
            <Menu history={props.history} />
          </div>
        </div>
        <div
          className={cx({
            footer: true
          })}
        >
          <Copyright
            bgColor={currentTheme.bgColor}
            textColor={currentTheme.textColor}
          />
        </div>
      </div>
  );
}
