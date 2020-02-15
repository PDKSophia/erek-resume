/**
 * @Desc: 平台静态文件信息
 * @Author: pengdaokuan
 * @CreateDate:  2020-01-09
 * @LastModify:  2020-01-09
 */
// 平台介绍文案
export const PLATFROM = {
  LOGO: require("../../app/assets/logo.png"),
  TITLE: ["了解一下~"],
  SUMMARY: [""]
};

// 平台介绍菜单栏
export const PLATFROM_MENU = [
  {
    url: "/home",
    key: "home",
    text: "首页"
  },
  {
    url: "/synopsis",
    key: "synopsis",
    text: "平台简介"
  },
  {
    url: "/update-log",
    key: "update-log",
    text: "更新日志"
  },
  {
    url: "/developer",
    key: "developer",
    text: "开发人员"
  }
];

export const PLATFORM_MAPS = {
  HOME: "home",
  SYNOPSIS: "synopsis",
  UPDATELOG: "update-log",
  DEVELOPER: "developer"
};

export const PLATFORM_INTRODUCE = {
  TITLE: "平台简介",
  CONTENT: [
    "Erek-Resume 云简历平台是由一群热爱学习的开发者共同开发完成，致力于为简历差劲不懂如何制作简历的同学在线制作一份较为完美的简历，平台在2018.05月开始规划，并在六月底完成 v1.0 版本，在 7月底 进行迭代， 8月20号完成新版本的更新，于10月底回厂重构，并优化之前版本存在的问题。"
  ],
  COVER: ""
};

export const PLATFORM_ADVANTAGE = {
  TITLE: "平台优势",
  CONTENT: [
    "想做一份好一点的简历 ? 但是找不到好的模板 ? 找到了一份好的模板 ? 但是居然要会员、要破费 ? 最终找到了一份模板 , 但不知道怎么写 ? 我们的优势 ? HTML 还原 WPS 模板简历 ! 不收费！不收费！不收费 ！可以直接转成 PDF 文档 ！ 随意挑选自己喜欢的模板 ！输入一次信息，导出多份简历 ！"
  ],
  COVER: ""
};
