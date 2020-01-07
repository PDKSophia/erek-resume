/**
 * @Desc: 入口文件
 * @Author: pengdaokuan
 * @CreateTime: 2019-01-07
 * @LastModify: 2020-01-07
 */

import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLocalStorage } from "../utils";
import { getCurrentTheme } from "../utils/theme";
import { ThemeStateFace } from "../config/interface";
import * as themeAction from "../store/theme/action";
// 页面
import Home from "../client/Home";
import Platform from "../client/Platform";
import Template from "../client/Template";

/**
 * @class App
 * @extends {React.Component}
 */
export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const currentTheme = getCurrentTheme();
    setLocalStorage("currentTheme", currentTheme);
    setCurrentTheme(currentTheme);
  }, []);

  // 设置当前主题
  function setCurrentTheme(item: ThemeStateFace) {
    dispatch(
      themeAction.selectThemeState({
        ...item
      })
    );
  }

  return (
    <div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/platform" component={Platform} />
        <Route path="/template" component={Template} />
      </Switch>
    </div>
  );
}
