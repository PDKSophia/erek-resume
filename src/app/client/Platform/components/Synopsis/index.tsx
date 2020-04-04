/**
 * @desc Synopsis 概要介绍
 * @author pengdaokuan
 * @createDate 2020-03-28
 * @lastModify 2020-03-28
 */
import React from "react";
import style from "./index.module.css";
import { isEmpty } from "lodash";
import MainTitle from "@src/common/components/MainTitle";
import { handleRegKeyword } from "@src/common/utils";
import { platIntro, platAdvan } from "@src/common/constants/index";

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
      <MainTitle title={platIntro.title} size="little" />
      <div className={style.content}>
        {platIntro && !isEmpty(platIntro.content) && (
          <React.Fragment>
            {platIntro.content.map((text: any, index: number) => {
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
      <MainTitle title={platAdvan.title} size="little" />
      <div className={style.content}>
        {platAdvan && !isEmpty(platAdvan.content) && (
          <React.Fragment>
            {platAdvan.content.map((text: any, index: number) => {
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
