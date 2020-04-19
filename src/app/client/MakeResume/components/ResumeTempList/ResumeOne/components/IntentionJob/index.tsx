/**
 * @desc 求职意向
 * @author pengdaokuan
 * @createTime 2020-04-06
 * @lastModify 2020-04-19
 */
import React from "react";
import styles from "@src/common/styles/resume-one.module.css";

function IntentionJob() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>求职意向 Work</p>
      <ul className={styles.content}>
        <li>职位： 前端工程师</li>
        <li>城市： 广州 | 成都 | 海口</li>
      </ul>
    </div>
  );
}

export default IntentionJob;
