<template>
  <div class="box">
    <div class="template">
      <div class="left-wrapper">
        <div class="pic">
          <img src="../../assets/tmg.png">
        </div>
        <div class="name-wrapper">
          <p class="name">关雎尔</p>
          <p>求职意向：财务会计工作</p>
        </div>
        <ul class="fa-ul info">
          <li><i class="fa-li fa fa-bar-chart"></i>经验：五年财务岗</li>
          <li><i class="fa-li fa fa-clock-o"></i>生日：1991.05.05</li>
          <li><i class="fa-li fa fa-map-marker"></i>现居：四川省成都</li>
          <li><i class="fa-li fa fa-phone"></i>手机：17077007700</li>
          <li><i class="fa-li fa fa-envelope-open"></i>邮箱：Docer5563@qq.com</li>
        </ul>
      </div>
      <div class="right-wrapper">
        <div class="title-wrapper">
          <p class="title"><i class="fa fa-graduation-cap fa-2x"></i>&nbsp;&nbsp;&nbsp;教育背景&nbsp;/&nbsp;Education</p>
        </div>
        <div class="work-wrapper">
          <div class="work-name">
            <i>2013.09&nbsp;-&nbsp;2017.06</i>
            <i>珠海金山科技大学&nbsp;/&nbsp;会计学院</i>
          </div>
          <p class="work">财务管理专业&nbsp;/&nbsp;本科</p>
          <div class="inner">
            <p class="i">
              基础会计学、财务会计、财务管理学、高级财务管理、审计学、税法、税务会计与纳税筹划、电子商务概论、
              项目评估、资产评估、资本运营，投资学、大学英语、高等数学等相关课程
            </p>
          </div>
        </div>
        <div class="title-wrapper">
          <p class="title"><i class="fa fa-suitcase fa-2x"></i>&nbsp;&nbsp;&nbsp;工作经历&nbsp;/&nbsp;Experience</p>
        </div>
        <div>
        <div class="work-wrapper">
          <div class="work-name">
            <i>天津金米特科技股份有限公司</i>
            <i>2013.09&nbsp;-&nbsp;2017.06</i>
          </div>
          <p class="work">岗位：出纳员</p>
          <div class="inner">
            <ul>
              <li>票据管理:审核出纳递交的费用类原始凭证，无误后交接表签章;进项税票抵扣联与ERP中发票核对;</li>
              <li>出纳对接:审核出纳递交的往来类原始凭证与银行对账单确认勾选，无误后在票据交接本上签章;</li>
              <li>记账凭证制作:费用类.往来类等记账凭证的制作;</li>
            </ul>
          </div>
        </div>
          <div class="work-wrapper">
            <div class="work-name">
              <i>北京利特投资有限公司</i>
              <i>2013.09&nbsp;-&nbsp;2017.06</i>
            </div>
            <p class="work">岗位：财务会计</p>
            <div class="inner">
              <ul>
                <li>负责编制记账凭证、及对现金、报销往来票据等账目的审核。</li>
                <li>负责每月编制报表，保证报表的准确性及及时性，完成税务申报工作。</li>
              </ul>
            </div>
          </div>
          <div class="title-wrapper">
          <p class="title"><i class="fa fa-suitcase fa-2x"></i>&nbsp;&nbsp;&nbsp;其他经历&nbsp;/&nbsp;Intership</p>
        </div>
          <div class="work-wrapper">
            <div class="work-name">
              <i>学院青年志愿协会财务部</i>
              <i>2013.09&nbsp;-&nbsp;2017.06</i>
            </div>
            <p class="work">岗位：副部长</p>
            <div class="inner">
              <ul>
                <li>完成资料整理、档案管理;社团财产登记、储存;</li>
                <li>完成海报(通知等)设计、书写、张贴;</li>
                <li>讨论本室干事任免、报主席团审核，考核本室干事;</li>
                <li>完成社团的各项工作总结报告等。</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="title-wrapper">
          <p class="title"><i class="fa fa-user-circle fa-2x"></i>&nbsp;&nbsp;&nbsp;自我评价&nbsp;/&nbsp;About Me</p>
        </div>
        <div class="inner">
          <p class="i">
            作积极认真，细心负责,熟练运用办公自动化软件，善于在工作中提出问题、发现问题、解决问题，
            有较强的分析能力;勤奋好学，踏实肯干,动手能力强，有很强的社会责任感;喜欢和勇于迎接新挑战。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '模板1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 初始化 */
* {
  margin: 0;
  padding: 0;
}

ul {
  padding: 0;
}
li {
  list-style-type: square;
}
i {
  font-style: normal;
}

/* 通用 */
.box {
  width: 100%;
  height: 100%;
  background: rgb(227, 230, 241);
}
.template {
  height: 100%;
  margin: 0 22%;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
}

/* 左边 */
.left-wrapper {
  width: 33%;
  color: #fff;
  text-align: center;
  background-color: #47a6bd;
}
/* 头像 */
.pic img {
  height: 10rem;
  width: 8rem;
  margin: 2.5rem auto;
  border: #fff solid 0.2rem;
}
/* 名字 */
.name-wrapper{
  font-size: 1rem;
  margin-bottom: 5rem;
}
.name {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}
/* 标题 */
.left-title {
  text-align: left;
  font-size: 1.5rem;
  margin: 2rem 0 1rem 1.8rem;
  padding-bottom: 0.6rem;
  padding-left: 0.5rem;
  border-bottom: 0.1rem solid #fff;
}
.info {
  text-align: left;
  margin-left: 3.5rem;
}
.info li {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  width: 100%;
}

 /* 右边 */
.right-wrapper {
  height: 100%;
  width: 67%;
  padding: 2rem;
}
/* 标题 */
.title-wrapper {
  font-size: 1.2rem;
  color: #47a6bd;
  padding-bottom: 0.3rem;
  margin-bottom: 0.7rem;
  border-bottom: 0.1rem solid #4395aa;
}
.work-wrapper {
  font-size: 1rem;
  margin-bottom: 2rem;
}
.work-name {
  color: #47a6bd;
  display: flex;
  justify-content: space-between;
  margin: 0.2rem 0;
}
.work {
  color: #47a6bd;
  margin: 0.2rem 0;
  font-weight: 700;
}
.inner p, .inner li {
  font-size: 1rem;
  line-height: 1.7;
  color: #8c8c8c;
  list-style-type: square;
}
.inner li {
  margin-left: 1rem;
}

@media screen and (min-width: 320px) and (max-width: 360px) {
  /* 通用 */
  .template {
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
  }

  /* 左边 */
  .left-wrapper {
    width: 100%;
    color: #fff;
    text-align: center;
    background-color: #47a6bd;
    padding-bottom: 3rem;
  }
  /* 头像 */
  .pic img {
    height: 13rem;
    width: 11rem;
    margin: 3.5rem auto;
    border: #fff solid 0.3rem;
    margin-bottom: 2rem;
  }
  /* 名字 */
  .name-wrapper{
    font-size: 1.3rem;
    margin-bottom: 5rem;
  }
  .name {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }

  .info {
    text-align: left;
    margin-left: 5rem;
  }
  .info li {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    width: 100%;
  }

  /* 右边 */
  .right-wrapper {
    height: 100%;
    width: 100%;
    padding: 2rem;
  }
  /* 标题 */
  .title-wrapper {
    font-size: 1.2rem;
    color: #47a6bd;
    padding-bottom: 0.3rem;
    margin-bottom: 0.7rem;
    border-bottom: 0.1rem solid #4395aa;
  }
  .work-wrapper {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  .work-name {
    color: #47a6bd;
    display: flex;
    flex-direction: column;
    justify-content: unset;
    margin: 0.2rem 0;
  }
  .work {
    margin: 0.2rem 0;
    font-weight: 700;
  }
  .inner p {
    font-size: 1rem;
    line-height: 1.7rem;
    color: #8c8c8c;
  }
}

@media screen and (min-width: 360px) and (max-width: 420px) {
  /* 通用 */
  .template {
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
  }

  /* 左边 */
  .left-wrapper {
    width: 100%;
    color: #fff;
    text-align: center;
    background-color: #47a6bd;
    padding-bottom: 3rem;
  }
  /* 头像 */
  .pic img {
    height: 13rem;
    width: 11rem;
    margin: 3.5rem auto;
    border: #fff solid 0.3rem;
    margin-bottom: 2rem;
  }
  /* 名字 */
  .name-wrapper{
    font-size: 1.5rem;
    margin-bottom: 5rem;
  }
  .name {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }

  .info {
    text-align: left;
    margin-left: 5.8rem;
  }
  .info li {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    width: 100%;
  }

  /* 右边 */
  .right-wrapper {
    height: 100%;
    width: 100%;
    padding: 2rem;
  }
  /* 标题 */
  .title-wrapper {
    font-size: 1.2rem;
    color: #47a6bd;
    padding-bottom: 0.3rem;
    margin-bottom: 0.7rem;
    border-bottom: 0.1rem solid #4395aa;
  }
  .work-wrapper {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  .work-name {
    color: #47a6bd;
    display: flex;
    flex-direction: column;
    justify-content: unset;
    margin: 0.2rem 0;
  }
  .work {
    margin: 0.2rem 0;
    font-weight: 700;
  }
  .inner p {
    font-size: 1rem;
    line-height: 1.7rem;
    color: #8c8c8c;
  }
}
</style>
