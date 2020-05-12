/**
 * @desc 技能
 * @author pengdaokuan
 * @createTime 2020-04-19
 * @lastModify 2020-04-19
 */
import React from "react";
import styles from "./index.module.css";

function Skill() {
  return (
    <div className={styles.content}>
      <p className={styles.label}>技能证书 Skill</p>
      <ul className={styles.skill}>
        <li className={styles.item}>
          熟悉HTML、CSS、JavaScript技术编程、熟悉Bootstrap框架，熟悉手写符合W3C标准代码
        </li>
        <li className={styles.item}>
          熟悉Vue.js，了解Node.js以及Git团队协作开发工具
        </li>
        <li className={styles.item}>
          了解React，ES6、 SCSS，使用Taro基于React开发小程序
        </li>
        <li className={styles.item}>熟悉PHP，使用ThinkPHP5.x框架</li>
        <li className={styles.item}>熟悉MYSQL，了解数据库优化常用方法</li>
        <li className={styles.item}>
          了解基于微信公众号应用开发，了解微信小程序，具备良好的网络基础知识
        </li>
      </ul>
    </div>
  );
}

export default Skill;
