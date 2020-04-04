/**
 * @desc 列表
 * @author pengdaokuan
 * @createTime 2020-04-02
 * @lastModify 2020-04-02
 */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.css";
import classnames from "classnames/bind";
import List from "../../../components/ReStore/List";
import { getBrower } from "../../../../common/utils";
import * as themeActions from "../../../store/theme/action";
import {
  deviceTips,
  authorityTips
} from "../../../../common/constants/resumelist";
import MyModal from "../../../../common/components/MyModal";
import { AppStoreType } from "../../../store/reducers";
import { resumeList } from "../../../../common/constants/resumelist";
import { AbstructResumeItemProps } from "../../../../config-interface/index";
let cx = classnames.bind(styles);

function ResumeList() {
  const [isAuthModal, setAuthModal] = useState(false);
  const [isDeviceModal, setDeviceModal] = useState(false);

  const dispatch = useDispatch();
  const isAuth = useSelector((state: AppStoreType) => state.themeStore.isAuth);

  function onClickResume(resume: AbstructResumeItemProps) {
    if (getBrower().mobile) {
      setDeviceModal(true);
    } else {
      if (!isAuth) {
        setAuthModal(true);
      } else {
        console.log("选中当前的简历模板");
      }
    }
  }
  function onDeviceClose() {
    setDeviceModal(false);
  }
  function onAuthClose() {
    setAuthModal(false);
  }
  function onAuthOk() {
    setAuthModal(false);
    dispatch(themeActions.setAuthority(true));
  }
  return (
    <div className={styles.container}>
      <List resumeList={resumeList} onClickResume={onClickResume} />

      <MyModal
        visible={isDeviceModal}
        onCancel={onDeviceClose}
        footer={[
          <div
            key="device-ok"
            className={cx("btn", {
              "precent-100": true
            })}
            onClick={onDeviceClose}
          >
            确定
          </div>
        ]}
      >
        <div className={styles.content}>{deviceTips}</div>
      </MyModal>
      <MyModal
        visible={isAuthModal}
        onCancel={onAuthClose}
        footer={[
          <div
            key="auth-cancel"
            className={cx("btn", {
              "precent-50": true
            })}
            onClick={onAuthClose}
          >
            取消
          </div>,
          <div
            key="auth-ok"
            className={cx("btn", {
              "precent-50": true
            })}
            onClick={onAuthOk}
          >
            确定
          </div>
        ]}
      >
        <div className={styles.content}>{authorityTips}</div>
      </MyModal>
    </div>
  );
}

export default ResumeList;
