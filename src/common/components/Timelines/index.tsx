/**
 * @desc 时间轴组件
 * @author pengdaokuan
 * @createTime: 2020-01-09
 * @lastModify: 2020-01-09
 */
import React from "react";
import { Timeline } from "antd";
import { isEmpty, isArray } from "lodash";

/**
 * 时间轴组件
 * @extends {React.Hooks}
 * @property {Array} list - 数据
 */
declare interface Props {
  list?: Array<Object>;
}

function Timelines(props: Props) {
  return (
    <React.Fragment>
      <Timeline>
        {props.list &&
          !isEmpty(props.list) &&
          props.list.map((item: any, idx: number) => {
            return (
              <Timeline.Item color="green" key={idx}>
                <p>
                  📢 {item[0]}: 版本[v{item[1]}] 主要内容为:
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
