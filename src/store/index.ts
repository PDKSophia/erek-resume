import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
// import { createLogger } from 'redux-logger'

import user from './user'

const rootReducer = combineReducers({
  user
})

// const logger = createLogger()
const middlewares = [thunk]

// 非线上环境打印redux日志信息
// if (process.env.NODE_ENV !== 'production') {
//   middlewares.push(logger)
// }

export default function configStore() {
  const store = createStore(rootReducer, applyMiddleware(...middlewares))
  return store
}
