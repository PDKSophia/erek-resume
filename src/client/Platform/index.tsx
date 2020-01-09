/**
 * @Desc: 平台介绍
 * @Author: pengdaokuan
 * @CreateDate:  2020-01-07
 * @LastModify:  2020-01-07
 */
import React from "react";
import styles from "./index.module.css";
import classnames from "classnames/bind";
import { useSelector } from "react-redux";
import { AppStoreType } from "../../store/reducers";
import { PLATFROM_MENU, PLATFROM, LAYPUT_MAPS } from "../../common/constants";
import Image from "../../common/components/Image";
import Introduce from "../../components/Introduce";
import Menu from "../../components/Menu";
import Synopsis from "./components/Synopsis";
let cx = classnames.bind(styles);

export default function Platform(props: any) {
  const currentTheme = useSelector(
    (state: AppStoreType) => state.themeStore.theme
  );

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
          <Menu list={PLATFROM_MENU} columns={4} history={props.history} />
        </div>
      </div>
      <div className={cx("synopsis")}>
        <Synopsis />
      </div>
    </div>
  );
}
