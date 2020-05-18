/**
 * @desc 简历列表
 * @author pengdaokuan
 * @createDate 2020-04-02
 * @lastModify 2020-05-18
 */
import { prefixCls } from '../constants/index';
import { AbstructResumeItemProps } from '@src/config-interface/index';

export const deviceTips = '当前设备不支持简历制作功能，请换至电脑端进行制作';
export const authorityTips = '平台需要获取您的个人信息，平台承诺不会将您信息泄漏，您是否同意此操作 ？';

/**
 * @desc 简历模板数组
 */
export const resumeList: Array<AbstructResumeItemProps> = [
  {
    id: `${prefixCls}-no1`,
    text: '时尚大方简历模板',
    cover: require('@src/app/assets/resume/1.jpg'),
    uniqueKey: `${prefixCls}-no1`
  },
  {
    id: `${prefixCls}-no2`,
    text: '程序员简历模板',
    cover: require('@src/app/assets/resume/2.jpg'),
    uniqueKey: `${prefixCls}-no2`
  },
  {
    id: `${prefixCls}-no3`,
    text: '品牌策划求职简历',
    cover: require('@src/app/assets/resume/3.jpg'),
    uniqueKey: `${prefixCls}-no3`
  },
  {
    id: `${prefixCls}-no4`,
    text: '应届毕业生热门简历模板',
    cover: require('@src/app/assets/resume/4.jpg'),
    uniqueKey: `${prefixCls}-no4`
  }
];
