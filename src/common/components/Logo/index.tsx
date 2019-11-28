/**
 * @Desc: logo
 * @Author: pengdaokuan
 * @CreateDate:  2019-11-28
 * @LastModify:  2019-11-28
 */
import React from 'react'
import styles from './index.module.css'

/**
 * @class Logo
 * @extends {React.Component}
 * @property {string} logo - logo图片
 */
interface Props {
  src: string
}

class Logo extends React.PureComponent<Props> {
  public static namespace: string = 'Logo'

  render() {
    return (
      <div className={styles.logo}>
        <img src={this.props.src} alt="" />
      </div>
    )
  }
}

export default Logo
