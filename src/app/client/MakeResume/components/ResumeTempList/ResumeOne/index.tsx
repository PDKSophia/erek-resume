/**
 * @desc 模板1
 * @author pengdaokuan
 * @createTime 2020-04-06
 * @lastModify 2020-04-19
 */
import React from "react";
import styles from "./index.module.css";
import classnames from "classnames/bind";
import { withRouter } from "react-router-dom";
import Avatar from "./components/Avatar";
import BaseInfo from "./components/BaseInfo";
import Contact from "./components/Contact";
import IntentionJob from "./components/IntentionJob";
import Certificate from "./components/Certificate";
import Synopsis from "./components/Synopsis";
import Skill from "./components/Skill";
import Post from "./components/Post";
import Project from "./components/Project";
import Work from "./components/Work";

let cx = classnames.bind(styles);

function ResumeOne(props: any) {
  return (
    <div className={`${styles.flex} ${styles.container}`} id="pdf">
      {/* 左侧 */}
      <div className={styles.left}>
        <div className={styles.avatar}>
          <Avatar />
        </div>
        <div className={styles.fillColor} />
        <div className={styles.basedata}>
          <BaseInfo />
          <Contact />
          <IntentionJob />
          <Certificate />
        </div>
      </div>
      {/* 内容 */}
      <div className={styles.center}>
        <Synopsis />
        <div className={styles.listdata}>
          <Skill />
          <Post />
          <Project />
          <Work />
        </div>
      </div>
    </div>
  );
}

export default withRouter(ResumeOne);
