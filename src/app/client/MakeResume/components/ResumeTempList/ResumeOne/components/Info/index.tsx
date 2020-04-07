/**
 * @desc 信息通用组件
 * @author pengdaokuan
 * @createTime 2020-04-06
 * @lastModify 2020-04-06
 */
import React from "react";
import {isEmpty} from 'lodash'
import styles from "./index.module.css";

/**
 * @extends React.hooks
 * @property {String} title - 标题
 * @property {Array} content - 显示的内容
 */
export interface AbstructInfoProps {
  title: string;
  content: Array<String>;
}
function Info({ title, content }: AbstructInfoProps) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
          <ul className={styles.content}>
              {!isEmpty(content) && content.map((item: string, index: number) => {
                  
              })}
        <li>院校： 湖南科技大学</li>
        <li>专业： 软件工程</li>
        <li>学历： 本科</li>
        <li>学年： 2015.09-2019.06</li>
        <li>籍贯： 汉族</li>
      </ul>
    </div>
  );
}

export default Info;
