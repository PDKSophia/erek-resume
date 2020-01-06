/**
 * @Desc: 首页
 * @Author: pengdaokuan
 * @CreateTime: 2019-11-23
 * @LastModify: 2019-12-04
 */
import React, { useState, useEffect, useCallback } from "react";
import styles from "./index.module.css";
import classnames from "classnames/bind";
import { isEmpty } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import * as themeAction from "../../store/theme/action";
import Image from "../../common/components/Image";
import ThemeBox from "../../business/ThemeBox";
import Introduce from "../../business/Introduce";
import Copyright from "../../business/Copyright";
import Menu from "./Menu";
import { product } from "../../lib/constant";
import { AppStoreType } from "../../store/reducers";
import { ThemeStateFace } from "../../lib/interface";
import { setLocalStorage } from "../../utils/index";
import { retrieveTheme } from "../../utils/theme";
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
    const activeTheme: any = !isEmpty(currentTheme) ? currentTheme : retrieveTheme()
    setLocalStorage("currentTheme", activeTheme);
    setThemeFunc(activeTheme);
  }, []);

  // 设置当前主题
  function setThemeFunc(item: ThemeStateFace) {
    dispatch(
      themeAction.selectThemeState({
        ...item
      })
    );
  }

   // themeBox 回调函数
  const themeCallbackFunc = useCallback((item: ThemeStateFace) => {
    setLocalStorage("currentTheme", { ...item });
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
