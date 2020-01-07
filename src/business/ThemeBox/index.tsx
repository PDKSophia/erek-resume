/**
 * @Desc: ThemeBox 主题box
 * @Author: pengdaokuan
 * @CreateDate:  2019-11-29
 * @LastModify:  2020-01-07
 */
import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import classnames from "classnames/bind";
import { themeList } from "../../lib/theme";
import { ThemeStateFace } from "../../lib/interface";
import { getThemeList } from '../../utils/theme'
let cx = classnames.bind(styles);

/**
 * @hooks ThemeBox
 * @extends {React.Hooks}
 * @property {Function} callbackFunc - 回调函数
 */
interface Props {
  callbackFunc?: Function;
}

export default function ThemeBox(props: Props) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const list = getThemeList();
    setList(list);
  }, [themeList]);

  return (
    <div
      className={cx({
        box: true
      })}
    >
      {list &&
        [...list].map((item: ThemeStateFace, index: number) => {
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
