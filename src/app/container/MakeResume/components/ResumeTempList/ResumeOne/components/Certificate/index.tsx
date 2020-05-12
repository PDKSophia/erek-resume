/**
 * @desc 荣誉奖励
 * @author pengdaokuan
 * @createTime 2020-04-06
 * @lastModify 2020-04-19
 */
import React from "react";
import styles from "@src/common/styles/resume-one.module.css";

function Certificate() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>荣誉奖励 Certificate</p>
      <ul className={styles.content}>
        <li>全国英语四级证书</li>
        <li>全国计算机二级证书</li>
        <li>湖南科技大学自封骰王</li>
        <li>科大骰王大赛二等奖</li>
      </ul>
    </div>
  );
}

export default Certificate;
