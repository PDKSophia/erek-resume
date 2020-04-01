/**
 * @desc 入口文件
 * @author pengdaokuan
 * @createTime 2020-03-28
 * @lastModify 2020-04-01
 */

import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useInitTheme } from "../../common/hooks/useTheme";
// 页面
import Home from "../client/Home";
import Platform from "../client/Platform";
import Resume from "../client/Resume";
import Template from "../client/Template";

/**
 * @class App
 * @extends {React.Component}
 */
export default function App(props: any) {
  const initTheme = useInitTheme();

  useEffect(() => {
    initTheme();
    setTimeout(() => {
      props.history.push("/home");
    }, 0);
  }, []);

  return (
    <div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/platform" component={Platform} />
        <Route path="/template" component={Template} />
      </Switch>
    </div>
  );
}
