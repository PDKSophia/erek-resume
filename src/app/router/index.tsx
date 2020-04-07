/**
 * @desc 入口文件
 * @author pengdaokuan
 * @createTime 2020-03-28
 * @lastModify 2020-04-01
 */

import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useInitTheme } from "@src/common/hooks/useTheme";
// 页面
import Home from "@src/app/client/Home";
import Platform from "@src/app/client/Platform";
import Resume from "@src/app/client/Resume";
import Template from "@src/app/client/Template";
import MakeResume from "@src/app/client/MakeResume";

/**
 * @class App
 * @extends {React.Component}
 */
export default function App(props: any) {
  const initTheme = useInitTheme();

  useEffect(() => {
    initTheme();
  }, []);

  return (
    <div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/platform" component={Platform} />
        <Route path="/template" component={Template} />
        <Route path="/make-resume" component={MakeResume} />
      </Switch>
    </div>
  );
}
