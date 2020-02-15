/**
 * @Desc: 平台介绍
 * @Author: pengdaokuan
 * @CreateDate:  2020-01-07
 * @LastModify:  2020-02-15
 */
import React, { useState } from "react";
import styles from "./index.module.css";
import classnames from "classnames/bind";
// 组件引入
import Image from "../../../common/components/Image";
import Introduce from "../../components/Introduce";
import Menu from "../../components/Menu";
import Synopsis from "./components/Synopsis";
import UpdateLog from "./components/UpdateLog";
import Developer from "./components/Developer";
import { useSelector } from "react-redux";
import { AppStoreType } from "../../store/reducers";
import {
  PLATFROM,
  PLATFROM_MENU,
  PLATFORM_MAPS
} from "../../../common/constants/platform";
let cx = classnames.bind(styles);

export default function Platform(props: any) {
  const [currentTab, setCurrentTab] = useState(PLATFORM_MAPS.SYNOPSIS);
  const currentTheme = useSelector(
    (state: AppStoreType) => state.themeStore.theme
  );
  function useMenuCallback(item: any) {
    if (item.key !== PLATFORM_MAPS.HOME) {
      setCurrentTab(item.key);
    } else {
      props.history && props.history.push(item.url);
    }
  }

  return (
    <div>
      <div
        className={cx("container")}
        style={{
          backgroundColor: currentTheme.bgColor,
          color: currentTheme.textColor
        }}
      >
        <div className={cx("logo", "flex")}>
          <Image cover={PLATFROM.LOGO} />
        </div>
        <div className={cx("flex")}>
          <Introduce
            title={PLATFROM.TITLE}
            summary={PLATFROM.SUMMARY}
            style={{
              textAlign: "center",
              backgroundColor: currentTheme.bgColor,
              color: currentTheme.textColor
            }}
          />
        </div>
        <div className={cx("menu")}>
          <Menu
            columns={4}
            list={PLATFROM_MENU}
            callbackFunc={useMenuCallback}
          />
        </div>
      </div>
      <div className={cx("synopsis")}>
        {currentTab === PLATFORM_MAPS.SYNOPSIS && <Synopsis />}
        {currentTab === PLATFORM_MAPS.UPDATELOG && <UpdateLog />}
        {currentTab === PLATFORM_MAPS.DEVELOPER && <Developer />}
      </div>
    </div>
  );
}
