/**
 * @Desc: 相关常量信息
 * @Author: pengdaokuan
 * @CreateDate:  2019-11-23
 * @LastModify:  2019-11-23
 */
// 首页介绍文案
export const PRODUCT = {
  LOGO: require("../../assets/logo.png"),
  TITLE: ["Erek Resumes"],
  SUMMARY: ["一个模板简历制作平台, 让你的简历更加出众 ~"]
};

// 首页菜单栏
export const PRODUCT_MENU = [
  {
    url: "/platform",
    key: "platform",
    text: "介绍"
  },
  {
    url: "/",
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
];

// 模板介绍文案
export const TEMPLATE = {
  LOGO: require("../../assets/logo.png"),
  TITLE: ["Template List"],
  SUMMARY: [""]
};

// 模板菜单栏
export const TEMPLATE_MENU = [
  {
    url: "/home",
    key: "home",
    text: "回到首页"
  },
  {
    url: "/",
    key: "hot",
    text: "热门模板"
  },
  {
    url: "/",
    key: "new",
    text: "最新模板"
  },
  {
    url: "/",
    key: "used",
    text: "使用过的"
  }
];

// 作者信息
export const AUTHOR = {
  NAME: "彭道宽",
  WEIBO: "彭道宽",
  WECHAR: "PPPengDK",
  EMAIL: "1063137960@qq.com",
  GITHUB: "https://github.com/PDKSophia",
  JUEJIN: "https://juejin.im/user/594ca8a35188250d892f4139"
};

// 版权信息
export const COPYRIGHT = {
  PLATFORM: "github",
  FROMDATE: "2019",
  CURRENTDATE: "2019"
};
