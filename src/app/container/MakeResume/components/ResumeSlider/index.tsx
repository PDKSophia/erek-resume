/**
 * @desc 简历制作Slider
 * @author pengdaokuan
 * @createTime 2020-04-06
 * @lastModify 2020-05-11
 */
import React from "react";
import styles from "./index.module.css";
import { Progress } from "antd";
import { withRouter } from "react-router-dom";

function ResumeSlider() {
  return (
    <React.Fragment>
      <div className={styles.label}>
        <p className={styles.gradient}>Erek Resumes</p>
      </div>
      <div className={styles.cell}>
        <p className={styles.text}>简历完善度</p>
        <div className={styles.progress}>
          <Progress percent={50} status="active" />
        </div>
        <ul className={styles.actions}>
          <li className={styles.btn}>个人信息</li>
          <li className={styles.btn}>教育信息</li>
          <li className={styles.btn}>求职意向</li>
          <li className={styles.btn}>获奖证书</li>
          <li className={styles.btn}>个人评价</li>
          <li className={styles.btn}>技能清单</li>
          <li className={styles.btn}>在校经历</li>
          <li className={styles.btn}>项目经验</li>
          <li className={styles.btn}>工作经历</li>
          <li className={styles.btn}>测试用例</li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default withRouter(ResumeSlider);
