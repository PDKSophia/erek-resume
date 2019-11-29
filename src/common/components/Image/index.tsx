/**
 * @Desc: Image
 * @Author: pengdaokuan
 * @CreateDate:  2019-11-28
 * @LastModify:  2019-11-28
 */
import React from "react";
import styles from "./index.module.css";

/**
 * @class Image
 * @extends {React.Component}
 * @property {string} cover - 图片
 * @property {object} style - 样式
 */
interface Props {
  cover: string;
  style?: object;
}

class Image extends React.PureComponent<Props> {
  public static namespace: string = "Image";

  render() {
    return (
      <div className={styles.cover} style={this.props.style}>
        <img src={this.props.cover} alt="" />
      </div>
    );
  }
}

export default Image;
