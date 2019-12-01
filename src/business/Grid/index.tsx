/**
 * @Desc: Grid 布局盒子
 * @Author: pengdaokuan
 * @CreateDate:  2019-12-01
 * @LastModify:  2019-12-01
 */
import React from "react";
import styles from "./index.module.css";
import classnames from "classnames/bind";
import { gridProps } from '../../lib/defaultProps'
import { MenuStateFace } from '../../lib/interface'
let cx = classnames.bind(styles);

/**
 * @hooks Grid
 * @extends {React.Hooks}
 * @property {array} list - 数据
 * @property {object} style - 样式
 * @property {number} columns - 栅格数
 * @property {Function} callbackFunc - 回调函数
 * 
 */
interface Props {
  list: Array<MenuStateFace>
  style?: object
  columns?: number
  callbackFunc?: Function
}

class Grid extends React.PureComponent<Props> {
  public static namespace: string = "栅格布局";

  public static defaultProps: Props = {
    list: gridProps.LIST,
    style: gridProps.STYLE,
    columns: gridProps.COLUMNS
  };

  render() {
    const { list, style, columns, callbackFunc } = this.props
    return (
      <div
        className={cx({
          grid: true,
          flex: true
        })}
        style={style}
      >
        {list &&
          list.map((item: MenuStateFace) => {
            return (
              <div
                key={item.key}
                onClick={() => {
                  callbackFunc && callbackFunc(item);
                }}
                className={cx({
                  [`columns-${columns}`]: true
                })}
              >
              {item.text}
              </div>
            );
          })}
      </div>
    )
  }
}

export default Grid