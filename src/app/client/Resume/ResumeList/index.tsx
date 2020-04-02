/**
 * @desc 列表
 * @author pengdaokuan
 * @createTime 2020-04-02
 * @lastModify 2020-04-02
 */
import React, { useState } from "react";
import styles from "./index.module.css";
import List from "../../../components/ReStore/List";
import { getBrower } from "../../../../common/utils";
import MyModal from "../../../../common/components/MyModal";
import { resumeList } from "../../../../common/constants/resumelist";
import { AbstructResumeItemProps } from "../../../../config-interface/index";

function ResumeList() {
  const [isShowModal, setShowModal] = useState(false);

  function onClickResume(resume: AbstructResumeItemProps) {
    if (!getBrower().mobile) {
      setShowModal(true);
    } else {
      console.log("可以");
    }
  }
  return (
    <div className={styles.container}>
      <List resumeList={resumeList} onClickResume={onClickResume} />
      {isShowModal && (
        <MyModal
          // onCancel={() => {
          //   console.log("呵呵呵");
          // }}
          title="测试恋"
          footer={null}
        >
          <div>确定...</div>
        </MyModal>
      )}
    </div>
  );
}

export default ResumeList;
