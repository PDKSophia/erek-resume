/**
 * @desc 简历制作主入口
 * @author pengdaokuan
 * @createTime 2020-04-05
 * @lastModify 2020-04-05
 */
import React from "react";
import styles from "./index.module.css";
import { Icon } from "antd";
import { withRouter } from "react-router-dom";
import Button from "@src/common/components/Button";

function ResumeActions(props: any) {
  function goBack() {
    props.history && props.history.goBack();
  }
  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={goBack}>
        <Icon type="left" />
        返回
      </div>
      <Button size="middle" text="导出PDF" />
    </div>
  );
}

export default withRouter(ResumeActions);
