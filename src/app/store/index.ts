/**
 * @desc Redux
 * @author pengdaokuan
 * @createTime 2020-03-28
 * @lastModify 2020-03-28
 */
import { createStore } from "redux";
import reducers from "./reducers";

export default createStore(reducers, {});
