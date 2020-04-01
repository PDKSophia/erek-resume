/**
 * @desc Grid 布局盒子
 * @author pengdaokuan
 * @createDate  2020-04-01
 * @lastModify  2020-04-01
 */
import React from "react";
import styles from "./index.module.css";
import classnames from "classnames/bind";
import { useStoreTheme } from "../../../common/hooks/useTheme";
import { AbstructGridItemProps } from "../../../config-interface/index";
let cx = classnames.bind(styles);

/**
 * @hooks Grid
 * @extends {React.Component}
 * @property {array} list - 数据
 * @property {object} style - 样式
 * @property {number} columns - 栅格数
 * @property {Function} onClickGrid - 回调函数
 *
 */
interface AbstractGridProps {
  list: Array<AbstructGridItemProps>;
  style?: React.CSSProperties;
  columns?: number;
  onClickGrid?: Function;
}

function Grid({ list, style, columns, onClickGrid }: AbstractGridProps) {
  const [theme] = useStoreTheme();
  return (
    <div style={style} className={`${styles.grid} ${styles.flex}`}>
      {list &&
        [...list].map((g: AbstructGridItemProps) => {
          return (
            <div
              key={g.key}
              style={{ color: theme.textColor }}
              onClick={() => {
                onClickGrid && onClickGrid(g);
              }}
              className={cx({
                [`columns-${columns}`]: true
              })}
            >
              {g.text}
            </div>
          );
        })}
    </div>
  );
}

export default Grid;
