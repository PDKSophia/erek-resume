/**
 * @desc 联系方式
 * @author pengdaokuan
 * @createTime 2020-04-06
 * @lastModify 2020-04-19
 */
import React from "react";
import styles from "@src/common/styles/resume-one.module.css";

function Contact() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>联系方式 Contact</p>
      <ul className={styles.content}>
        <li>电话： 176****4151</li>
        <li>邮箱： 106****960@qq.com</li>
      </ul>
    </div>
  );
}

export default Contact;
