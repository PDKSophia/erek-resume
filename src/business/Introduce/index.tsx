/**
 * @Desc: Introduce 介绍组件
 * @Author: pengdaokuan
 * @CreateDate:  2019-11-28
 * @LastModify:  2019-11-28
 */
import React from 'react'
import styles from './index.module.css'
import classnames from 'classnames/bind'
import { introduceProps } from '../../helper/defaultProps'
let cx = classnames.bind(styles)

/**
 * @class Introduce
 * @extends {React.Component}
 * @property {array} tips - 提示
 * @property {array} title - 标题
 * @property {array} summary - 介绍
 * @property {object} style - 样式
 * @property {string} identity - 标识
 */
interface Props {
  title: Array<String>
  summary: Array<String>
  tips?: Array<String>
  style?: object
  identity?: string
}

class Introduce extends React.PureComponent<Props> {
  public static namespace: string = '模块介绍'

  public static defaultProps: Props = {
    title: introduceProps.TITLE,
    summary: introduceProps.SUMMARY,
    tips: introduceProps.TIPS,
    style: introduceProps.STYLE,
    identity: introduceProps.IDENTITY
  }

  render() {
    const { title, summary, style, identity, tips } = this.props
    return (
      <div
        className={cx({
          introduce: true
        })}
        style={style}
        id={identity}
      >
        <div
          className={cx({
            title: true
          })}
        >
          {title &&
            title.length > 0 &&
            title.map((item: any, index: number) => {
              return <p key={index}>{item}</p>
            })}
        </div>
        <div
          className={cx({
            summary: true
          })}
        >
          {summary &&
            summary.length > 0 &&
            summary.map((item: any, index: number) => {
              return <p key={index}>{item}</p>
            })}
        </div>
        <div
          className={cx({
            tips: true
          })}
        >
          {tips &&
            tips.length > 0 &&
            tips.map((item: any, index: number) => {
              return <p key={index}>{item}</p>
            })}
        </div>
      </div>
    )
  }
}

export default Introduce
