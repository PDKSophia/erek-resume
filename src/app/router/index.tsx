/**
 * @Desc: 入口文件
 * @Author: pengdaokuan
 * @CreateTime: 2020-03-28
 * @LastModify: 2020-03-28
 */

import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useInitTheme } from "../../common/hooks/useTheme";
// 页面
import Home from "../client/Home";
import Platform from "../client/Platform";
import Template from "../client/Template";

/**
 * @class App
 * @extends {React.Component}
 */
export default function App() {
  const initTheme = useInitTheme();

  useEffect(() => {
    initTheme();
  }, []);

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
