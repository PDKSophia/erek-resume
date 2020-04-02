/**
 * @desc 列表
 * @author pengdaokuan
 * @createTime 2020-04-02
 * @lastModify 2020-04-02
 */
import React from "react";
import styles from "./index.module.css";
import { AbstructResumeItemProps } from "../../../../config-interface";

/**
 * @extends {React.hooks}
 * @property {Array} resumeList - 模板列表
 * @property {Function} onClickResume - 点击事件
 */
export interface AbstructListProps {
  resumeList: Array<any>;
  onClickResume?: Function;
}
function List({ resumeList = [], onClickResume }: AbstructListProps) {
  return (
    <div className={`${styles.list} ${styles.flex}`}>
      {resumeList.map((r: AbstructResumeItemProps) => {
        return (
          <div key={r.uniqueKey} className={styles.item}>
            <img src={r.cover} />
            <div className={styles.mask} />
            <div
              className={styles.button}
              onClick={() => {
                onClickResume && onClickResume(r);
              }}
            >
              使用
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;
