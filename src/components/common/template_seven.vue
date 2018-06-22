<template>
  <div class="box">
    <div class="template">
      <!--标题-->
      <div class="banner">
        <span class="banner-title">PERSONAL RESUME</span>
      </div>

      <!--个人简介-->
      <div class="info">
        <div class="info-bgc">
          <div class="info-job">
            <p class="name font-4">七芒星</p><p class="font-4">求职意向 : 财务会计/审计</p>
          </div>
          <div class="info-person">
            <ul class="font-4 ul">
              <li class="li"><i class="fa fa-institution"></i>籍贯:湖南</li>
              <li class="li"><i class="fa fa-phone fa-lg"></i>电话:123****6789</li>
              <li class="li"><i class="fa fa-envelope-open"></i>邮箱:12345678912@qq.com</li>
            </ul>
          </div>
        </div>
          <img src="../../assets/tmg.png" alt="" class="info-image" >

      </div>

      <!--技能清单-->
      <div class="temp">
        <div class="temp-title">
          <span class="fa fa-gears logo "></span><i>技能清单</i>
          <span class="grayFontB">/ Technique</span>
        </div>
        <p class="temp-detail">
        <ul class="font-1   items">
          <li>审计学、税法、税务会计和纳税策划、宏观经济等专业课</li>
          <li>审计学、税法、税务会计和纳税策划、宏观经济等专业课</li>
          <li>审计学、税法、税务会计和纳税策划、宏观经济等专业课</li>
        </ul>
        </p>
      </div>


      <!--项目经验-->
      <div class="temp">
        <div class="temp-title">
          <span class="fa fa-industry  logo"></span><i>项目经验</i>
          <span class="grayFontB">/ Experience</span>
        </div>
        <div class="items font-2">
          <div class="item">基于打饭APP的应用</div>
          <div class="item">2013.09~2017.06</div>
        </div>
        <p class="temp-detail ">
        <ul class="font-1 ">
          <li>基础会计学、财务会计、财务管理学、高级财务总监、</li>
          <li>审计学、税法、税务会计和纳税策划、宏观经济等专业课</li>
        </ul>
        </p>
      </div>

      <!--教育背景-->
      <div class="temp">
        <div class="temp-title">
            <span class="fa fa-graduation-cap logo"></span><i>教育背景</i>
            <span class="grayFontB">/ Education</span>
        </div>
        <div class="items font-2">
          <span class="item">2014.09~2018.06</span>
          <span class="item">湖北工业大学工程技术学院管理系</span>
          <span class="item">财务管理专业/本科</span>
        </div>
        <!--选填-->
        <!--<p class="temp-detail font-1">-->
          <!--<span class="font-3">主修课程：</span><br>-->
          <!--基础会计学、财务会计、财务管理学、高级财务总监、审计学、税法、税务会计和纳税策划、宏观经济等专业课-->

        <!--</p>-->


      </div>


      <!--荣誉奖励-->
      <div class="temp">
        <div class="temp-title">
            <span class="fa fa-pie-chart logo"></span><i >荣誉奖励</i>
            <span class="grayFontB">/ Certificate</span>
        </div>
        <p class="temp-detail font-1 items">
          专业技能证书：Adobe认证设计师资质、WPS年度最佳设计师、湖北省创青春创业计划移动专项赛银奖
          通用技能证书： CET4英语四级证书、普通话二级甲等证书、机动车驾驶证
        </p>
      </div>
      <!--自我评价-->
      <div class="temp">
        <div class="temp-title">
            <span class="fa fa-thumbs-o-up logo"></span><i>自我评价</i>
            <span class="grayFontB">/ Assessment</span>
        </div>
        <p class="temp-detail font-1 items">
          本人具备全面负责公司财务工作的经验与工作能力包括日常事务处理、财务处理、纳税管理、财务管理、对国家财税政策进行不断学习，性格开朗，积极认真，富有团队精神，抗压能力强，能接受长期出差工作
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '模板7'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body {
    line-height: 1.0;
  }
  *{
    padding: 0;
    margin: 0;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  a {
    color: #42b983;
  }
  .box {
    width: 100%;
    height: 100%;
    background-color: #fafaff;
  }

  .template {
    margin: 0 22%;
    background-color: #fff;
    padding: 0 2.7rem 0 3.1rem;
  }
  .fa {
    color:#fff;
    padding-right: 0.5rem;
  }
  .banner {

  }
  .banner-title {
    text-align: center;
    font: 1.4rem/3.6rem bold;
    font-weight: 900;

  }
  .info {
    display: flex;
  }
  .info-bgc {
    display: flex;
    width: 74%;
    background-color: #5b6270;
  }
  .info-job {
    width: 50%;
    text-align: center;
    /*flex布局*/
  }
  .info-person {
    width: 50%;
    flex-flow: column;
  }
  .li {
    line-height: 1.825rem;
  }
  .info-image {
    display: block;
    margin-left: 2rem;
    margin-top: -3rem;
    width: 7.5rem;
    height: 9rem;

  }
  .temp {
    font-size: 0.9rem;
    line-height: 2;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    margin-top: 3rem;
    margin-bottom: 3rem
  }
  .temp-title {
    display: flex;
    width: 100%;
    background-color: #F7F7F7;
    margin-bottom: 0.5rem;

  }
  .temp-title i {
    font: 1.125rem/1.5rem bold;
    font-weight: 900;
  }
  .logo{
    width: 1.8rem;
    height:1.5rem;
    padding: 0.3rem 0.5rem;
    background-color:#5b6270;

  }
  .font-1 {
    color: #ADADAD;
  }
  .font-2 {
    font-weight: 900;
  }
  .font-3 {
    color: #717171
  }
  .font-4 {
    color: #E1E1E1;
    font-size: 1rem;

  }
  .name {
    text-align: left;
    padding-left: 2rem;
    font: 1.6rem/3.5rem bold;

  }
  .grayFontB {
    font: 1rem/1.5rem normal;
    padding-left: 10px;
    color: #DDDDDD;

  }
  .items {
    display: flex;
    width: 100%;
    border-top: 2px solid #EDEDED;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .item {

  }



  @media screen and (min-width: 360px) and (max-width: 420px) {

  .box {
    width: 100%;
    height: 100%;
    background-color: #fafaff;
  }

  .template {
    margin: 0;
    background-color: #fff;
    padding: 0;
  }
  .banner {

  }
  .banner-title {
    display: block;
    margin: 0 auto;
    text-align: center;
    font: 1.4rem/3.6rem bold;
    font-weight: 900;
    padding-left: 0;
    background-color: #5b6270;
    color: #fff;
  }
  .info {
    display: flex;
    flex-wrap: wrap;

  }
  .info-bgc {
    display: flex;
    padding-top: 18rem;
    flex-wrap: wrap;
    width: 100%;
    background-color: #5b6270;
    flex-direction: inherit;
  }
  .info-job {
    width: 100%;
    text-align: left;
    flex-wrap: wrap;


    /*flex布局*/
  }
  .info-person {
    width: 100%;
    flex-flow: column;
    flex-wrap: wrap;
  }
  .fa {
    padding-right: 0.8rem;
  }
  .ul {
    padding: 1rem 0;
  }
  .li {
    line-height: 2rem;
    color: #E1E1E1;
    display: flex;
    justify-content: flex-start;
    padding-left: 3rem;
    font-size: 1.3rem
  }
  .info-image {
      display: block;
      margin: 0 auto;
      margin-top: -30rem;
      width: 12rem;
      height: 14rem;
      padding: 1rem;
      border: 1px solid #c0c0c0;
    }
  .temp {
    font-size: 0.9rem;
    line-height: 2;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    margin-top: 3rem;
    margin-bottom: 3rem
  }
  .temp-title {
    display: flex;
    width: 100%;
    height: 3rem;
    background-color: #F7F7F7;
    margin-bottom: 0.5rem;

  }
  .temp-title i {
    font:2rem/3rem bold;
    font-weight: 900;
    margin-left: 0.8rem;

  }
  .logo{
    padding: 0.8rem 0.5rem;
    background-color: #5b6270;
    width: 3rem;
    height: 3rem;
    font-size: 1.4rem;
  }
  .fa {
    font-size: 1.6rem;

  }

  .font-1 {
    padding:0 1.2rem;
    color: #ADADAD;
    font: 1.5rem/1.8rem normal;
  }
  .font-2 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font: 1.5rem/1.8rem normal;
    font-weight: 900;
  }
  .font-3 {
    color: #717171
  }
  .font-4 {
    text-align: center;
    color: #E1E1E1;
    font-size: 1.3rem
  }
  .name {
    text-align: center;
    padding-left: 0;
    font: 3rem/3.5rem bold;

  }
  .grayFontB {
    font: 1.5rem/3rem normal;
    padding-left: 10px;
    color: #DDDDDD;

  }
  .items {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-top: 2px solid #EDEDED;
    flex-wrap: wrap;
    padding: 1rem 1rem;

  }
  .item {
    margin-right: 0;
  }

}
@media screen and (min-width: 320px) and (max-width: 360px) {

  .box {
    width: 100%;
    height: 100%;
    background-color: #fafaff;
  }

  .template {
    margin: 0;
    background-color: #fff;
    padding: 0;
  }
  .banner {

  }
  .banner-title {
    display: block;
    margin: 0 auto;
    text-align: center;
    font: 1.4rem/3.6rem bold;
    font-weight: 900;
    padding-left: 0;
    background-color: #222;
    color: #fff;
  }
  .info {
    display: flex;
    flex-wrap: wrap;

  }
  .info-bgc {
    display: flex;
    padding-top: 18rem;
    flex-wrap: wrap;
    width: 100%;
    background-color: #222;
    flex-direction: inherit;
  }
  .info-job {
    width: 100%;
    text-align: left;
    flex-wrap: wrap;


    /*flex布局*/
  }
  .info-person {
    width: 100%;
    flex-flow: column;
    flex-wrap: wrap;
  }
  .fa {
    padding-right: 0.8rem;
  }
  .ul {
    padding: 1rem 0;
  }
  .li {
    line-height: 2rem;
    color: #E1E1E1;
    display: flex;
    justify-content: flex-start;
    padding-left: 0.5rem;
    font-size: 1.3rem
  }
  .info-image {
    display: block;
    margin: 0 auto;
    margin-top: -30.5rem;
    width: 14rem;
    height: 16rem;

  }
  .temp {
    font-size: 0.9rem;
    line-height: 2;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    margin-top: 3rem;
    margin-bottom: 3rem
  }
  .temp-title {
    display: flex;
    width: 100%;
    height: 3rem;
    background-color: #F7F7F7;
    margin-bottom: 0.5rem;

  }
  .temp-title i {
    font:1.5rem/3rem bold;
    font-weight: 900;
    margin-left: 0.8rem;

  }
  .logo{
    padding: 0.8rem 0.5rem;
    background-color: #222;
    width: 3rem;
    height: 3rem;
    font-size: 1.4rem;
  }
  .fa {
    font-size: 1.6rem;

  }

  .font-1 {
    padding:0 1.2rem;
    color: #ADADAD;
    font: 1.5rem/1.8rem normal;
  }
  .font-2 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font: 1.5rem/1.8rem normal;
    font-weight: 900;
  }
  .font-3 {
    color: #717171
  }
  .font-4 {
    text-align: center;
    color: #E1E1E1;
    font-size: 1.3rem
  }
  .name {
    text-align: center;
    padding-left: 0;
    font: 3rem/3.5rem bold;

  }
  .grayFontB {
    font: 1.5rem/3rem normal;
    padding-left: 10px;
    color: #DDDDDD;

  }
  .items {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-top: 2px solid #EDEDED;
    flex-wrap: wrap;
    padding: 1rem 1rem;

  }
  .item {
    margin-right: 0;
  }

}

</style>

</style>
