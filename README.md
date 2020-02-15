# Erek Resumes

<div align='center'>
<img src='https://github.com/PDKSophia/YunResume/raw/master/image/logs.png' height=200 />

![](https://img.shields.io/badge/erek--resume-1.0.2-red.svg)
![](https://img.shields.io/badge/react-16.12.0-blue.svg)
![](https://img.shields.io/badge/react_redux-7.1.3-orange.svg)
![](https://img.shields.io/badge/typescript-3.7.2-blue.svg)
![](https://img.shields.io/badge/seamless_immutable-7.1.4-yellow.svg)
![](https://img.shields.io/badge/react_app_rewired-2.1.5-green.svg)
![](https://img.shields.io/badge/quicklink-2.1.5-green.svg)
![](https://img.shields.io/badge/license-MIT-orange.svg)

</div>

## 功能/特性

- ✔ 输入一次信息，导出多模板简历
- ✔ 简历头像实时预览
- ✔ 信息解析，填充模板
- ✔ 支持导出 PDF
- ✔ 平台支持中英文
- ✔ 平台支持主题切换
- ✔ 支持 TypeScript
- ✔ 使用 react hooks 特性
- ✔ 支持 CSS Module 模块化
- ✔ 支持 ES6/ES7 JavaScript 语法
- ✔ quicklink 实现 prefetch，加快页面渲染

## 快速开始

```js
// 克隆项目
git clone https://github.com/PDKSophia/erek-resume

// 切换分支，最新react版本在v2分支上，vue旧版本在devlop分支上
git checkout v2

// 安装依赖
npm install

// 启动项目
npm start

// 打开浏览器，输入
http://localhost:3000/home
```

## 文档

- [关于 Erek-Resume](./docs/README.md)
- [快速开始](./docs/QuickStart.md)
- [React Hooks](./docs/ReactHooks.md)
  - [useState](./docs/ReactHooks.md)
  - [useEffect](./docs/ReactHooks.md)
  - [useCallback](./docs/ReactHooks.md)
  - [useDispatch](./docs/ReactHooks.md)
  - [useSelector](./docs/ReactHooks.md)
  - [hooks 与 redux 结合](./docs/ReactHooks.md)
- [功能逻辑](./docs/Action/README.md)
  - [全局主题色的处理](./docs/Action/README.md)
  - [简历输入模块设计](./docs/Action/README.md)
  - [简历解析模块设计](./docs/Action/README.md)
  - [数据过多时，如何考虑优先显示](./docs/Action/README.md)

## 部分界面

<img src='https://github.com/PDKSophia/YunResume/raw/master/image/lo1.png'>

<img src='https://github.com/PDKSophia/YunResume/raw/master/image/lo2.png'>

<img src='https://github.com/PDKSophia/YunResume/raw/master/image/lo5.png'>

<img src='https://github.com/PDKSophia/YunResume/raw/master/image/lo3.png'>

<img src='https://github.com/PDKSophia/YunResume/raw/master/image/lo4.png'>

<img src='https://github.com/PDKSophia/YunResume/raw/master/image/lo6.png'>

## 看个流程介绍

> ❗ 此流程来自 v1.0.1，样式大规模改动，但是流程还是大致一样的~

![image](https://github.com/PDKSophia/resumes/raw/develop/image/x.gif)

![image](https://github.com/PDKSophia/resumes/raw/develop/image/y.gif)

## 文件架构

> 🎯 具体可看下边文档 ~ 文件架构也是经过个人的一个思考，然后进行的划分，可能不够好，请见谅

```
·
├── package.json
│
├── public
│
├── src
│   ├── app                         主项目
│   │    ├── assets                 图片等资源文件
│   │    ├── client                 相关页面
│   │    ├── components             业务组件
│   │    ├── config                 业务相关配置
│   │    ├── mock                   Mock数据
│   │    ├── router                 路由文件
│   │    ├── server                 服务器文件
│   │    ├── store                  Redux
│   │    └─ ...
│   │
│   ├── common                      公共模块
│   │    ├─components               公共组件
│   │    ├─constants                全局常量
│   │    ├─utils                    Utils处理
│   │    └─ ...
│
├── index.tsx
│
├── App.tsx
│
├── config-overrides.js
│
└─
```

## 支持环境

现代浏览器及 IE11。

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE11, Edge                                                                                                                                                                                                      | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                           |

## 相关链接

💙 github : https://github.com/PDKSophia

🎨 书单 : https://github.com/PDKSophia/read-booklist

🎯 博客: https://github.com/PDKSophia/blog.io

🥇 掘金: https://juejin.im/user/594ca8a35188250d892f4139/posts

🔔 微博: https://weibo.com/u/2971991985

📫 邮箱 : 1063137960@qq.com

---

版权所有 Copyright © 2018 by PDK

All rights reserved。
