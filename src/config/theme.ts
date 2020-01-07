/**
 * @Desc: 主题色调
 * @Author: pengdaokuan
 * @CreateDate:  2019-11-28
 * @LastModify:  2020-01-07
 */
import { ThemeListFace } from "./interface";

export const themeType = {
  DARK: "dark",
  BLUE: "blue",
  GREEN: "green",
  PURPLE: "purple",
  PRINCESS: "princess"
};

/**
 * @property {bgColor} 背景色
 * @property {textColor} 文案主题色
 * @property {hoverColor} 悬浮button颜色
 */

export const themeList: ThemeListFace = {
  dark: {
    bgColor: "#232323",
    textColor: "#ffffff",
    hoverColor: "#27292c",
    uniqueKey: "dark"
  },
  blue: {
    bgColor: "#35495e",
    textColor: "#ffffff",
    hoverColor: "#88bcf1",
    uniqueKey: "blue"
  },
  green: {
    bgColor: "#416f5b",
    textColor: "#ffffff",
    hoverColor: "#416f5b",
    uniqueKey: "green"
  },
  princess: {
    bgColor: "#945454",
    textColor: "#ffffff",
    hoverColor: "#945454",
    uniqueKey: "princess"
  },
  purple: {
    bgColor: "#282446",
    textColor: "#ffffff",
    hoverColor: "#282446",
    uniqueKey: "purple"
  }
};
