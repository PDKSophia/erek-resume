// 个人基本信息
export interface AbstructPersonal {
  username: string; // 用户名
  avatar: string; // 证件照
  birthday: string; // 出生日期
  phone: string; // 电话
  email: string; // 邮箱
  motto: string; // 爱好
  address: string; // 地址
  politicalStatus: string; // 政治面貌
}

// 教育信息
export interface AbstructEducation {
  onlineTime: Array<string>; // 就读时间
  university: string; // 大学名
  grade: string; // 学位
  academy: string; // 学院
  major: string; // 专业
  course: string; // 主修课程
}

// 工作期望
export interface AbstructWorkPerfer {
  city: string; // 源期望城市
  job: string; // 源期望岗位
  parseWorkList: Array<{
    // 解析后的期望工作及城市
    city: string;
    job: string;
  }>;
}

// 在校经历
export interface AbstructSchoolExperience {
  position: string; // 职位
  department: string; // 部门
  content: string; // 内容
  onlineTime: Array<string>; // 在职时间
}

// 项目经验
export interface AbstructProjectExperience {
  name: string; // 项目名
  sumary: string; // 项目简介
  actRole: string; // 担任职位
  skill: string; // 主要使用的技术栈
  onlineTime: Array<string>; // 项目时间周期
  solve: string; // 遇到什么问题，如何解决
}

// 工作经历
export interface AbstructWorkExperience {
  companyName: string; // 公司名
  actRole: string; // 担任职位
  content: string; // 主要工作
  onlineTime: Array<string>; // 任职时间周期
}

// 获奖证书
export interface AbstructCertificate {
  content: string; // 源证书
  parseContent: Array<string>; // 解析后的证书
}

// 个人评价
export interface AbstructEvaluation {
  content: string; // 源评价
  parseContent: Array<string>; // 解析后的评价
}

// 掌握技能
export interface AbstructSkill {
  content: string; // 源技能
}
