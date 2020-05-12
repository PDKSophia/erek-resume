/**
 * @desc 在校经历
 * @author pengdaokuan
 * @createTime 2020-04-19
 * @lastModify 2020-04-19
 */
import React from "react";
import styles from "./index.module.css";

function Post() {
  return (
    <div className={styles.content}>
      <p className={styles.label}>在校经历 Post</p>
      <ul className={styles.list}>
        <li className={styles.flex}>
          <div className={styles.left}>
            <p>2020.04-2020.05</p>
            <p>文艺部会长</p>
          </div>
          <div className={styles.right}>
            <p>校团委学生会</p>
            <p>
              计划、组织、协调各年级学生组织的文艺和文化娱乐活动。承办好学生会部的学生文艺晚会。有效地与社团部开展合作项目
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Post;
