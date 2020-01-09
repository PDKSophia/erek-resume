/**
 * @Desc: 首页
 * @Author: pengdaokuan
 * @CreateTime: 2019-11-23
 * @LastModify: 2020-01-07
 */
import React, { useEffect, useCallback } from "react";
import styles from "./index.module.css";
import classnames from "classnames/bind";
import { isEmpty } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import * as themeAction from "../../store/theme/action";
import Image from "../../common/components/Image";
import ThemeBox from "../../components/ThemeBox";
import Introduce from "../../components/Introduce";
import Copyright from "../../components/Copyright";
import Menu from "../../components/Menu";
import { PRODUCT_MENU, PRODUCT } from "../../common/constants";
import { AppStoreType } from "../../store/reducers";
import { ThemeStateFace } from "../../config/interface";
import { setLocalStorage } from "../../utils/index";
import { getCurrentTheme } from "../../utils/theme";
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
    const activeTheme: any = !isEmpty(currentTheme)
      ? currentTheme
      : getCurrentTheme();
    setLocalStorage("currentTheme", activeTheme);
    setCurrentTheme(activeTheme);
  }, []);

  // 设置当前主题
  function setCurrentTheme(item: ThemeStateFace) {
    dispatch(
      themeAction.selectThemeState({
        ...item
      })
    );
  }

  // themeBox 回调函数
  const themeCallbackFunc = useCallback((item: ThemeStateFace) => {
    setLocalStorage("currentTheme", { ...item });
    setCurrentTheme(item);
  }, []);

  function callbackFunc(item: any) {
    console.log(item);
  }

  return (
    <div
      className={cx("container")}
      style={{ backgroundColor: currentTheme.bgColor }}
    >
      <div className={cx("content")}>
        <div className={cx("logo", "flex")}>
          <Image cover={PRODUCT.LOGO} />
        </div>
        <div className={cx("flex")}>
          <Introduce
            title={PRODUCT.TITLE}
            summary={PRODUCT.SUMMARY}
            style={{
              textAlign: "center",
              backgroundColor: currentTheme.bgColor,
              color: currentTheme.textColor
            }}
          />
        </div>
        <div className={cx("flex")}>
          <ThemeBox callbackFunc={themeCallbackFunc} />
        </div>
        <div className={cx("menu")}>
          <Menu list={PRODUCT_MENU} columns={4} callbackFunc={callbackFunc} />
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
