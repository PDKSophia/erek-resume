/**
 * @Desc: 入口文件
 * @Author: pengdaokuan
 * @CreateTime: 2019-11-23
 * @LastModify: 2019-11-23
 */
import React from 'react'
import { Provider } from 'react-redux'
import configStore from './store/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './client/Home'
/**
 * @class App
 * @extends {React.Component}
 */
const store = configStore()
console.log(store)
class App extends React.Component {
  UNSAFE_componentWillMount() {}
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
