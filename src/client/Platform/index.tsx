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
import { TEMPLATE_MENU, TEMPLATE } from "../../common/constants";
import Image from "../../common/components/Image";
import Introduce from "../../components/Introduce";
import Menu from "../../components/Menu";
let cx = classnames.bind(styles);

export default function Platform(props: any) {
  const currentTheme = useSelector(
    (state: AppStoreType) => state.themeStore.theme
  );

  return (
    <div
      className={cx({
        container: true
      })}
      style={{
        backgroundColor: currentTheme.bgColor,
        color: currentTheme.textColor
      }}
    >
      <div
        className={cx({
          logo: true,
          flex: true
        })}
      >
        <Image cover={TEMPLATE.LOGO} />
      </div>
      <div
        className={cx({
          flex: true
        })}
      >
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
      <div
        className={cx({
          menu: true
        })}
      >
        <Menu list={TEMPLATE_MENU} columns={4} history={props.history} />
      </div>
    </div>
  );
}
