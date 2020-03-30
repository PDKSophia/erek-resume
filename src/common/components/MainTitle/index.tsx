/**
 * @Desc: 模块标题组件
 * @Author: pengdaokuan
 * @CreateTime: 2020-03-28
 * @LastModify: 2020-03-28
 */
import React from "react";
import "./index.module.css";
import classnames from "classnames/bind";
import { useStoreTheme } from "../../hooks/useTheme";

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
        className={classnames("title", {
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
        className={classnames("content", {
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
        className={classnames("underline")}
        style={{ backgroundColor: theme.bgColor }}
      />
    );
  }

  return (
    <div style={style} className={classnames("container")}>
      {titleNode}
      {summaryNode}
      {underlineNode}
    </div>
  );
}

export default MainTitle;
