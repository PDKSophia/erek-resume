/**
 * @Desc: 入口文件
 * @Author: pengdaokuan
 * @CreateTime: 2019-11-23
 * @LastModify: 2020-01-07
 */

import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import RouterComponent from "./router";

/**
 * @class App
 * @extends {React.Hooks}
 */
export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={RouterComponent} exact />
        </Switch>
      </Router>
    </Provider>
  );
}
