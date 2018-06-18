<template>
  <div class="box">
    <div class="template">
      <img class="img" src="../../assets/tmg.png" alt="">
      <p class="name color">鹿小笙</p>
      <p class="intention">求职意向：程序员&nbsp;/&nbsp;前端工程师</p>
      <div class="message">
        <ul class="fa-ul info">
          <li><i class="fa-li fa fa-calendar color"></i>生日：1991.05.05</li>
          <li><i class="fa-li fa fa-map-marker color"></i>现居：四川省成都</li>
        </ul>
        <ul class="fa-ul info">
          <li><i class="fa-li fa fa-phone color"></i>17077007700</li>
          <li><i class="fa-li fa fa-envelope-open color"></i>Docer5563@qq.com</li>
        </ul>
        <img class="img1" src="../../assets/tmg.png" alt="">
      </div>
      <div class="m-box">
        <div class="column color1">
          <span class="item title"><i class="fa fa-graduation-cap fa-2x"></i>教育背景</span>
          <p class="item1">
            <span>2013.09--2017.06</span>
            <span>华南科技大学</span>
            <span>信息管理专业</span>
            <span>本科学历</span>
          </p>
        </div>
        <div class="column">
          <span class="item"></span>
          <span class="item1">
            管理信息系统、信息资源管理、经济学原理、运筹学、信息系统开发与管理、生产运作与管理、ERP、
            计算机网络、电子商务、大学英语、计算机应用等。
          </span>
        </div>
      </div>
      <div class="m-box">
        <div class="column color1">
          <span class="item title"><i class="fa fa-bar-chart fa-2x"></i>工作经验</span>
          <p class="item1">
            <span>2013.09--2017.06</span>
            <span>武汉云印网络科技有限公司</span>
            <span>前端工程师</span>
          </p>
        </div>
        <div class="column">
          <span class="item"></span>
          <div class="item1 play">
            <p>1、负责公司产品Web前端功能设计.开发和实现;</p>
            <p>2、参与项目，根据客户需求进行前端开发;</p>
            <p>3、使用JS编写封装良好的前端交互组件,维护及优化网站前端页面性能。</p>
          </div>
        </div>
      </div>
      <div class="m-box">
        <div class="column color1">
          <span class="item title1"></span>
          <p class="item1">
            <span>2013.09--2017.06</span>
            <span>武汉云印网络科技有限公司</span>
            <span>后台程序猿</span>
          </p>
        </div>
        <div class="column">
          <span class="item"></span>
          <div class="item1 play">
            <p>1、负责公司网站以及网站后台的调研、设计和开发;</p>
            <p>2、负责公司网站有关PHP方面的设计与制作;</p>
            <p>3、完成软件系统代码的实现，编写代码注释和开发文档;</p>
            <p>4、根据设计文档或需求说明完成代码编写，调试，测试和维护。</p>
          </div>
        </div>
      </div>
      <div class="m-box">
        <div class="column1">
          <span class="item title color1"><i class="fa fa-newspaper-o fa-2x"></i>奖项证书</span>
          <div class="item1 play">
            <p>语言类：大学英语六级证书，普通话二甲资格证</p>
            <p>软件类：熟练掌握PS. PR. AU等视音频编辑软件以及Office办公软件;</p>
            <p>荣誉类：大一、大二获华南大学三等奖学金、2013-2014年度优秀团员;</p>
            <p>活动类：华南电子科技大学摄影大赛二等奖，创业计划大赛亚军</p>
          </div>
        </div>
      </div>
      <div class="m-box">
        <div class="column1">
          <span class="item title color1"><i class="fa fa-user-circle fa-2x"></i>自我评价</span>
          <div class="item1 play">
            <p>作为一位职场新人，一定能够以积极主动的工作态度来迎接工作中的每一个挑战;</p>
            <p>团队配合能力：善于沟通，有一定团队协作经验，具备活动策划和组织协调能力;</p>
            <p>工作态度评价：良好的责任感，吃苦耐劳，擅于管理时间，勇于面对变化和挑战;;</p>
            <p>自主学习能力：习惯制定切实可行学习计划，能积极主动学习岗位所需知识技能。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '模板4'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  list-style: none;
}

.box {
  width: 100%;
  height: 100%;
  background-color: #fafaff;
}

.template {
  margin: 0 22%;
  background-color: #fff;
  padding: 4rem 2rem;
}
.color {
  color: #335d95;
}
.color1 {
  color:#3262a7;
}
.name {
  font-size: 2.3rem;
  font-weight: 700;
  padding-left: 1.3rem;
}
.intention {
  font-weight: 600;
  font-size: 1rem;
  padding-left: 1.3rem;
  margin-bottom: 0.5rem;
}

/* 个人信息 */
.message {
  width: 100%;
  font-size: 1.1rem;
  line-height: 2;
  color: #000;
  border: 0.3rem solid #e8e8eb;
  padding: 0.5rem 2.2rem;
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
.info {
  margin: 0 4.5rem 0 0.5rem;
}
.info i {
  line-height: 1.5;
}
.img1 {
  height: 13rem;
  width: 10rem;
  border: 0.25rem solid #ffffff;
  position: absolute;
  right: 1.5rem;
  bottom: 1rem;
  display: block;
}
.img {
  display: none;
}

/* 项目经验 */
.m-box {
  font-size: 0.9rem;
  line-height: 2;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  margin-top: 3rem;
}
.column {
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
}
.column1 {
  flex-basis: 100%;
  display: flex;
  align-items: flex-start;
}
.column1 .play {
  margin-left: -.5rem;
}
.item {
  flex: 1;
  margin-right: 2rem;
}
.title {
  border: 0.2rem solid #3262a7;
  text-align: center;
  font-weight: 600;
}
.title i {
  margin-right: 0.5rem;
}
.title1 {
  border: 0.2rem solid #ffffff;
}
.item1 {
  flex: 5;
  display: flex;
  justify-content: space-between;
}
.item ,.item1 span {
  font-weight: 600;
  font-size: 1.1rem;
}
.item1 span {
  margin-left: -0.5rem;
}
.play {
  display: inline-block;
}

@media screen and (min-width: 320px) and (max-width: 360px) {
  .template {
    margin: 0;
    background-color: #fff;
    padding: 2rem 2rem;
  }
  .color {
    color: #335d95;
  }
  .color1 {
    color:#3262a7;
  }
  .name {
    font-size: 2.3rem;
    font-weight: 700;
    padding-left: 0;
    text-align: center;
  }
  .intention {
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  /* 个人信息 */
  .message {
    width: 100%;
    height: 10rem;
    font-size: 1rem;
    line-height: 2;
    color: #000;
    border: 0.3rem solid #e8e8eb;
    padding: 0.5rem 1.5rem;
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .info {
    margin: 0;
    margin-left: 2.5rem;
  }

  .info i {
    line-height: 1.5;
  }
  .img1 {
    height: 11rem;
    width: 8rem;
    border: 0.25rem solid #ffffff;
    position: absolute;
    right: 3.6rem;
    bottom: -3rem;
    display: none;
  }
  .img {
    height: 12rem;
    width: 10rem;
    border: 0.25rem solid #ffffff;
    display: block;
    margin: auto;
  }

  /* 项目经验 */
  .m-box {
    font-size: 0.9rem;
    line-height: 2;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    margin-top: 3rem;
  }
  .column {
    flex-basis: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .column1 {
    flex-basis: 100%;
    display: flex;
    align-items: flex-start;
  }
  .column1 .play {
    margin-left: -.5rem;
  }
  .item {
    flex: 1;
    margin-right: 2rem;
  }
  .title {
    border: 0.2rem solid #3262a7;
    text-align: center;
    font-weight: 600;
    font-size: 1.1rem;
  }
  .title i {
    margin-right: 0.5rem;
  }
  .title1 {
    border: 0.2rem solid #ffffff;
  }
  .item1 {
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .item ,.item1 span {
    font-weight: 600;
    font-size: 1.1rem;
  }
  .item1 span {
    margin-left: -0.5rem;
  }
  .play {
    display: inline-block;
  }
}

@media screen and (min-width: 360px) and (max-width: 420px) {
  .template {
    margin: 0;
    background-color: #fff;
    padding: 2rem 2rem;
  }
  .color {
    color: #335d95;
  }
  .color1 {
    color:#3262a7;
  }
  .name {
    font-size: 2.3rem;
    font-weight: 700;
    padding-left: 0;
    text-align: center;
  }
  .intention {
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  /* 个人信息 */
  .message {
    width: 100%;
    height: 12rem;
    font-size: 1.2rem;
    line-height: 2;
    color: #000;
    border: 0.3rem solid #e8e8eb;
    padding: 0.5rem 1.5rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .info {
    margin: 0;
    margin-left: 3.8rem;
  }

  .info i {
    line-height: 1.5;
  }
  .img1 {
    height: 12rem;
    width: 9rem;
    border: 0.25rem solid #ffffff;
    position: absolute;
    right: 4.6rem;
    bottom: -3rem;
    display: none;
  }
  .img {
    height: 12rem;
    width: 10rem;
    border: 0.25rem solid #ffffff;
    display: block;
    margin: 1rem auto;
  }

  /* 项目经验 */
  .m-box {
    font-size: 0.9rem;
    line-height: 2;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    margin-top: 3rem;
  }
  .column {
    flex-basis: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .column1 {
    flex-basis: 100%;
    display: flex;
    align-items: flex-start;
  }
  .column1 .play {
    margin-left: -.5rem;
  }
  .item {
    flex: 1;
    margin-right: 2rem;
  }
  .title {
    border: 0.2rem solid #3262a7;
    text-align: center;
    font-weight: 600;
    font-size: 1.1rem;
  }
  .title i {
    margin-right: 0.5rem;
  }
  .title1 {
    border: 0.2rem solid #ffffff;
  }
  .item1 {
    flex: 6;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .item ,.item1 span {
    font-weight: 600;
    font-size: 1.1rem;
  }
  .item1 span {
    margin-left: -0.5rem;
  }
  .play {
    display: inline-block;
  }
}

@media screen and (min-width: 410px) and (max-width: 732px) {
  .template {
    margin: 0;
    background-color: #fff;
    padding: 2rem 2rem;
  }
  .color {
    color: #335d95;
  }
  .color1 {
    color:#3262a7;
  }
  .name {
    font-size: 3rem;
    font-weight: 700;
    padding-left: 0;
    text-align: center;
  }
  .intention {
    font-weight: 600;
    font-size: 1.4rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  /* 个人信息 */
  .message {
    width: 100%;
    height: 13rem;
    font-size: 1.4rem;
    line-height: 2;
    color: #000;
    border: 0.4rem solid #e8e8eb;
    padding: 0.5rem 1.5rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .info {
    margin: 0;
    margin-left: 3.8rem;
  }

  .info i {
    line-height: 1.5;
  }
  .img1 {
    height: 14rem;
    width: 11rem;
    border: 0.25rem solid #ffffff;
    position: absolute;
    right: 4.6rem;
    bottom: -4rem;
    display: none;
  }
  .img {
    height: 14rem;
    width: 12rem;
    border: 0.25rem solid #ffffff;
    display: block;
    margin: 1rem auto;
  }

  /* 项目经验 */
  .m-box {
    font-size: 1.1rem;
    line-height: 2;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    margin-top: 3rem;
  }
  .column {
    flex-basis: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .column1 {
    flex-basis: 100%;
    display: flex;
    align-items: flex-start;
  }
  .column1 .play {
    margin-left: -.5rem;
  }
  .item {
    flex: 1;
    margin-right: 2rem;
  }
  .title {
    border: 0.2rem solid #3262a7;
    text-align: center;
    font-weight: 600;
    font-size: 1.3rem;
  }
  .title i {
    font-size: 1.8rem;
    margin-right: 0.5rem;
  }
  .title1 {
    border: 0.2rem solid #ffffff;
  }
  .item1 {
    flex: 6;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .item ,.item1 span {
    font-weight: 600;
    font-size: 1.3rem;
  }
  .item1 span {
    margin-left: -0.5rem;
  }
  .play {
    display: inline-block;
  }
}
</style>
