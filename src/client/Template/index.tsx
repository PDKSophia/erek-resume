/**
 * @Desc: 模板组件
 * @Author: pengdaokuan
 * @CreateDate:  2019-12-01
 * @LastModify:  2019-12-01
 */
import React from 'react'
import styles from './index.module.css'
import classnames from 'classnames/bind'
import { useSelector } from 'react-redux'
import { AppStoreType } from '../../store/reducers'
import { product } from "../../lib/constant";
import Image from "../../common/components/Image";
import Introduce from "../../business/Introduce";
import Copyright from "../../business/Copyright";
let cx = classnames.bind(styles)

export default function Template() {
  const currentTheme = useSelector(
    (state: AppStoreType) => state.themeStore.theme
  )

  return (
    <div
      className={cx({
        container: true
     })}
      style={{
        backgroundColor: currentTheme.bgColor,
        color: currentTheme.textColor
      }}
    >
      <div
        className={cx({
          logo: true,
          flex: true
        })}
      >
        <Image cover={product.LOGO} />
      </div>
      <div
        className={cx({
          flex: true
        })}
      >
        <Introduce
          title={product.TITLE}
          summary={product.SUMMARY}
          style={{
            textAlign: "center",
            backgroundColor: currentTheme.bgColor,
            color: currentTheme.textColor
          }}
        />
      </div>
    </div>
  )
}