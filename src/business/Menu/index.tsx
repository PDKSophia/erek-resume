/**
 * @Desc: 菜单组件
 * @Author: pengdaokuan
 * @CreateDate:  2019-12-01
 * @LastModify:  2020-01-07
 */
import React, { useCallback } from "react";
import Grid from "../Grid";
import { useSelector } from "react-redux";
import { AppStoreType } from "../../store/reducers";
import { MenuStateFace } from "../../lib/interface";

declare interface Props {
  list: Array<MenuStateFace>;
  columns?: number;
  history: any;
}

export default function Menu(props: Props) {
  const currentTheme = useSelector(
    (state: AppStoreType) => state.themeStore.theme
  );

  const handleClickMenu = useCallback((item: MenuStateFace) => {
    if (props.history) {
      props.history.push(item.url);
    }
  }, []);

  return (
    <React.Fragment>
      <Grid
        list={props.list}
        columns={props.columns}
        style={{
          backgroundColor: currentTheme.bgColor,
          color: currentTheme.textColor
        }}
        callbackFunc={handleClickMenu}
      />
    </React.Fragment>
  );
}
