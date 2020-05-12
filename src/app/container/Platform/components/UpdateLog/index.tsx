/**
 * @desc UpdateLog 更新日志
 * @author pengdaokuan
 * @createDate 2020-03-28
 * @lastModify 2020-03-28
 */

import React from "react";
import style from "./index.module.css";
import { isEmpty } from "lodash";
import MainTitle from "@src/common/components/MainTitle";
import Timelines from "@src/common/components/Timelines";
import { updateLogs } from "@src/logs/update";

function UpdateLog() {
  return (
    <div className={style.container}>
      <div className={style.block}>
        <MainTitle title="更新日志" size="little" />
        <div className={style.content}>
          {updateLogs && !isEmpty(updateLogs) && (
            <Timelines list={updateLogs} />
          )}
        </div>
      </div>
    </div>
  );
}

export default UpdateLog;
