import React from "react";
import styles from "./index.module.css";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

/**
 *
 *
 * @class Button
 * @extends {React.Component}
 * @property {string} text - 按钮文本
 * @property {string} type - 类型，white/blue
 * @property {object} style - 样式
 * @property {string} size - 按钮大小，small/middle/big
 * @property {string} height - 按钮高度，small/middle
 * @property {boolean} disabled - 可否点击
 * @property {function} onClick - 点击事件
 * @property {array} btnlist
 * @property {boolean} isLock - 是否锁定点击（注：如果需要使用锁，请保证所有操作为同步或者所有的异步行为执行完再return）
 */
class Button extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    type: PropTypes.oneOf(["white", "blue"]),
    onClick: PropTypes.func,
    style: PropTypes.object,
    size: PropTypes.oneOf(["middle", "big", "small"]),
    height: PropTypes.oneOf(["middle", "small"]),
    disabled: PropTypes.bool,
    btnList: PropTypes.array,
    isLock: PropTypes.bool
  };

  static defaultProps = {
    text: "确定",
    type: "blue",
    size: "middle",
    height: "middle",
    isLock: false
  };

  handleClick = async e => {
    if (this.props.disabled) return;
    const { onClick, isLock } = this.props;
    if (!isLock) {
      onClick && onClick(e);
    } else {
      if (this.isClicking) return;
      this.isClicking = true;
      onClick && (await onClick(e));
      this.isClicking = false;
    }
  };

  render() {
    const {
      text,
      type,
      btnList,
      size,
      style,
      disabled,
      height,
      onClick
    } = this.props;
    if (btnList) {
      return (
        <div className={styles.list} style={style}>
          {btnList.map(item => {
            return (
              <div
                className={styles.item}
                key={item}
                onClick={() => {
                  onClick(item);
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div
          className={cx("es-button", "middle", {
            [`es-button-${type}`]: true,
            [`es-button-${size}`]: true,
            disabled: disabled,
            [`${height}`]: !!height
          })}
          onClick={this.handleClick}
          style={style}
        >
          {this.props.children ? this.props.children : text}
        </div>
      );
    }
  }
}

export default Button;
