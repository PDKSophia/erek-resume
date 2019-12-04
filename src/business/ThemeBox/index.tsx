/**
 * @Desc: ThemeBox 主题box
 * @Author: pengdaokuan
 * @CreateDate:  2019-11-29
 * @LastModify:  2019-12-04
 */
import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import classnames from "classnames/bind";
import { themeList } from "../../lib/theme";
import { ThemeStateFace } from "../../lib/interface";
let cx = classnames.bind(styles);

/**
 * @hooks ThemeBox
 * @extends {React.Hooks}
 * @property {stirng} activeTheme - 当前主题
 * @property {Function} callbackFunc - 回调函数
 */
interface Props {
  activeTheme?: string;
  callbackFunc?: Function;
}

export default function ThemeBox(props: Props) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const list = retrieveThemeList();
    setList(list);
  }, [themeList]);

  /**
   * 遍历Object，构造themelist数组
   */
  function retrieveThemeList() {
    const arr: any = [];
    Object.keys(themeList).forEach((item: string) => {
      arr.push({ ...themeList[item] });
    });
    return arr;
  }

  return (
    <div
      className={cx({
        box: true
      })}
    >
      {list &&
        list.map((item: ThemeStateFace, index: number) => {
          return (
            <div
              key={index}
              style={{ backgroundColor: item.bgColor }}
              onClick={() => {
                props.callbackFunc && props.callbackFunc(item);
              }}
            />
          );
        })}
    </div>
  );
}
