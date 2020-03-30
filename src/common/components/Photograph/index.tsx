/**
 * @Desc: Photograph
 * @Author: pengdaokuan
 * @CreateDate:  2020-03-28
 * @LastModify:  2020-03-28
 */
import React from "react";
import styles from "./index.module.css";
/**
 * @class Photograph
 * @extends {React.Component}
 * @property {string} src - 图片
 * @property {object} style - 样式
 */
interface AbstractPhotoGraphProps {
  src: string;
  style?: React.CSSProperties;
}

class Photograph extends React.PureComponent<AbstractPhotoGraphProps, {}> {
  render() {
    const { src, style } = this.props;
    return (
      <div className={styles.phone} style={style}>
        <img src={src} alt="" />
      </div>
    );
  }
}

export default Photograph;
