/**
 * @desc Intro
 * @author pengdaokuan
 * @createDate  2020-03-28
 * @lastModify  2020-03-29
 */
import React from "react";
import styles from "./index.module.css";
import { isArray, isString } from "lodash";

/**
 * @class Intro
 * @extends {React.hooks}
 * @property {array} tips - 提示
 * @property {array} title - 标题
 * @property {array} summary - 介绍
 * @property {object} style - 样式
 * @property {string} identity - 标识
 */
export interface AbstractIntroProps {
  title: string | Array<String>;
  summary?: string | Array<String>;
  tips?: string | Array<String>;
  style?: React.CSSProperties;
  identity?: string;
}

function Intro({ title, summary, tips, style, identity }: AbstractIntroProps) {
  let titleNode: React.ReactNode;
  let summaryNode: React.ReactNode;
  let tipsNode: React.ReactNode;

  function format(value: any) {
    if (isArray(value)) {
      let domArr: Array<any> = [];
      [...value].map((n: any, index: number) => {
        let dom: React.ReactNode = <p key={index}>{n}</p>;
        domArr.push(dom);
      });
      return domArr;
    } else if (isString(value)) {
      return <p key={identity}>{value}</p>;
    } else {
      return null;
    }
  }

  if (summary) {
    summaryNode = <div className={styles.summary}>{format(summary)}</div>;
  }
  if (title) {
    titleNode = <div className={styles.title}>{format(title)}</div>;
  }
  if (tips) {
    tipsNode = <div className={styles.tips}>{format(tips)}</div>;
  }

  return (
    <div id={identity} style={style} className={styles.introduce}>
      {titleNode}
      {summaryNode}
      {tipsNode}
    </div>
  );
}

export default Intro;
