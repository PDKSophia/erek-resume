/**
 * @Desc: 入口文件
 * @Author: pengdaokuan
 * @CreateTime: 2019-11-23
 * @LastModify: 2019-11-23
 */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./client/Home";
import { Provider, useSelector } from "react-redux";
import store from "./store";
/**
 * @class App
 * @extends {React.Component}
 */
export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </Router>
    </Provider>
  );
}
