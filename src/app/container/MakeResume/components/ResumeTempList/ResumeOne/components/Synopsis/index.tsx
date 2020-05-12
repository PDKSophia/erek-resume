/**
 * @desc 简单介绍
 * @author pengdaokuan
 * @createTime 2020-04-19
 * @lastModify 2020-04-19
 */
import React from "react";
import styles from "./index.module.css";

function Synopsis() {
  return (
    <div className={styles.content}>
      <p className={styles.name}>彭道宽</p>
      <p className={styles.job}>前端工程师</p>
      <p className={styles.summary}>
        热爱运营，对文案的写作和文字处理有自己的独特见解，组织能力强，能分配好团队成员间的工作，善于整合身边有效资源
      </p>
    </div>
  );
}

export default Synopsis;
