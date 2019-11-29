/**
 * @Desc: Redux
 * @Author: pengdaokuan
 * @CreateTime: 2019-11-29
 * @LastModify: 2019-11-29
 */
import { createStore } from "redux";
import reducers from "./reducers";

export default createStore(reducers, {});
