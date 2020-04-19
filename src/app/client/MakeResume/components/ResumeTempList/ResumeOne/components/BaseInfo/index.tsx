/**
 * @desc 基本信息
 * @author pengdaokuan
 * @createTime 2020-04-06
 * @lastModify 2020-04-19
 */
import React from "react";
import styles from "@src/common/styles/resume-one.module.css";

function Avatar() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>基本信息 Basic</p>
      <ul className={styles.content}>
        <li>院校： 湖南科技大学</li>
        <li>专业： 软件工程</li>
        <li>学历： 本科</li>
        <li>学年： 2015.09-2019.06</li>
        <li>籍贯： 汉族</li>
      </ul>
    </div>
  );
}

export default Avatar;
