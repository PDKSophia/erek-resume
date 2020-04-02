/**
 * @desc 简历制作
 * @author pengdaokuan
 * @createDate 2020-04-01
 * @lastModify 2020-04-01
 */
import React from "react";
import styles from "./index.module.css";
import Photograph from "../../../common/components/Photograph";
import Intro from "../../components/Intro";
import Gird from "../../components/Grid";
import ResumeList from "./ResumeList";
import {
  screen,
  screenWrite,
  screenMenu
} from "../../../common/constants/index";
import { useStoreTheme } from "../../../common/hooks/useTheme";

function Resume(props: any) {
  const [theme] = useStoreTheme();

  function onClickGrid(target: any) {
    props.history.push(target.url);
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
      <div className={styles.list}>
        <ResumeList />
      </div>
    </React.Fragment>
  );
}

export const LogoMemo = React.memo(() => {
  return (
    <div className={`${styles.logo} ${styles.flex}`}>
      <Photograph src={screenWrite[screen.resume].logo} />
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
      <Intro
        style={nstyle}
        title={screenWrite[screen.resume].title}
        summary={screenWrite[screen.resume].summary}
      />
    </div>
  );
});

export const GridMemo = React.memo((props: any) => {
  return (
    <div className={styles.menu}>
      <Gird
        columns={4}
        list={screenMenu[screen.resume]}
        onClickGrid={props.onClickGrid}
      />
    </div>
  );
});

export default Resume;
