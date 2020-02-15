/**
 * @Desc: 入口文件
 * @Author: pengdaokuan
 * @CreateTime: 2019-11-23
 * @LastModify: 2020-01-07
 */

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import RouterComponent from "./app/router";
/**
 * @class App
 * @extends {React.Hooks}
 */
export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={RouterComponent} />
      </BrowserRouter>
    </Provider>
  );
}
