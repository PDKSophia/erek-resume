/**
 * @Desc: 入口文件
 * @Author: pengdaokuan
 * @CreateTime: 2019-11-23
 * @LastModify: 2020-01-06
 */

import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./client/Home";
import Template from "./client/Template";
import { retrieveTheme } from "./utils/theme";
import { setLocalStorage } from "./utils/index";

/**
 * @class App
 * @extends {React.Component}
 */
export default function App() {
  useEffect(() => {
    const currentTheme = retrieveTheme();
    setLocalStorage("currentTheme", currentTheme);
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/template" component={Template} exact />
        </Switch>
      </Router>
    </Provider>
  );
}
