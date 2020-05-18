/**
 * @desc 列表
 * @author pengdaokuan
 * @createTime 2020-04-02
 * @lastModify 2020-04-02
 */
import React, { useState, useRef } from 'react';
import styles from './index.module.css';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames/bind';
import List from '@src/app/components/ReStore/List';
import Button from '@src/common/components/Button';
import MyModal from '@src/common/components/MyModal';
import { useDispatch, useSelector } from 'react-redux';
import * as themeActions from '@src/app/store/theme/action';
import { getBrower } from '@src/common/utils';
import { AppStoreType } from '@src/app/store/reducers';
import { resumeList } from '@src/common/constants/resumelist';
import { AbstructResumeItemProps } from '@src/config-interface/index';
import { deviceTips, authorityTips } from '@src/common/constants/resumelist';
let cx = classnames.bind(styles);

function ResumeList(props: any) {
  const [isAuthModal, setAuthModal] = useState(false);
  const [isDeviceModal, setDeviceModal] = useState(false);
  const ridRef = useRef('');
  const dispatch = useDispatch();
  const isAuth = useSelector((state: AppStoreType) => state.themeStore.isAuth);

  function onClickResume(resume: AbstructResumeItemProps) {
    if (getBrower().mobile) {
      setDeviceModal(true);
    } else {
      if (!isAuth) {
        setAuthModal(true);
      } else {
        ridRef.current = resume.id;
        props.history.push(`/make-resume/${resume.id}`);
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
    props.history.push(`/make-resume/${ridRef.current}`);
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
            className={cx('btn', {
              'precent-100': true
            })}
          >
            <Button text="确定" onClick={onDeviceClose} />
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
            key="auth-ok"
            className={cx('btn', {
              'precent-100': true
            })}
          >
            <Button text="我已阅读并同意" size="big" onClick={onAuthOk} />
          </div>
        ]}
      >
        <div className={styles.content}>{authorityTips}</div>
      </MyModal>
    </div>
  );
}

export default withRouter(ResumeList);
