# Erek Resumes
<div align='center'>
<img src='https://github.com/PDKSophia/YunResume/raw/master/image/logs.png' height=150 /> 

![](https://img.shields.io/badge/erek--resume-2.0.1-red.svg)
![](https://img.shields.io/badge/vuex-3.0.1-blue.svg)
![](https://img.shields.io/badge/axios-0.18.0-orange.svg)
![](https://img.shields.io/badge/vue-2.5.2-blue.svg)
![](https://img.shields.io/badge/vue--i18n-8.3.1-yellow.svg)
![](https://img.shields.io/badge/license-MIT-orange.svg)

</div>

### 平台由来
博主因为公司HR说还需要找一些实习生，后面在年级中收到一些简历，但是恕我直言，简历确实有点看不过去，所以....突然有个想法，能不能做一个简历模板制作平台，虽然WPS有很多模板，但是有些需要花钱啊，甚至有些程序猿想做一个html版的简历，始终找不到合适的，自己写又懒得写，emmmmm.....所以就有了这个Erek Resumes 平台。

### 平台介绍
Erek-Resume 云简历平台是由一群热爱学习的开发者共同开发完成，致力于为简历差劲不懂如何制作简历的同学在线制作一份较为完美的简历，平台在2018.05月开始规划，于六月底由彭道宽完成 v1.0 版本，在 7月底 进行迭代， 8月20号完成新版本的更新，后期新成员加入，于10月底回厂重构，并优化之前版本存在的问题，平台支持中英文

### 平台优势

找不到好的简历模板 ? 你想做一份好一点的简历 ? 但是找不到好的模板 ? 找到了一份好的模板 ? 但是居然要会员、要破费 ? ... 最终找到了一份模板 , 但是不知道怎么写 ? 我们的优势 ? HTML 还原 WPS 模板简历 ! <font color=#cc4b4b>不</font>收费！<font color=#cc4b4b>不</font>收费！<font color=#cc4b4b>不</font>收费！可以直接转成 <font color=#cc4b4b>PDF</font> 文档 ！！！ <font color=#cc4b4b>随意</font>挑选自己喜欢的模板！

> 经过了两次的迭代重构，界面简单，性能方面进行了部分的优化

## v2.0 版本说明

### 演示地址
- [平台主页](http://yun.pengdaokuan.cn/erek-resume)

- [平台介绍](http://yun.pengdaokuan.cn/erek-resume/#/erek-introduce)

- [简历制作](http://yun.pengdaokuan.cn/erek-resume/#/erek-resume)

### 技术栈
+ vue-cli
+ vuex
+ axios
+ vue-router
+ scss
+ element ui
+ ...
+ ...

### 目标功能
- [ ] 选择简历输入用户信息
- [ ] 简历头像实时预览
- [ ] 信息解析，填充模板
- [ ] 导出PDF
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
│   ├── components                  通用组件
│   │    ├─ErekResume                    
│   │    ├─ErekResumeForm           表单填写组件                    
│   │    └─ ... 
│   │
│   ├── i18n                        中英文配置
│   │    ├─ErekResume                                       
│   │    └─ ... 
│   │      
│   ├── ResumeComponents            简历相关文件   
│   │    ├─ResumeItem                                     
│   │    ├─ResumeList              
│   │    ├─ResumeSider                                
│   │    ├─ResumeTemplate              
│   │    └─ ...
│   │   
│   ├── router                      路由
│   │
│   ├── service                     与服务器相关文件
│   │    ├─api                      
│   │    ├─request                  
│   │    └─ ...  
│   │       
│   ├── store                       vuex模块化
│   │    ├─modules                                
│   │    ├─index.js                               
│   │    ├─types.js              
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
- [ ] 接入API，封装请求request
- [ ] 技能清单的tag标签选择
- [ ] 个人评价精美金句筛选

 ### 修复问题
- [ ] PDF清晰度问题
- [ ] Vuex状态管理完善
- [ ] 刷新丢失用户信息
- [ ] 用户操作的友好度提高

 ### 阶段性
+ 10.27 初始化项目，开始重构，安装各依赖，搭好架构，完成首页、介绍页、完成主题、响应式功能

+ 10.28 完成个人信息和基本信息的输入

+ 10.29 - 11.12 简历模板开发，后台搭建及开发

+ 11.13 - 11.17 简历9个模板开发完成

+ 11.18 - 11.28 简历9个模板的重构和优化，解决刷新丢失用户信息问题

+ 11.29 - 12.07 整个平台的逻辑完成及前期内测使用

-----

## V1.1 版本暂未开源
### 演示地址

[戳这里](http://yun.pengdaokuan.cn/YunResume)

### 阶段性 (由于还要上班以及其他事情，所以重构进度稍微有点慢)
+ 8.11 初始化项目，开始重构，安装各依赖，搭好架构

+ 8.12 划分文件目录，抽离api，以及封装组件

+ 8.13 完成首页 、 介绍页 、 用户信息页

+ 8.14 添加校园活动模块 、 完成用户输入信息页 、分析用户信息，给予合适模板，完成用户信息的解析，并填充至模版

+ 8.15 完成后台管理首页

+ 8.16 完成输入框的基本验证，完成密码加密，以及非法伪造登陆的简单处理

+ 8.17-8.19 由于在做公司的系统后台，耽搁

+ 8.20 完成menu导航菜单

+ 8.21 前台已经结束，后台管理采用 react + redux 进行开发中

-------------------

## V1.0 版本说明
### 技术栈
 + Vue
 + Axios
 + Vue-router
 + iView UI
 + Scss
 + Vuex
 + ...

-------------------

## 支持环境

现代浏览器及 IE11。

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- |
| IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions


### 相关链接

博客 : http://blog.pengdaokuan.cn:4001
 
掘金 : https://juejin.im/user/594ca8a35188250d892f4139
 
Fok-Erek-AK : https://github.com/PDKSophia/Fok-Erek-AK

Erek-Editor: https://github.com/PDKSophia/erek-editror
 
Vue-erek-manage: https://github.com/PDKSophia/vue-erek-manage

图标制作地址: https://shields.io/#/

-----
 
版权所有Copyright © 2018 by PDK 
 
All rights reserved。
