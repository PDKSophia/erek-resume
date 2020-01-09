/**
 * @Desc: 默认配置的 constant interface
 * @Author: pengdaokuan
 * @CreateDate:  2019-11-29
 * @LastModify:  2020-01-07
 */
export interface ThemeStateFace {
  bgColor: string;
  textColor: string;
  hoverColor: string;
  uniqueKey: string;
}

export interface ThemeListFace {
  [key: string]: any;
}

export interface MenuStateFace {
  url: string;
  key: string;
  text: string;
}

export interface TitleStateFace  {
  title: string;
  size?: string;
  style?: object;
  summary?: string;
  underline?: boolean;
  theme?: any
}