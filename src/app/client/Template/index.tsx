/**
 * @desc 模板列表
 * @author pengdaokuan
 * @createDate 2020-03-28
 * @lastModify 2020-03-28
 */
import React, { useState } from "react";
import styles from "./index.module.css";
import Photograph from "../../../common/components/Photograph";
import Intro from "../../components/Intro";
import Gird from "../../components/Grid";
import {
  screen,
  template,
  screenWrite,
  screenMenu
} from "../../../common/constants/index";
import { useStoreTheme } from "../../../common/hooks/useTheme";

function Template(props: any) {
  const [tab, setTab] = useState(template.hot);
  const [theme] = useStoreTheme();

  function onClickGrid(target: any) {
    if (target.key !== template.home) {
      setTab(target.key);
    } else {
      props.history.push(target.url);
    }
  }

  let nstyle: React.CSSProperties = {};
  if (theme) {
    nstyle = {
      color: theme.textColor,
      backgroundColor: theme.bgColor
    };
  }

  return (
    <React.Fragment>
      <div className={styles.container} style={nstyle}>
        <LogoMemo />
        <ContentMemo theme={theme} />
        <GridMemo onClickGrid={onClickGrid} />
      </div>
    </React.Fragment>
  );
}

export const LogoMemo = React.memo(() => {
  return (
    <div className={`${styles.logo} ${styles.flex}`}>
      <Photograph src={screenWrite[screen.template].logo} />
    </div>
  );
});

export const ContentMemo = React.memo((props: any) => {
  let nstyle: React.CSSProperties = {};
  if (props.theme) {
    nstyle = {
      textAlign: "center",
      color: props.theme.textColor,
      backgroundColor: props.theme.bgColor
    };
  }
  return (
    <div className={styles.flex}>
      <Intro style={nstyle} title={screenWrite[screen.template].title} />
    </div>
  );
});

export const GridMemo = React.memo((props: any) => {
  return (
    <div className={styles.menu}>
      <Gird
        columns={4}
        list={screenMenu[screen.template]}
        onClickGrid={props.onClickGrid}
      />
    </div>
  );
});

export default Template;
