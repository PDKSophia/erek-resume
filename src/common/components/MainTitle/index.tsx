/**
 * @desc 模块标题组件
 * @author pengdaokuan
 * @createTime 2020-03-28
 * @lastModify 2020-04-01
 */
import React from "react";
import styles from "./index.module.css";
import classnames from "classnames/bind";
import { useStoreTheme } from "@src/common/hooks/useTheme";
let cx = classnames.bind(styles);

/**
 * @class Title
 * @extends {React.Component}
 * @property {string} title - 标题
 * @property {string} size - 文字大小 little/small/middle/big/super
 * @property {object} style - 样式
 * @property {string} summary - 简介
 * @property {boolean} underline - 文字底下横线
 */

interface AbstractMainTitleProps {
  title: string;
  summary?: string;
  underline?: boolean;
  size?: string;
  style?: React.CSSProperties;
}

function MainTitle({
  title = "erek-resume",
  summary,
  underline = true,
  size = "middle",
  style
}: AbstractMainTitleProps) {
  const [theme] = useStoreTheme();

  let titleNode: React.ReactNode;
  let summaryNode: React.ReactNode;
  let underlineNode: React.ReactNode;

  if (title) {
    titleNode = (
      <div
        className={cx("title", {
          [`title-${size}`]: true
        })}
      >
        {title}
      </div>
    );
  }

  if (summary) {
    summaryNode = (
      <div
        className={cx("content", {
          [`content-${size}`]: true
        })}
      >
        {summary}
      </div>
    );
  }

  if (underline) {
    underlineNode = (
      <div
        className={cx("underline")}
        style={{ backgroundColor: theme.bgColor }}
      />
    );
  }

  return (
    <div style={style} className={cx("container")}>
      {titleNode}
      {summaryNode}
      {underlineNode}
    </div>
  );
}

export default MainTitle;
