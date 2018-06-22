<template>
  <div class="box">
    <div class="template">

      <div class="intention">
        <span class="name">张悦然</span><span class="job">求职意向 : 市场营销岗位</span>
      </div>
      <div class="info">
        <img src="../../assets/tmg.png" alt="" class="info-img">
          <div class="info-items">
            <div class="info-item"><i class="fa fa-user fa-lg"></i>生日:1859.04</div>
            <div class="info-item"><i class="fa fa-phone fa-lg"></i>电话:17895245632</div>
        </div>
        <div class="info-items">
          <div class="info-item"><i class="fa fa-institution"></i>籍贯:湖南</div>
          <div class="info-item"><i class="fa fa-envelope-open"></i>邮箱:1234567891@qq.com</div>
        </div>
      </div>

      <!--职业技能-->
      <div class="temp">
        <div class="temp-title"><i class="fa fa-phone"></i><span class="title">职业技能</span></div>
        <div class="line">1</div><div class="line">1</div>

        <div class="temp-detail">
          <p>本人性格开朗,稳重,有活力,待人热情,真诚,有较强的组织能力,有团体协作精神,良好的社交能力,善于处理各种人际关系,能迅速适应各种环境,并融入其中.能把企业当做家庭,企业的财富就是我的财富,在努力为企业服务的过程中实现自身价值</p>
        </div>
      </div>


      <!--项目经验-->
      <div class="temp">
        <div class="temp-title"><i class="fa fa-industry"></i><span class="title">项目经验</span></div>
        <div class="line">1</div><div class="line">1</div>
        <div class="temp-items">
          <span class="temp-item">基于打饭APP的开发</span>
          <span class="temp-item">2018.02 ~ 2018.06</span>
        </div>
        <div class="temp-detail">
          <p>本人性格开朗,稳重,有活力,待人热情,真诚,有较强的组织能力,有团体协作精神,良好的社交能力,善于处理各种人际关系,能迅速适应各种环境,并融入其中.能把企业当做家庭,企业的财富就是我的财富,在努力为企业服务的过程中实现自身价值</p>
        </div>
      </div>
      <!--获奖经历-->
      <div class="temp">
        <div class="temp-title"><i class="fa fa-diamond"></i><span class="title">获奖经历</span></div>
        <div class="line">1</div><div class="line">1</div>
        <div class="temp-detail">
          <p>本人性格开朗,稳重,有活力,待人热情,真诚,有较强的组织能力,有团体协作精神,良好的社交能力,善于处理各种人际关系,能迅速适应各种环境,并融入其中.能把企业当做家庭,企业的财富就是我的财富,在努力为企业服务的过程中实现自身价值</p>
        </div>
      </div>

      <!--教育背景-->
      <div class="temp">
        <div class="temp-title"><i class="fa fa-graduation-cap"></i><span class="title">教育背景</span></div>
        <div class="line">1</div><div class="line">1</div>
        <div class="temp-items">
          <span class="temp-item">学校 : 南方野鸡大学</span>
          <span class="temp-item">学院 : 计算机科学与工程</span>
          <span class="temp-item">专业 : 计算机科学与技术</span>
        </div>
        <div class="temp-detail">
          <p>本人性格开朗,稳重,有活力,待人热情,真诚,有较强的组织能力,有团体协作精神,良好的社交能力,善于处理各种人际关系,能迅速适应各种环境,并融入其中.能把企业当做家庭,企业的财富就是我的财富,在努力为企业服务的过程中实现自身价值</p>
        </div>
      </div>
      <!--自我评价-->
      <div class="temp">
        <div class="temp-title"><i class="fa fa-comment"></i><span class="title">自我评价</span></div>
        <div class="line">1</div><div class="line">1</div>
        <div class="temp-detail">
          <p>本人性格开朗,稳重,有活力,待人热情,真诚,有较强的组织能力,有团体协作精神,良好的社交能力,善于处理各种人际关系,能迅速适应各种环境,并融入其中.能把企业当做家庭,企业的财富就是我的财富,在努力为企业服务的过程中实现自身价值</p>
        </div>
      </div>

    </div>





  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '模板9'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 100%;
  height: 100%;
  background-color: #fafaff;
}
.template {
  margin: 0 22%;
  background-color: #fff;
  padding:2rem 2rem;
}
.intention {
  text-align: center;
}
.name {
  font: 2rem/4rem bold;
}
.job {
  padding-left: 1rem;
  font: 1rem/4rem bold;
  color: #787878;
  font-weight: 800;
}
.info {
  display: flex;
  padding-left: 25%;
  border: 1.5px solid #48546A;
  position: relative;
}
.info-items {
  margin: 0 auto;
  font: 1rem/2.5rem normal;
}
.info-item {
    padding-right:0;
  }
.info-img {
  position: absolute;
  top: -4rem;
  left: 0.5rem;
  width: 7rem;
  height: 8rem;
}
.fa {
  padding-right: 0.5rem;
}

.temp-title {
  display: inline-block;
  font: 1rem/2rem bold;
  font-weight: 900;
  background-color: #48546A;
  width: 7rem;
  color: #fff;
  margin: 1.8rem 0 1rem 0;
  text-align: center;
}
.line {
  margin-left: 0.2rem;
  display: inline-block;
  width: 0.4rem;
  font: 1rem/2rem normal;
  background-color: #48546A;
}
.temp-items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.temp-item {
  margin: 0.2rem 0;
  font: 0.9rem/1.3rem bold;
  font-weight: 900;
  color: #48546A;
}
.temp-detail {
  font: 0.9rem/1.5rem normal;
  border-bottom: 1px solid #3F506C;
  padding-bottom: 1rem;
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
    padding: 1rem 0;
  }

  .intention {
    padding-top: 13rem;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .name {
    font: 2.2rem/2rem bold;
  }

  .job {
    padding-left: 0;
    font: 1.2rem/4rem bold;
    color: #787878;
    font-weight: 800;
  }

  .info {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    border: 1.5px solid #48546A;
    position: inherit;
    margin: 0 0.2rem;
  }

  .info-items
  {
    margin: 0 0 0 2.5rem;
    text-align: start;
    font: 1.3rem/3rem normal;
    font-weight: 900;
  }

  .info-item {
    padding-right: 0;
  }

  .info-img {
    position: absolute;
    top: 1rem;
    left: 50%;
    margin-left: -6rem;
    width: 12rem;
    height: 12rem;
    padding: 0.5rem;
    border: 1px solid #c0c0c0;;
  }

  .fa {
    padding-right: 0.1rem;
  }

  .temp-title {
    display: inline-block;
    font: 1.2rem/2rem bold;
    font-weight: 900;
    background-color: #48546A;
    width: 7rem;
    color: #fff;
    margin: 1.8rem 0 1rem 0;
    text-align: center;
  }

  .line {
    margin-left: 0.2rem;
    display: inline-block;
    width: 0.4rem;
    font: 1rem/2rem normal;
    background-color: #48546A;
  }

  .temp-items {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding:0 0.8rem
  }

  .temp-item {
    margin: 0.2rem 0;
    font: 1.1rem/2rem bold;
    font-weight: 900;
    color: #48546A;
  }

  .temp-detail {
    font: 1.1rem/2rem normal;
    border-bottom: 1px solid #3F506C;
    padding: 0 0.8rem;
    padding-bottom: 1rem;

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
    padding: 1rem 0;
  }

  .intention {
    padding-top: 13rem;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .name {
    font: 2.2rem/2rem bold;
  }

  .job {
    padding-left: 0;
    font: 1.2rem/4rem bold;
    color: #787878;
    font-weight: 800;
  }

  .info {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    border: 1.5px solid #48546A;
    position: inherit;
    margin: 0 0.2rem;
  }

  .info-items
  {
    margin: 0 0 0 0.5rem;
    text-align: start;
    font: 1.3rem/3rem normal;
    font-weight: 900;
  }

  .info-item {
    padding-right: 0;
  }

  .info-img {
    position: absolute;
    top: 1rem;
    left: 50%;
    margin-left: -6rem;
    width: 12rem;
    height: 12rem;
    padding: 0.5rem;
    border: 1px solid #c0c0c0;;
  }

  .fa {
    padding-right: 0.1rem;
  }

  .temp-title {
    display: inline-block;
    font: 1.2rem/2rem bold;
    font-weight: 900;
    background-color: #48546A;
    width: 7rem;
    color: #fff;
    margin: 1.8rem 0 1rem 0;
    text-align: center;
  }

  .line {
    margin-left: 0.2rem;
    display: inline-block;
    width: 0.4rem;
    font: 1rem/2rem normal;
    background-color: #48546A;
  }

  .temp-items {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding:0 0.8rem
  }

  .temp-item {
    margin: 0.2rem 0;
    font: 1.1rem/2rem bold;
    font-weight: 900;
    color: #48546A;
  }

  .temp-detail {
    font: 1.1rem/2rem normal;
    border-bottom: 1px solid #3F506C;
    padding: 0 0.8rem;
    padding-bottom: 1rem;

  }
}
</style>
