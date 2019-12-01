/**
 * @Desc: 菜单组件
 * @Author: pengdaokuan
 * @CreateDate:  2019-12-01
 * @LastModify:  2019-12-01
 */
import React, { useCallback } from 'react'
import Grid from '../../../business/Grid'
import { menu } from '../../../lib/constant'
import { MenuStateFace } from '../../../lib/interface'
import { useSelector } from "react-redux"
import { AppStoreType } from "../../../store/reducers"

export default function Menu(props: any) {
  const currentTheme = useSelector(
    (state: AppStoreType) => state.themeStore.theme
  )

  const handleClickMenu = useCallback((item: MenuStateFace) => {
    if (props.history) {
      props.history.push(item.url)
    }
  }, [])

  return (
    <React.Fragment>
      <Grid
        list={menu}
        columns={4}
        style={{
          backgroundColor: currentTheme.bgColor,
          color: currentTheme.textColor
        }}
        callbackFunc={handleClickMenu}
      />
    </React.Fragment>
  )
}