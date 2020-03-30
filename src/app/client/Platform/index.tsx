/**
 * @desc 平台介绍
 * @author pengdaokuan
 * @createDate 2020-03-28
 * @lastModify 2020-03-28
 */
import React, { useState } from "react";
import styles from "./index.module.css";
import Photograph from "../../../common/components/Photograph";
import Intro from "../../components/Intro";
import Gird from "../../components/Grid";
import Synopsis from "./components/Synopsis";
import UpdateLog from "./components/UpdateLog";
import Developer from "./components/Developer";
import {
  screen,
  platform,
  screenWrite,
  screenMenu
} from "../../../common/constants/index";
import { useStoreTheme } from "../../../common/hooks/useTheme";

function Platform() {
  const [tab, setTab] = useState(platform.synopsis);
  const [theme] = useStoreTheme();

  function onClickGrid(target: any) {
    if (target.key !== platform.home) {
      setTab(target.key);
    } else {
      window.location.href = target.url;
    }
  }
  return (
    <React.Fragment>
      <div
        className={styles.container}
        style={{ backgroundColor: theme.bgColor, color: theme.textColor }}
      >
        <LogoMemo />
        <ContentMemo theme={theme} />
        <GridMemo onClickGrid={onClickGrid} />
      </div>
      <div className={styles.content}>
        {tab === platform.synopsis && <Synopsis />}
        {tab === platform.updatelog && <UpdateLog />}
        {tab === platform.developer && <Developer />}
      </div>
    </React.Fragment>
  );
}

export const LogoMemo = React.memo(() => {
  return (
    <div className={`${styles.logo} ${styles.flex}`}>
      <Photograph src={screenWrite[screen.intro].logo} />
    </div>
  );
});

export const ContentMemo = React.memo((props: any) => {
  return (
    <div className={styles.flex}>
      <Intro
        title={screenWrite[screen.intro].title}
        summary={screenWrite[screen.intro].summary}
        style={{
          textAlign: "center",
          backgroundColor: props.theme.bgColor,
          color: props.theme.textColor
        }}
      />
    </div>
  );
});

export const GridMemo = React.memo((props: any) => {
  return (
    <div className={styles.menu}>
      <Gird
        columns={4}
        list={screenMenu[screen.intro]}
        onClickGrid={props.onClickGrid}
      />
    </div>
  );
});

export default Platform;
