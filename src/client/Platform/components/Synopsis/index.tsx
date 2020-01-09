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
import { handleRegKeyword } from "../../../../utils";
import {
  PLATFORM_INTRODUCE,
  PLATFORM_ADVANTAGE
} from "../../../../common/constants/platform";

function Synopsis() {
  return (
    <div className={style.container}>
      <div className={style.block}>
        <IntroduceMemo />
      </div>
      <div className={style.block}>
        <AdvantageMemo />
      </div>
    </div>
  );
}

// 简介Memo
const IntroduceMemo = React.memo(() => {
  return (
    <React.Fragment>
      <Title title={PLATFORM_INTRODUCE.TITLE} size="little" />
      <div className={style.content}>
        {PLATFORM_INTRODUCE && !isEmpty(PLATFORM_INTRODUCE.CONTENT) && (
          <React.Fragment>
            {PLATFORM_INTRODUCE.CONTENT.map((text: any, index: number) => {
              return <p key={index}>{text}</p>;
            })}
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
});

// 优势Memo
const AdvantageMemo = React.memo(() => {
  return (
    <React.Fragment>
      <Title title={PLATFORM_ADVANTAGE.TITLE} size="little" />
      <div className={style.content}>
        {PLATFORM_ADVANTAGE && !isEmpty(PLATFORM_ADVANTAGE.CONTENT) && (
          <React.Fragment>
            {PLATFORM_ADVANTAGE.CONTENT.map((text: any, index: number) => {
              return (
                <div
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html: handleRegKeyword(text, "不收费")
                  }}
                />
              );
            })}
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
});

export default Synopsis;
