# Erek Resumes

![](https://img.shields.io/badge/vue-2.5.2-blue.svg)
![](https://img.shields.io/badge/license-MIT-orange.svg)

> 博主因为公司HR说还需要找一些实习生，后面在年级中收到一些简历，但是恕我直言，简历确实有点看不过去，所以....突然有个想法，能不能做一个简历模板制作平台，虽然WPS有很多模板，但是有些需要花钱啊，甚至有些程序猿想做一个html版的简历，始终找不到合适的，自己写又懒得写，emmmmm.....所以就有了这个Erek Resumes 平台。

> 要我说这个技术难点，其实还真没什么难点，因为目前前期并未涉及到后端，纯前端的工作，同时博主对所有的输入框没有做验证，不输入就没信息，是你们要生成简历，如果你自己都不输入信息，那么简历肯定就是一片空白咯，还有！！一定要按照博主定义的格式填写，不然到时候解析等出问题，简历就丑啦 ~ 嘻嘻嘻 ~

### 平台介绍
Erek-Resume 云简历平台是由一群热爱学习的开发者共同开发完成，致力于为简历差劲不懂如何制作简历的同学在线制作一份较为完美的简历，平台在2018.05月开始规划，并在六月底完成 v1.0 版本，在 7月底 进行迭代， 8月20号完成新版本的更新，于10月底回厂重构，并优化之前版本存在的问题

### 平台优势

找不到好的简历模板 ? 你想做一份好一点的简历 ? 但是找不到好的模板 ? 找到了一份好的模板 ? 但是居然要会员、要破费 ? ... 最终找到了一份模板 , 但是不知道怎么写 ? 我们的优势 ? HTML 还原 WPS 模板简历 ! <font color='red'>不收费！</font><span style='color: red'>不</span>收费！<span style='color: red'>不</span>收费！可以直接转成 <span style='color: red'>PDF</span> 文档 ！！！ <span style='color: red'>随意</span>挑选自己喜欢的模板！

> 经过了两次的迭代重构，界面简单，性能方面进行了部分的优化


### 部分界面

<img src='https://github.com/PDKSophia/YunResume/raw/master/image/lo1.png'>

<img src='https://github.com/PDKSophia/YunResume/raw/master/image/lo2.png'>

<img src='https://github.com/PDKSophia/YunResume/raw/master/image/lo3.png'>

<img src='https://github.com/PDKSophia/YunResume/raw/master/image/lo4.png'>


-----

## V1.0 版本说明
### 技术栈
 + Vue
 + Axios
 + Vue-router
 + iView UI
 + Scss
 + Vuex
 + ...

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

## v2.0 版本说明

### 演示地址
[戳这里](http://yun.pengdaokuan.cn/erek-resume)

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
- [ ] 用户信息输入
- [ ] 简历头像实时预览
- [ ] 信息解析，填充模板
- [ ] 根据用户信息推荐适合模板
- [ ] 导出PDF

### 文件架构
```
·
├
