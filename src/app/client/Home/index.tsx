/**
 * @desc 首页
 * @author pengdaokuan
 * @createDate 2020-03-28
 * @lastModify 2020-03-28
 */
import React, { useCallback } from "react";
import styles from "./index.module.css";
// 组件引入
import Gird from "@src/app/components/Grid";
import Photograph from "@src/common/components/Photograph";
import ThemeBox from "@src/common/components/ThemeBox";
import Intro from "@src/app/components/Intro";
import Copyright from "@src/app/components/Copyright";
// redux引入
import { setLocalStorage, isUrl } from "@src/common/utils";
import { AbstructThemeItemProps } from "@src/config-interface";
import { screen, screenWrite, screenMenu } from "@src/common/constants";
import { useStoreTheme, useStoreLibProps } from "@src/common/hooks/useTheme";

/**
 * @hooks Home
 * @extends {React.Hooks}
 */

export default function Home(props: any) {
  const [theme] = useStoreTheme();
  const storeThemeProps = useStoreLibProps();

  const onSelectTheme = useCallback((value: AbstructThemeItemProps) => {
    setLocalStorage("currentTheme", value);
    storeThemeProps({ theme: value });
  }, []);

  function onClickGrid(target: any) {
    if (isUrl(target.url)) {
      window.open(target.url, "_blank");
    } else {
      props.history.push(target.url);
    }
  }

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: theme.bgColor }}
    >
      <div className={styles.content}>
        <LogoMemo />
        <ContentMemo theme={theme} />
        <ThemeMemo onSelectTheme={onSelectTheme} />
        <GridMemo onClickGrid={onClickGrid} />
        <FooterMemo theme={theme} />
      </div>
    </div>
  );
}

export const LogoMemo = React.memo(() => {
  return (
    <div className={`${styles.logo} ${styles.flex}`}>
      <Photograph src={screenWrite[screen.index].logo} />
    </div>
  );
});

export const ContentMemo = React.memo((props: any) => {
  return (
    <div className={styles.flex}>
      <Intro
        title={screenWrite[screen.index].title}
        summary={screenWrite[screen.index].summary}
        style={{
          textAlign: "center",
          backgroundColor: props.theme.bgColor,
          color: props.theme.textColor
        }}
      />
    </div>
  );
});

export const ThemeMemo = React.memo((props: any) => {
  return (
    <div className={`${styles.flex} ${styles.theme}`}>
      <ThemeBox onSelectTheme={props.onSelectTheme} />
    </div>
  );
});

export const GridMemo = React.memo((props: any) => {
  return (
    <div className={styles.menu}>
      <Gird
        columns={4}
        list={screenMenu[screen.index]}
        onClickGrid={props.onClickGrid}
      />
    </div>
  );
});

export const FooterMemo = React.memo((props: any) => {
  return (
    <div className={styles.footer}>
      <Copyright
        bgColor={props.theme.bgColor}
        textColor={props.theme.textColor}
      />
    </div>
  );
});
