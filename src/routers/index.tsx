/**
 * @Desc: 路由文件
 * @Author: pengdaokuan
 * @CreateTime: 2019-11-23
 * @LastModify: 2019-11-23
 */
import React, { useEffect, useCallback } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch ,useSelector } from "react-redux";
import * as themeAction from "../store/theme/action";
import { AppStoreType } from '../store/reducers'
import store from "../store";
import Home from "../client/Home";
import Template from "../client/Template";
import { themeList } from "../lib/theme";
import { ThemeStateFace } from "../lib/interface";

/**
 * @class Router
 * @extends {React.Component}
 */
export default function Routers() {
  const dispatch = useDispatch()
  const currentTheme = useSelector(
    (state: AppStoreType) => state.themeStore.theme
  )

  useEffect(() => {
    initTheme(themeList.dark)
  }, [])

  const initTheme = useCallback((item: ThemeStateFace) => {
    dispatch(themeAction.selectThemeState({...item}))
  }, [])

  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} exact />
        <Route path="/template" component={Template} exact />
      </Switch>
    </Router>
  );
}
