/**
 * @Desc: 模板组件
 * @Author: pengdaokuan
 * @CreateDate:  2019-12-01
 * @LastModify:  2020-01-07
 */
import React from "react";
import styles from "./index.module.css";
import classnames from "classnames/bind";
import { useSelector } from "react-redux";
import { AppStoreType } from "../../store/reducers";
import { TEMPLATE_MENU, TEMPLATE } from "../../common/constants";
import Image from "../../common/components/Image";
import Introduce from "../../components/Introduce";
import Menu from "../../components/Menu";
import Copyright from "../../components/Copyright";
let cx = classnames.bind(styles);

export default function Template(props: any) {
  const currentTheme = useSelector(
    (state: AppStoreType) => state.themeStore.theme
  );
  function callbackFunc(item: any) {
    console.log(item);
  }

  return (
    <div
      className={cx("container")}
      style={{
        backgroundColor: currentTheme.bgColor,
        color: currentTheme.textColor
      }}
    >
      <div className={cx("logo", "flex")}>
        <Image cover={TEMPLATE.LOGO} />
      </div>
      <div className={cx("flex")}>
        <Introduce
          title={TEMPLATE.TITLE}
          summary={TEMPLATE.SUMMARY}
          style={{
            textAlign: "center",
            backgroundColor: currentTheme.bgColor,
            color: currentTheme.textColor
          }}
        />
      </div>
      <div className={cx("menu")}>
        <Menu list={TEMPLATE_MENU} columns={4} callbackFunc={callbackFunc} />
      </div>
    </div>
  );
}
