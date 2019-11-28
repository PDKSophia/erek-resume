/**
 * @Desc: 首页
 * @Author: pengdaokuan
 * @CreateTime: 2019-11-23
 * @LastModify: 2019-11-28
 */
import React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import styles from './index.module.css'
import classnames from 'classnames/bind'
import Logo from '../../common/components/Logo'
import Introduce from '../../business/Introduce'
import Copyright from '../../business/Copyright'
import { product } from '../../helper/constant'
import { themeType, themeList } from '../../helper/theme'
import { All, SET_USER } from '../../store/action'
let cx = classnames.bind(styles)

/**
 * @class Home
 * @extends {React.Component}
 */

class Home extends React.PureComponent {
  UNSAFE_componentWillMount() {}
  render() {
    return (
      <React.Fragment>
        <div
          className={cx({
            container: true
          })}
        >
          <Logo src={product.LOGO} />
          <Introduce title={product.TITLE} summary={product.SUMMARY} />
        </div>
        <div
          className={cx({
            footer: true
          })}
        >
          <Copyright />
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: any) => ({
  ...state.user
})

export default connect(mapStateToProps)(Home)
