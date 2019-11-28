/**
 * @Desc: 版权组件
 * @Author: pengdaokuan
 * @CreateDate:  2019-11-28
 * @LastModify:  2019-11-28
 */
import React from 'react'
import styles from './index.module.css'
import { copyright } from '../../helper/constant'

export default function Copyright() {
  return (
    <div className={styles.footer}>
      <p className={styles.copyright}>
        Copyright © {copyright.FROMDATE}-{copyright.CURRENTDATE}
        All Rights Reserved. Copyright By pengdaokuan
      </p>
    </div>
  )
}
