/**
 * @desc 入口文件
 * @author pengdaokuan
 * @createTime 2019-11-23
 * @lastModify 2020-01-07
 */

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import RouterComponent from "./app/routes";
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
