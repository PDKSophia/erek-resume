/**
 * @Desc: UpdateLog 更新日志
 * @Author: pengdaokuan
 * @CreateDate:  2020-01-09
 * @LastModify:  2020-01-09
 */

import React from "react";
import style from "./index.module.css";
import { isEmpty } from "lodash";
import Title from "../../../../../common/components/Title";
import Timelines from "../../../../../common/components/Timelines";
import { UPDATE_LOG } from "../../../../../common/constants/updateLog";

function UpdateLog() {
  return (
    <div className={style.container}>
      <div className={style.block}>
        <Title title="更新日志" size="little" />
        <div className={style.content}>
          {UPDATE_LOG && !isEmpty(UPDATE_LOG) && (
            <Timelines list={UPDATE_LOG} />
          )}
        </div>
      </div>
    </div>
  );
}

export default UpdateLog;
