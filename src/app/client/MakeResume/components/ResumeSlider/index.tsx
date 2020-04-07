/**
 * @desc 简历制作Slider
 * @author pengdaokuan
 * @createTime 2020-04-06
 * @lastModify 2020-04-06
 */
import React from "react";
import styles from "./index.module.css";
import { Button, Icon } from "antd";
import { withRouter } from "react-router-dom";

function ResumeSlider() {
  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <Icon type="left" />
        返回
      </div>
      <div className={styles.download}>
        <Button type="primary" icon="download" size="small">
          <span className={styles.text}>导出PDF</span>
        </Button>
      </div>
    </div>
  );
}

export default withRouter(ResumeSlider);
