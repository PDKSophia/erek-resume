/**
 * @desc 用户 user reducer
 * @author pengdaokuan
 * @createTime 2020-05-12
 * @lastModify 2020-05-18
 */
import Immutable from 'seamless-immutable';
import * as actionTypes from '../actionsType';
import {
  AbstructPersonal,
  AbstructEducation,
  AbstructWorkPerfer,
  AbstructSchoolExperience,
  AbstructProjectExperience,
  AbstructWorkExperience,
  AbstructCertificate,
  AbstructEvaluation,
  AbstructSkill
} from './interface';

// import { useCreateReduxFunction } from '@src/common/hooks/useReduxHook.tsx';

export interface UserStateType {
  userInfo: {
    personal: AbstructPersonal;
    education: Array<AbstructEducation>;
    workPerfer: AbstructWorkPerfer;
    schoolExperience: Array<AbstructSchoolExperience>;
    projectExperience: Array<AbstructProjectExperience>;
    workExperience: Array<AbstructWorkExperience>;
    certificate: AbstructCertificate;
    evaluation: AbstructEvaluation;
    skill: AbstructSkill;
  };
}

export const initialState = Immutable<UserStateType>({
  userInfo: {
    personal: {
      username: '', // 用户名
      avatar: '', // 证件照
      birthday: '', // 出生日期
      phone: '', // 电话
      email: '', // 邮箱
      motto: '', // 爱好
      address: '', // 地址
      politicalStatus: '' // 政治面貌
    },
    education: [
      {
        onlineTime: [], // 就读时间
        university: '', // 大学名
        grade: '', // 学位
        academy: '', // 学院
        major: '', // 专业
        course: '' // 主修课程
      }
    ],
    workPerfer: {
      city: '', // 源期望城市
      job: '', // 源期望岗位
      parseWorkList: [] // 解析后的期望工作及城市
    },
    schoolExperience: [
      {
        position: '', // 职位
        department: '', // 部门
        content: '', // 内容
        onlineTime: [] // 在职时间
      }
    ],
    projectExperience: [
      {
        name: '', // 项目名
        sumary: '', // 项目简介
        actRole: '', // 担任职位
        skill: '', // 主要使用的技术栈
        onlineTime: [], // 项目时间周期
        solve: '' // 遇到什么问题，如何解决
      }
    ],
    workExperience: [
      {
        companyName: '', // 公司名
        actRole: '', // 担任职位
        content: '', // 主要工作
        onlineTime: [] // 任职时间周期
      }
    ],
    certificate: {
      content: '', // 源证书
      parseContent: [] // 解析后的证书
    },
    evaluation: {
      content: '', // 源评价
      parseContent: [] // 解析后的评价
    },
    skill: {
      content: '' // 源技能
    }
  }
});

function userStore(state = initialState, action: { type: string; props: any }) {
  switch (action.type) {
    case actionTypes.STORE_USER_TYPE:
      return state.merge(action.props);
    case actionTypes.INIT_USER_TYPE:
      return initialState;
    default:
      return state;
  }
}
export default userStore;

// const [useUserSelector, useUserFunction, useInitUser] = useCreateReduxFunction(
//   'userStore',
//   actionTypes.STORE_USER_TYPE,
//   actionTypes.INIT_USER_TYPE
// );
