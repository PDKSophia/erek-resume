/**
 * @Desc: 版权组件
 * @Author: pengdaokuan
 * @CreateDate:  2019-11-28
 * @LastModify:  2019-11-28
 */
import React from "react";
import styles from "./index.module.css";
import { copyright } from "../../helper/constant";

/**
 * @class Copyright
 * @extends {React.Component}
 * @property {string} bgColor - 背景色
 * @property {string} textColor - 文案颜色
 */
interface Props {
  bgColor: string;
  textColor: string;
}

export default class Copyright extends React.PureComponent<Props> {
  render() {
    return (
      <div
        className={styles.footer}
        style={{
          backgroundColor: this.props.bgColor,
          color: this.props.textColor
        }}
      >
        <p className={styles.copyright}>
          Copyright © {copyright.FROMDATE}-{copyright.CURRENTDATE}
          All Rights Reserved. Copyright By pengdaokuan
        </p>
      </div>
    );
  }
}
