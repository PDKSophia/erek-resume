<template>
  <div class="box">
    <div class="template">
      <div class="left-wrapper">
        <div class="pic-wrapper">
          <img class="pic" src="../../assets/咸鱼.jpg" alt="">
        </div>
        <p class="box-1"></p>
        <div class="message-wrapper">
          <div class="message">
            <ul class="fa-ul info">
              <li><i class="fa-li fa fa-calendar"></i>生日：1991.07.07</li>
              <li><i class="fa-li fa fa-map-marker"></i>现居：湖北.武汉</li>
              <li><i class="fa-li fa fa-phone"></i>+86&nbsp;152&nbsp;0000&nbsp;0000</li>
              <li><i class="fa-li fa fa-envelope-open"></i>12125612@qq.com</li>
            </ul>
          </div>
          <div class="skill-wrapper">
            <p class="skill">技能证书&nbsp;&nbsp;&nbsp;&nbsp;Skill</p>
            <ul class="skill-item fa-ul">
              <li><i class="fa-li fa fa-square"></i>2015/7</li>
              <li><i class="fa-li fa fa-square"></i>会计从业资格证书</li>
            </ul>
            <ul class="skill-item fa-ul">
              <li><i class="fa-li fa fa-square"></i>2009/8</li>
              <li><i class="fa-li fa fa-square"></i>秘书资格证</li>
            </ul>
            <ul class="skill-item fa-ul">
              <li><i class="fa-li fa fa-square"></i>2009/3</li>
              <li><i class="fa-li fa fa-square"></i>全国计算机等级一级</li>
            </ul>
          </div>
          <p class="sum">PERSONAL&nbsp;RESUME</p>
        </div>
      </div>
      <div class="mid-wrappr">
        <p class="name color">稻壳儿</p>
        <p class="intention color">求职意向：出纳专员</p>
        <p class="introduce">
          本人持有会计证，对结算流程熟知，与财务、支付开发等部门沟通频繁。
          对支付方式的引进，支付通道问题熟知。对通道费用的核算、报销流程熟知。
        </p>
        <p class="title color">
          <i class="fa fa-bar-chart"></i>工作经验&nbsp;&nbsp;&nbsp;&nbsp;Experience
        </p>
        <div class="m-box">
          <div class="column color">
            <span class="item">2016.06&nbsp;-09</span>
            <span class="item1">天津搜悦科技股份有限公司</span>
          </div>
          <div class="column">
            <span class="item font">出纳</span>
            <span class="item1">
              负责日常的现金收付，银行结算，往来结算，使用发票，去银行办理业务，每月的工资发放，
              各种原始凭证以及报销单的审核。期间公司引进了用友u8系统，每日在u8系统登记现金日记账和银行
              日记账,保证日清月结。整个团队的工作效率提高20%以上。
            </span>
          </div>
        </div>
        <div class="m-box">
          <div class="column color">
            <span class="item">2015.06&nbsp;-09</span>
            <span class="item1">科美通讯有限公司</span>
          </div>
          <div class="column">
            <span class="item font">会计</span>
            <span class="item1">
              主要完成注销单据的处理;盘点商品库存;问题商品的售后登记及跟进;营业网点相关报表的编制、上报;
              核对应收应付单据;统计商品出入库，编制统计资料并录入系统。
            </span>
          </div>
        </div>
        <div class="m-box">
          <div class="column color">
            <span class="item">2015.06&nbsp;-09</span>
            <span class="item1">科美通讯有限公司</span>
          </div>
          <div class="column">
            <span class="item font">会计助理</span>
            <span class="item1">
              梳理结算退款流程，完善相关功能，方便业务部门费用区分及费用核查。协助商务合同的编写，
              根据业务情况进行合同的改进。签约合同的初审、商家资质审核，产品授权的审核。同时进行合同催款、
              认款及开票。进行合同存档、保存及管理。
            </span>
          </div>
        </div>
        <p class="title color">
          <i class="fa fa-graduation-cap"></i>教育背景&nbsp;&nbsp;&nbsp;&nbsp;Education
        </p>
        <p class="school">华南电子科技大学&nbsp;/&nbsp;法律专业本科</p>
        <p class="school">2012.09-2016.07</p>
        <p class="study">主修课程：管理学,微观经济学，宏观经济学,统计学，管理信息系统，人力资源管理，财务管理，理财，经济法，市场营销，企业战略管理等</p>
      </div>
      <div class="right-wrapper">
        <p class="pic-wrapper"></p>
        <p class="box-1"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '模板3'
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  width: 100%;
}
a {
  color: #42b983;
}
i {
  font-style: normal;
}

.box {
  width: 100%;
  height: 100%;
  /* background-color: #fafafa; */
}
.template {
  height: 100%;
  margin: 0 22%;
  display: flex;
  flex-wrap: wrap;
}
/* 左边 */
.left-wrapper {
  width: 30%;
  height: 100%;
  background-color: #17426c;
}
.pic-wrapper {
  height: 18.3rem;
  text-align: center;
  background-color: #f6f6f6;
}
.pic {
  width: 11rem;
  height: 13rem;
  border: 0.4rem solid #ffffff;
  margin: 2.5rem 0;
}
.box-1 {
  width: 100%;
  height: 1.5rem;
  background-color: #f7ce3c;
}
.message-wrapper {
  width: 100%;
  color: #ffffff;
}
.message {
  padding: 3rem 3.5rem;
  padding-right: 0.5rem;
  font-size: 1.1rem;
}
.message li {
  padding-left: 0.7rem;
  line-height: 3.2;
}
.message i {
  font-size: 1.3rem;
  font-weight: 100;
  line-height: 2;
}
.skill-wrapper {
  padding: 5rem 2rem 3rem;
}
.skill {
  font-size: 1.5rem;
  font-weight: 500;
}
.skill-item {
  margin: 2rem 1.4rem;
  margin-right: 0;
  font-size: 0.9rem;
}
.skill-item li {
  line-height: 2;
}
.skill-item i {
  line-height: 1.7;
}
.sum {
  padding: 0 0 2rem 0;
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
}

/* 中间 */
.mid-wrappr {
  width: 60%;
  padding: 2rem;
  background-color: #fff;
}
.name {
  font-size: 3rem;
}
.color {
  color: #165391;
}
.intention {
  font-size: 1.3rem;
}
.introduce {
  font-size: 1rem;
  line-height: 2;
  margin: 2rem 0;
}
.title {
  font-size: 1.3rem;
  font-weight: 700;
  border-bottom: 0.1rem solid #e7e7e7;
  padding: 0 0 0.5rem 0;
  /* margin-bottom: 1rem; */
  margin: 2rem 0;
}
.title i {
  margin-right: 0.6rem;
}

/* 项目经验 */
.m-box {
  font-size: 0.9rem;
  line-height: 2;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  margin: 1rem 0;
}
.column {
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
}
.item {
  flex: 1;
}
.item1 {
  flex: 2;
}
.font {
  font-weight: 800;
}
.school {
  font-size: 0.9rem;
  font-weight: 800;
  display: inline-block;
  margin-right: 0.8rem;
}
.study {
  font-size: 0.9rem;
  line-height: 2;
}

/* 右边 */
.right-wrapper {
  width: 1.5%;
  background-color: #17426c;
}

/* 手机 */
@media screen and (min-width: 320px) and (max-width: 360px) {
  .template {
    height: 100%;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
  }
  /* 左边 */
  .left-wrapper {
    width: 100%;
    background-color: #17426c;
  }
  .pic-wrapper {
    height: 18.3rem;
    text-align: center;
    background-color: #f6f6f6;
  }
  .pic {
    width: 11rem;
    height: 13rem;
    border: 0.4rem solid #ffffff;
    margin: 2.5rem 0;
  }
  .box-1 {
    width: 100%;
    height: 1.5rem;
    background-color: #f7ce3c;
  }
  .message-wrapper {
    width: 100%;
    color: #ffffff;
  }
  .message {
    padding: 3rem 5.5rem;
    padding-right: 0.5rem;
    font-size: 1.1rem;
  }
  .message li {
    padding-left: 0.7rem;
    line-height: 3.2;
  }
  .message i {
    font-size: 1.3rem;
    font-weight: 100;
    line-height: 2;
  }
  .skill-wrapper {
    padding: 5rem 4rem 3rem;
  }
  .skill {
    font-size: 1.5rem;
    font-weight: 500;
  }
  .skill-item {
    margin: 2rem 1.4rem;
    margin-right: 0;
    font-size: 0.9rem;
  }
  .skill-item li {
    line-height: 2;
  }
  .skill-item i {
    line-height: 1.7;
  }
  .sum {
    padding: 0 0 4rem 0;
    font-size: 1.3rem;
    font-weight: 700;
    text-align: center;
  }

  /* 中间 */
  .mid-wrappr {
    width: 100%;
    padding: 1.5rem;
    background-color: #fff;
  }
  .name {
    font-size: 3rem;
    text-align: center;
  }
  .color {
    color: #165391;
  }
  .intention {
    font-size: 1.3rem;
    text-align: center;
  }
  .introduce {
    font-size: 1rem;
    line-height: 2;
    margin: 2rem 0;
  }
  .title {
    font-size: 1.3rem;
    font-weight: 700;
    border-bottom: 0.1rem solid #e7e7e7;
    padding: 0 0 0.5rem 0;
    /* margin-bottom: 1rem; */
    margin: 2rem 0;
  }
  .title i {
    margin-right: 0.6rem;
  }

  /* 项目经验 */
  .m-box {
    font-size: 0.9rem;
    line-height: 1.7;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    margin: 1rem 0;
  }
  .column {
    flex-basis: 100%;
    display: flex;
    justify-content: space-between;
  }
  .item {
    flex: 1;
  }
  .item1 {
    flex: 2;
  }
  .font {
    font-weight: 800;
  }
  .school {
    font-size: 0.9rem;
    font-weight: 800;
    display: inline-block;
    margin-right: 0.8rem;
  }
  .study {
    font-size: 0.9rem;
    line-height: 2;
  }

  /* 右边 */
  .right-wrapper {
    width: 0;
    background-color: #17426c;
  }
}

@media screen and (min-width: 360px) and (max-width: 420px) {
  .template {
    height: 100%;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
  }
  /* 左边 */
  .left-wrapper {
    width: 100%;
    background-color: #17426c;
  }
  .pic-wrapper {
    height: 22rem;
    text-align: center;
    background-color: #f6f6f6;
    padding-top: 1.5rem;
  }
  .pic {
    width: 12rem;
    height: 14rem;
    border: 0.4rem solid #ffffff;
  }
  .box-1 {
    width: 100%;
    height: 1.5rem;
    background-color: #f7ce3c;
  }
  .message-wrapper {
    width: 100%;
    color: #ffffff;
  }
  .message {
    padding: 3rem 7rem;
    padding-right: 0.5rem;
    font-size: 1.1rem;
  }
  .message li {
    padding-left: 0.7rem;
    line-height: 3.2;
  }
  .message i {
    font-size: 1.3rem;
    font-weight: 100;
    line-height: 2;
  }
  .skill-wrapper {
    padding: 5rem 6rem 3rem;
  }
  .skill {
    font-size: 1.5rem;
    font-weight: 500;
  }
  .skill-item {
    margin: 2rem 1.4rem;
    margin-right: 0;
    font-size: 0.9rem;
  }
  .skill-item li {
    line-height: 2;
  }
  .skill-item i {
    line-height: 1.7;
  }
  .sum {
    padding: 0 0 4rem 0;
    font-size: 1.3rem;
    font-weight: 700;
    text-align: center;
  }

  /* 中间 */
  .mid-wrappr {
    width: 100%;
    padding: 1.5rem;
    background-color: #fff;
  }
  .name {
    font-size: 3rem;
    text-align: center;
  }
  .color {
    color: #165391;
  }
  .intention {
    font-size: 1.3rem;
    text-align: center;
  }
  .introduce {
    font-size: 1rem;
    line-height: 2;
    margin: 2rem 0;
  }
  .title {
    font-size: 1.3rem;
    font-weight: 700;
    border-bottom: 0.1rem solid #e7e7e7;
    padding: 0 0 0.5rem 0;
    /* margin-bottom: 1rem; */
    margin: 2rem 0;
  }
  .title i {
    margin-right: 0.6rem;
  }

  /* 项目经验 */
  .m-box {
    font-size: 1rem;
    line-height: 1.7;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    margin: 1rem 0;
  }
  .column {
    flex-basis: 100%;
    display: flex;
    justify-content: space-between;
  }
  .item {
    flex: 1;
  }
  .item1 {
    flex: 2;
  }
  .font {
    font-weight: 800;
  }
  .school {
    font-size: 0.9rem;
    font-weight: 800;
    display: inline-block;
    margin-right: 0.8rem;
  }
  .study {
    font-size: 0.9rem;
    line-height: 2;
  }

  /* 右边 */
  .right-wrapper {
    width: 0;
    background-color: #17426c;
  }
}

@media screen and (min-width: 410px) and (max-width: 732px) {
  .template {
    height: 100%;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
  }
  /* 左边 */
  .left-wrapper {
    width: 100%;
    background-color: #17426c;
  }
  .pic-wrapper {
    height: 25rem;
    text-align: center;
    background-color: #f6f6f6;
    padding-top: 3rem;
  }
  .pic {
    width: 13.5rem;
    height: 15.5rem;
    border: 0.4rem solid #ffffff;
  }
  .box-1 {
    width: 100%;
    height: 3rem;
    background-color: #f7ce3c;
  }
  .message-wrapper {
    width: 100%;
    color: #ffffff;
  }
  .message {
    padding: 3rem 7rem;
    padding-right: 0.5rem;
    font-size: 1.3rem;
  }
  .message li {
    padding-left: 0.7rem;
    line-height: 3.2;
  }
  .message i {
    font-size: 1.5rem;
    font-weight: 100;
    line-height: 2.4;
  }
  .skill-wrapper {
    padding: 5rem 6rem 3rem;
  }
  .skill {
    font-size: 1.8rem;
    font-weight: 500;
  }
  .skill-item {
    margin: 2rem 1.4rem;
    margin-right: 0;
    font-size: 1.2rem;
  }
  .skill-item li {
    line-height: 2;
  }
  .skill-item i {
    line-height: 1.7;
  }
  .sum {
    padding: 0 0 5rem 0;
    font-size: 1.6rem;
    font-weight: 700;
    text-align: center;
  }

  /* 中间 */
  .mid-wrappr {
    width: 100%;
    padding: 1.5rem;
    background-color: #fff;
  }
  .name {
    font-size: 3.5rem;
    text-align: center;
  }
  .color {
    color: #165391;
  }
  .intention {
    font-size: 1.5rem;
    text-align: center;
  }
  .introduce {
    font-size: 1.3rem;
    line-height: 2;
    margin: 2rem 0;
  }
  .title {
    font-size: 1.6rem;
    font-weight: 700;
    border-bottom: 0.1rem solid #e7e7e7;
    padding: 0 0 0.5rem 0;
    margin: 2rem 0;
  }
  .title i {
    margin-right: 0.7rem;
  }

  /* 项目经验 */
  .m-box {
    font-size: 1.2rem;
    line-height: 1.7;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    margin: 1rem 0;
  }
  .column {
    flex-basis: 100%;
    display: flex;
    justify-content: space-between;
  }
  .item {
    flex: 1;
  }
  .item1 {
    flex: 2;
  }
  .font {
    font-weight: 800;
  }
  .school {
    font-size: 1.2rem;
    font-weight: 800;
    display: inline-block;
    margin-right: 0.8rem;
  }
  .study {
    font-size: 1.2rem;
    line-height: 2;
  }

  /* 右边 */
  .right-wrapper {
    width: 0;
    background-color: #17426c;
  }
}
</style>
