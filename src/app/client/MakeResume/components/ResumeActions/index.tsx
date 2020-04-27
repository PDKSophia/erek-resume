/**
 * @desc 简历制作主入口
 * @author pengdaokuan
 * @createTime 2020-04-05
 * @lastModify 2020-04-05
 */
import React from "react";
import styles from "./index.module.css";
import { Button, Icon } from "antd";
import { withRouter } from "react-router-dom";

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
      <Button type="primary">导出PDF</Button>
    </div>
  );
}

export default withRouter(ResumeActions);
