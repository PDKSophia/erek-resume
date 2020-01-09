/**
 * @Desc: Synopsis 概要介绍组件
 * @Author: pengdaokuan
 * @CreateDate:  2020-01-09
 * @LastModify:  2020-01-09
 */
import React from "react";
import style from "./index.module.css";
import { isEmpty } from "lodash";
import Title from "../../../../common/components/Title";
import {
  PLATFORM_INTRODUCE,
  PLATFORM_ADVANTAGE
} from "../../../../common/constants/platform";

class Synopsis extends React.PureComponent {
  render() {
    return (
      <div className={style.container}>
        <div className={style.block}>
          <Title title={PLATFORM_INTRODUCE.TITLE} size="little" />
          <div className={style.content}>
            {PLATFORM_INTRODUCE && !isEmpty(PLATFORM_INTRODUCE.CONTENT) && (
              <React.Fragment>
                {PLATFORM_INTRODUCE.CONTENT.map((item: any) => {
                  return <p>{item}</p>;
                })}
              </React.Fragment>
            )}
          </div>
        </div>
        <div className={style.block}>
          <Title title={PLATFORM_ADVANTAGE.TITLE} size="little" />
          <div className={style.content}>
            {PLATFORM_ADVANTAGE && !isEmpty(PLATFORM_ADVANTAGE.CONTENT) && (
              <React.Fragment>
                {PLATFORM_ADVANTAGE.CONTENT.map((item: any) => {
                  return <p>{item}</p>;
                })}
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Synopsis;
