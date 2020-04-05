/**
 * @desc 时间轴组件
 * @author pengdaokuan
 * @createTime 2020-01-09
 * @lastModify 2020-01-09
 */
import React from "react";
import { Timeline } from "antd";
import { isEmpty, isArray } from "lodash";
import { useStoreTheme } from "@src/common/hooks/useTheme";

/**
 * 时间轴组件
 * @extends {React.Hooks}
 * @property {Array} list - 数据
 */
declare interface AbstructTimeLineProps {
  list?: Array<Object>;
}

function Timelines({ list }: AbstructTimeLineProps) {
  const [theme] = useStoreTheme();

  return (
    <React.Fragment>
      <Timeline>
        {list &&
          !isEmpty(list) &&
          list.map((item: any, idx: number) => {
            return (
              <Timeline.Item color={theme.bgColor} key={idx}>
                <p>
                  {item[0]}: 版本[v{item[1]}] 主要内容为:
                </p>
                {isArray(item[2]) &&
                  !isEmpty(item[2]) &&
                  item[2].map((text: string, index: number) => {
                    return (
                      <p key={index}>
                        {index + 1}、{text}
                      </p>
                    );
                  })}
              </Timeline.Item>
            );
          })}
      </Timeline>
    </React.Fragment>
  );
}
export default Timelines;
