/**
 * @Desc: 模块标题组件
 * @Author: pengdaokuan
 * @CreateTime: 2020-01-09
 * @LastModify: 2020-01-09
 */
import React from "react";
import styles from "./index.module.css";
import classnames from "classnames/bind";
import { connect } from "react-redux";
import { AppStoreType } from "../../../app/store/reducers";
import { TitleStateFace } from "../../../app/config/interface";
import { titleProps } from "../../constants/defaultProps";
const cx = classnames.bind(styles);

/**
 * @class Title
 * @extends {React.Component}
 * @property {string} title - 标题
 * @property {string} size - 文字大小 little/small/middle/big/super
 * @property {object} style - 样式
 * @property {string} summary - 简介
 * @property {boolean} underline - 文字底下横线
 */

class Title extends React.PureComponent<TitleStateFace> {
  public static namespace: string = "标题组件";
  public static defaultProps: TitleStateFace = {
    title: titleProps.TITLE,
    size: titleProps.SIZE,
    underline: titleProps.UNDERLINE
  };
  render() {
    const { theme = {} } = this.props;
    const { title, summary, underline, size, style } = this.props;
    return (
      <div className={cx("container")}>
        <div
          className={cx("title", {
            [`title-${size}`]: true
          })}
          style={style}
        >
          {title}
        </div>
        {summary && (
          <div
            className={cx("content", {
              [`content-${size}`]: true
            })}
          >
            {summary}
          </div>
        )}
        {underline && (
          <div
            className={cx("underline")}
            style={{ backgroundColor: theme.bgColor }}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: AppStoreType) => {
  return {
    theme: state.themeStore.theme
  };
};
export default connect(mapStateToProps)(Title);
