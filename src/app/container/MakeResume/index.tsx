/**
 * @desc 简历模板制作主入口
 * @author pengdaokuan
 * @createTime 2020-04-05
 * @lastModify 2020-05-11
 */
import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import { withRouter } from 'react-router-dom';
import ResumeActions from './components/ResumeActions';
import ResumeSlider from './components/ResumeSlider';
import ResumeOne from './components/ResumeTempList/ResumeOne';

function MakeResume(props: any) {
  const [uid, setUid] = useState(undefined);
  useEffect(() => {
    console.log(props.location);
  }, []);
  return (
    <div className={styles.container}>
      <ResumeActions />
      <ResumeSlider />
      <div className={styles.box}>
        {/* 模板 */}
        <ResumeOne />
      </div>
    </div>
  );
}

export default withRouter(MakeResume);
