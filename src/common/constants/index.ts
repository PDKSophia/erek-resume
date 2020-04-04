/**
 * @desc 相关常量信息
 * @author pengdaokuan
 * @createDate  2020-03-28
 * @lastModify  2020-03-28
 */
export const prefixCls = "erek-resume";

export const screen = {
  index: "index", // 首页
  intro: "intro", // 介绍页
  resume: "resume", // 简历页
  template: "template" // 模板页
};

// 介绍页
export const platform = {
  home: "home",
  synopsis: "synopsis",
  updatelog: "update-log",
  developer: "developer"
};

// 简历页
export const resume = {
  home: "home",
  intro: "intro",
  guide: "guide"
};
// 模板页
export const template = {
  home: "home",
  hot: "hot",
  new: "new"
};

export const screenWrite = {
  index: {
    logo: require("@src/app/assets/logo.png"),
    title: ["Erek Resumes"],
    summary: ["一个模板简历制作平台, 让你的简历更加出众 ~"]
  },
  intro: {
    logo: require("@src/app/assets/logo.png"),
    title: ["了解一下"],
    summary: []
  },
  resume: {
    logo: require("@src/app/assets/logo.png"),
    title: ["制作简历"],
    summary: ["选择喜欢的模板，开始制作你的简历吧 ~"]
  },
  template: {
    logo: require("@src/app/assets/logo.png"),
    title: ["Template List"],
    summary: ["一个模板简历制作平台, 让你的简历更加出众 ~"]
  }
};

export const screenMenu = {
  index: [
    {
      url: "/platform",
      key: "platform",
      text: "介绍"
    },
    {
      url: "/resume",
      key: "resume",
      text: "简历"
    },
    {
      url: "/template",
      key: "template",
      text: "模板"
    },
    {
      url: "/",
      key: "code",
      text: "源码"
    }
  ],
  intro: [
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
  ],
  resume: [
    {
      url: "/home",
      key: "home",
      text: "首页"
    },
    {
      url: "/platform",
      key: "intro",
      text: "平台介绍"
    },
    {
      url: "/guide",
      key: "guide",
      text: "使用说明"
    }
  ],
  template: [
    {
      url: "/home",
      key: "home",
      text: "首页"
    },
    {
      url: "/",
      key: "hot",
      text: "热门模板"
    },
    {
      url: "/",
      key: "new",
      text: "刚出炉的"
    },
    {
      url: "/",
      key: "used",
      text: "使用过的"
    }
  ]
};

// 平台介绍
export const platIntro = {
  title: "平台简介",
  content: [
    "Erek-Resume 云简历平台是由一群热爱学习的开发者共同开发完成，致力于为简历差劲不懂如何制作简历的同学在线制作一份较为完美的简历，平台在2018.05月开始规划，并在六月底完成 v1.0 版本，在 7月底 进行迭代， 8月20号完成新版本的更新，于10月底回厂重构，并优化之前版本存在的问题。"
  ],
  cover: ""
};

export const platAdvan = {
  title: "平台优势",
  content: [
    "想做一份好一点的简历 ? 但是找不到好的模板 ? 找到了一份好的模板 ? 但是居然要会员、要破费 ? 最终找到了一份模板 , 但不知道怎么写 ? 我们的优势 ? HTML 还原 WPS 模板简历 ! 不收费！不收费！不收费 ！可以直接转成 PDF 文档 ！ 随意挑选自己喜欢的模板 ！输入一次信息，导出多份简历 ！"
  ],
  cover: ""
};

// 作者信息
export const author = {
  name: "彭道宽",
  weibo: "2020对阿宽好点",
  email: "1063137960@qq.com",
  github: "https://github.com/PDKSophia",
  juejin: "https://juejin.im/user/594ca8a35188250d892f4139"
};

// 版权信息
export const copyright = {
  platform: "github",
  fromdate: "2019",
  endDate: new Date().getFullYear()
};
