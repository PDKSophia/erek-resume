# Erek Resumes

<div align='center'>
<img src='https://github.com/PDKSophia/YunResume/raw/master/image/logs.png' height=150 />

![](https://img.shields.io/badge/erek--resume-1.0.2-red.svg)
![](https://img.shields.io/badge/react-16.12.0-blue.svg)
![](https://img.shields.io/badge/react_redux-7.1.3-orange.svg)
![](https://img.shields.io/badge/typescript-3.7.2-blue.svg)
![](https://img.shields.io/badge/seamless_immutable-7.1.4-yellow.svg)
![](https://img.shields.io/badge/react-app-rewired-2.1.5-green.svg)
![](https://img.shields.io/badge/license-MIT-orange.svg)

</div>

### 平台由来

博主因为公司 HR 说还需要找一些实习生，后面在年级中收到一些简历，但是恕我直言，简历确实有点看不过去(虽然我的简历也比较 low)，所以....突然有个想法，能不能做一个简历模板制作平台，虽然 WPS 有很多模板，但是有些需要花钱啊，甚至有些程序猿想做一个 html 版的简历，始终找不到合适的，自己写又懒得写，emmmmm.....所以就有了这个 Erek Resumes 平台。

### 平台介绍

Erek-Resume 云简历平台是由`彭道宽`完成，致力于为简历差劲不懂如何制作简历的同学在线制作一份较为完美的简历。

### 平台优势

找不到好的简历模板 ? 你想做一份好一点的简历 ? 但是找不到好的模板 ? 找到了一份好的模板 ? 但是居然要会员、要破费 ? ... 最终找到了一份模板 , 但是不知道怎么写 ? 我们的优势 ? HTML 还原 WPS 模板简历 ! <font color=#cc4b4b>不</font>收费！<font color=#cc4b4b>不</font>收费！<font color=#cc4b4b>不</font>收费！可以直接转成 <font color=#cc4b4b>PDF</font> 文档 ！！！ <font color=#cc4b4b>随意</font>挑选自己喜欢的模板！

### 版本更新

平台在 2018.05 月开始规划，于六月底由彭道宽完成 v1.0.0 版本，在 7 月底进行迭代， 8 月 20 号完成 v1.0.0 版本的更新，后期有前端新手加入，想一同开发此平台，故而在 10 月底回厂重构，并优化之前版本存在的问题，平台支持中英文，在 12 月初完成 v1.0.1 版本的更新

忙于实习，且在 2019.03 忙于春招，并且之后忙着毕设，故而不再维护，but ，在入职新公司之后，眼界扩大，且个人觉得技术较之前有所提升，回头再开此项目代码，很多文件目录架构，组件设计等存在许多问题，并且之前让另一个同学开发，没有采用 eslint + prettier 规范，且没有加入 typescript

故而在 2019.11 月底进行二期规划，在完成之前的功能之外，会加强用户体验。

> 经过了两次的迭代重构，界面简单，性能方面进行了部分的优化

## 技术栈

- react
- redux
- redux-saga
- react-router
- react-thunk
- react-logger
- ant-design
- lodash
- typescript
- classnames
- sass + css-module
- react-app-rewired
- seamless-immutable
- ...

### 目标功能

- [ ] 选择简历输入用户信息
- [ ] 简历头像实时预览
- [ ] 信息解析，填充模板
- [ ] 导出 PDF
- [ ] 平台支持中英文
- [ ] 平台支持主题切换

### 部分界面

<img src='https://github.com/PDKSophia/YunResume/raw/master/image/lo1.png'>

<img src='https://github.com/PDKSophia/YunResume/raw/master/image/lo2.png'>

<img src='https://github.com/PDKSophia/YunResume/raw/master/image/lo5.png'>

<img src='https://github.com/PDKSophia/YunResume/raw/master/image/lo3.png'>

<img src='https://github.com/PDKSophia/YunResume/raw/master/image/lo4.png'>

<img src='https://github.com/PDKSophia/YunResume/raw/master/image/lo6.png'>

### 文件架构

```
·
├── package.json
│
├── public
│
├── src
│   ├── assets                      图片等资源文件
│   │
│   ├── business                    业务组件
│   │
│   ├── common                      公共模块
│   │    ├─components               公共组件
│   │    │    ├─Image
│   │    │    └─ ...
│   │    │
│   │    ├─templates                公共模板
│   │    │
│   │    └─ ...
│   │
│   ├── lib
│   │    ├─constant                 常量定义
│   │    ├─defaultProps             默认的Props
│   │    ├─interface                一些常用的interface
│   │    ├─theme                    主题色调
│   │    └─ ...
│   │
│   ├── router                      路由
│   │
│   ├── service                     与服务器相关文件
│   │    ├─api
│   │    ├─request
│   │    └─ ...
│   │
│   ├── store                       redux
│   │    ├─theme
│   │    │   ├─action
│   │    │   ├─reducer
│   │    │   └─ ...
│   │    ├─actionsType
│   │    ├─index
│   │    ├─reducers
│   │    └─ ...
│   │
│   ├── utils
│   │    ├─check-session.js         缓存数据文件
│   │    ├─index.config.js          首页配置文件
│   │    ├─navbar.config.js         所有navbar配置文件
│   │    ├─theme.js                 主题颜色配置文件
│   │    ├─tool.js                  全局函数文件，比如 加载框，提示框等
│   │    └─ ...
│   │
│   ├── view
│   │    ├─Index                    平台首页
│   │    ├─Introduce                平台介绍
│   │    ├─Resume                   简历使用页
│   │    └─ ...
│   │
│   ├──
│   └─
│
├── main.js
│
├── App.vue
│
└─
```

### 项目环境

```javascript
    1 . Node.js 版本 v10.6.0
    2 . Vue-cli 版本 v3.0.0
    3 . 其他依赖请移步 package.json
    4 . 开发人员说明文档移步 DEVELOPER.md 文档
```

### 新功能

- [ ] 首页主题设置
- [ ] 中英文配置
- [ ] 最热模板、最新模板
- [ ] 接入 API，封装请求 request
- [ ] 技能清单的 tag 标签选择
- [ ] 个人评价精美金句筛选

### 修复问题

- [ ] PDF 清晰度问题
- [ ] Vuex 状态管理完善
- [ ] 刷新丢失用户信息
- [ ] 用户操作的友好度提高

## 支持环境

现代浏览器及 IE11。

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE11, Edge                                                                                                                                                                                                      | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                           |

### 相关链接

博客 : http://blog.pengdaokuan.cn:4001

掘金 : https://juejin.im/user/594ca8a35188250d892f4139

Fok-Erek-AK : https://github.com/PDKSophia/Fok-Erek-AK

Erek-Editor: https://github.com/PDKSophia/erek-editror

Vue-erek-manage: https://github.com/PDKSophia/vue-erek-manage

图标制作地址: https://shields.io/#/

---

版权所有 Copyright © 2018 by PDK

All rights reserved。
