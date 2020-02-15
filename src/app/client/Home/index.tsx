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
// 组件引入
import Menu from "../../components/Menu";
import Image from "../../../common/components/Image";
import ThemeBox from "../../components/ThemeBox";
import Introduce from "../../components/Introduce";
import Copyright from "../../components/Copyright";
// redux引入
import * as themeAction from "../../store/theme/action";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../../store/reducers";
import { setLocalStorage } from "../../../common/utils/index";
import { getCurrentTheme } from "../../../common/utils/theme";
import { ThemeStateFace } from "../../../app/config/interface";
import { PRODUCT_MENU, PRODUCT } from "../../../common/constants";
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
  const useThemeCallback = useCallback((item: ThemeStateFace) => {
    setLocalStorage("currentTheme", { ...item });
    setCurrentTheme(item);
  }, []);

  function useMenuCallback(data: any) {
    props.history.push(data.url);
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
          <ThemeBox callbackFunc={useThemeCallback} />
        </div>
        <div className={cx("menu")}>
          <Menu
            columns={4}
            list={PRODUCT_MENU}
            callbackFunc={useMenuCallback}
          />
        </div>
      </div>
      <div className={cx("footer")}>
        <Copyright
          bgColor={currentTheme.bgColor}
          textColor={currentTheme.textColor}
        />
      </div>
    </div>
  );
}
