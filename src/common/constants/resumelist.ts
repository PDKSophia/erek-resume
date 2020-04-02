/**
 * @desc 简历列表
 * @author pengdaokuan
 * @createDate 2020-04-02
 * @lastModify 2020-04-02
 */
import { prefixCls } from "../constants/index";
import { AbstructResumeItemProps } from "../../config-interface/index";
/**
 * @property {bgColor} 背景色
 * @property {textColor} 文案主题色
 * @property {hoverColor} 悬浮button颜色
 */
export const resumeList: Array<AbstructResumeItemProps> = [
  {
    id: `${prefixCls}_1`,
    text: "时尚大方简历模板",
    cover: require("../../app/assets/resume/1.jpg"),
    uniqueKey: `${prefixCls}_1`
  },
  {
    id: `${prefixCls}_2`,
    text: "程序员简历模板",
    cover: require("../../app/assets/resume/2.jpg"),
    uniqueKey: `${prefixCls}_2`
  },
  {
    id: `${prefixCls}_3`,
    text: "品牌策划求职简历",
    cover: require("../../app/assets/resume/3.jpg"),
    uniqueKey: `${prefixCls}_3`
  },
  {
    id: `${prefixCls}_4`,
    text: "应届毕业生热门简历模板",
    cover: require("../../app/assets/resume/4.jpg"),
    uniqueKey: `${prefixCls}_4`
  }
];
