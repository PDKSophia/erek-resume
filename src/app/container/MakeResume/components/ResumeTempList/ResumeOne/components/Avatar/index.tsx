/**
 * @desc 头像
 * @author pengdaokuan
 * @createTime 2020-04-06
 * @lastModify 2020-04-06
 */
import React from "react";
import styles from "./index.module.css";
import AvatarDemo from "@src/app/assets/demo.jpg";

function Avatar() {
  return (
    <div className={styles.box}>
      <img src={AvatarDemo} />
    </div>
  );
}

export default Avatar;
