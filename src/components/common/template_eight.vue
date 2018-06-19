<template>
  <div class="box">
    <div class="template">
      <!--头部-->
      <div class="header">
        <!--可选填-->
        <div class="social ">
          <i class="fa fa-github fa-lg pd"></i>
          <p> https://github.com/wdl</p>
        </div>

        <div class="social">
          <i class="fa fa-share-alt fa-lg pd"></i>
          <p>知乎:王大陆</p>
        </div>
      </div>
      <!--简历内容-->
      <div class="content">
        <!--左栏-->
        <div class="left-wrapper">
          <div class="job">
            <div class="name white">王大陆</div>
            <div class="job-intention white size">求职意向 : 行政管理</div>
          </div>
          <div class="info">
            <img src="../../assets/tmg.png" alt="" class="info-img">
            <div class="title">
              <i class="fa fa-user fa-2x logo z"></i>
              <span class="font">个人信息</span>
            </div>
            <ul class="items">
              <li class="item">籍&nbsp;&nbsp;贯 : 28</li>
              <li class="item">电&nbsp;&nbsp;话 : 123****7894</li>
              <li class="item">邮&nbsp;&nbsp;箱 : abc@123.com</li>
            </ul>
            <div class="title">
              <i class="fa fa-gears fa-2x logo"></i>
              <span class="font">职业技能</span>
            </div>
            <ul class="items">
              <li class="item">精通javascript</li>
              <li class="item">精通javascript</li>
              <li class="item">精通javascript</li>
              <li class="item">精通javascript</li>
              <li class="item">精通javascript</li>

            </ul>
            <div class="title">
              <i class="fa fa-heart-o fa-2x logo"></i>
              <span class="font">兴趣爱好</span>
            </div>
            <ul class="items">
              <li class="item">游泳</li>
              <li class="item">跑步</li>
              <li class="item">画画</li>
              <li class="item">编程</li>

            </ul>
          </div>
        </div>
        <!--右栏-->
        <div class="right-wrapper">
          <!--自我评价-->
          <div class="temp">
            <div class="title">
              <i class="fa fa-comment fa-2x logo"></i>
              <span class="font">自我评价</span>
            </div>
            <div class="temp-detail">
              <p>本人性格开朗,稳重,有活力,待人热情,真诚,有较强的组织能力,有团体协作精神,良好的社交能力,善于处理各种人际关系,能迅速适应各种环境,并融入其中.能把企业当做家庭,企业的财富就是我的财富,在努力为企业服务的过程中实现自身价值</p>
            </div>
          </div>
          <!--项目经验-->
          <div class="temp">
            <div class="title">
              <i class="fa fa-tasks fa-2x logo"></i>
              <span class="font">项目经验</span>
            </div>
            <div class="temp-detail more">
              <div class="temp-items">
                <span class="temp-item">2014.09~2018.06</span>
                <span class="temp-item">湖北工业大学</span>
                <span class="temp-item">财务管理专业/本科</span>
              </div>
              <p>本人性格开朗,稳重,有活力,待人热情,真诚,有较强的组织能力,有团体协作精神,良好的社交能力,善于处理各种人际关系,能迅速适应各种环境,并融入其中.能把企业当做家庭,企业的财富就是我的财富,在努力为企业服务的过程中实现自身价值</p>

            <div class="temp-items">
              <span class="temp-item">2014.09~2018.06</span>
              <span class="temp-item">湖北工业大学</span>
              <span class="temp-item">财务管理专业/本科</span>
            </div>
            <p>本人性格开朗,稳重,有活力,待人热情,真诚,有较强的组织能力,有团体协作精神,良好的社交能力,善于处理各种人际关系,能迅速适应各种环境,并融入其中.能把企业当做家庭,企业的财富就是我的财富,在努力为企业服务的过程中实现自身价值</p>
            </div>
            <!--教育经历-->
            <div class="temp">
              <div class="title">
                <i class="fa fa-graduation-cap fa-2x logo"></i>
                <span class="font">教育经历</span>
              </div>
              <div class="temp-detail more">
                <div class="temp-items">
                  <span class="temp-item">2014.09~2018.06</span>
                  <span class="temp-item">湖北工业大学</span>
                  <span class="temp-item">财务管理专业/本科</span>
                </div>
                <p>本人性格开朗,稳重,有活力,待人热情,真诚,有较强的组织能力,有团体协作精神,良好的社交能力,善于处理各种人际关系,能迅速适应各种环境,并融入其中.能把企业当做家庭,企业的财富就是我的财富,在努力为企业服务的过程中实现自身价值</p>
              </div>
              </div>

            <!--荣誉证书-->
            <div class="temp">
            <div class="title">
              <i class="fa fa-diamond fa-2x logo"></i>
              <span class="font">荣誉证书</span>
            </div>
              <div class="temp-detail pdb">
                <p> CET4英语四级证书、普通话二级甲等证书、机动车驾驶证</p>
              </div>
            </div>

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
      msg: '模板8'
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
  .header {
    width: 100%;
    height: 6.4rem;
    background-color: #595959;
    display: flex;
    flex-direction: row-reverse;
  }
  .social {
    width: 30%;
    margin-top: 3.5rem;
    display: block;
    color: #fff;

  }
.white {
  color: #fff;
}
.size {
  font-size: 1rem;
}
.pd {
  padding-left: 1rem;
}
.pdb {
  padding-bottom: 3rem;
}

.content {
  display: flex;
}
  .left-wrapper {
    width: 30%;
    height: 100%;
  }

  .job {
    position: absolute;
    margin-top: -7rem;
    margin-left: 2rem;
    border-radius: 0 0 1rem 1rem;
    width: 10rem;
    height: 9rem;
    background-color: #4F81BC;
    z-index: 1;
  }
  .name {
    font: 2rem/3rem bold;
    color: #fff;
    text-align: center;
    padding: 3rem 0 0 0;
  }
  .job-intention {
    text-align: center;
  }

  .info {
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
    margin-top: -5rem;
    margin-left: 10%;
    border-radius: 1rem 1rem 0 0;
    padding: 5rem 1rem 5rem 1rem;

  }
  .info-img {
    padding: 4rem 0 0 0;
    width: 10rem;
    height: 16rem;
  }
  .title {
    height: 2rem;
    margin: 2rem 0 1rem 0;
    border: 2px solid ;
    border-color: #000 #565656 #565656 #565656;
  }
  .logo {
    padding: 0.3rem 0.5rem;
    background-color: #565656;
  }
  .fa-2x {
    font-size: 1.3rem;
    color: #fff;
  }
  .font {
    margin: 0 auto;
    font: 1.2rem/2rem  bold;
    color: #5B5B5B;
  }
  .temp {
    font-size: 0.9rem;
    line-height: 1.3rem;
  }
  .temp .more {
    margin-bottom: 1rem;
  }
.items {
  display: flex;
  flex-direction: column;
}
.item {
  font: 0.9rem/1.2rem bold;
  color: #5B5B5B;
}
  .right-wrapper {
    width: 70%;
    padding-left: 5%;
  }

  .temp-items {
    color: #8799AD;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
    padding-top: 0.5rem;
  }
  .temp-item {
    padding-right: 2rem
  }


@media screen and (min-width: 320px) and (max-width: 420px){
  .box {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: #fafaff;
  }
  .template {
    margin: 0;
    background-color: #fff;
    padding: 0;
  }
  .header {
    width: 100%;
    height: 6.4rem;
    background-color: #595959;
    display: flex;
    flex-direction: row;
  }
  .social {
    width: 50%;
    margin-top: 3.5rem;
    display: block;
    color: #fff;
    padding-left: 1rem;
  }

.social p {
  font: 1rem/1.2rem normal;
}
  .white {
    color: #fff;
  }
  .size {
    font-size: 1rem;
  }
  .pd {
    padding-left: 1rem;
  }
  .pdb {
    padding-bottom: 3rem;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
  }
  .left-wrapper {
    width: 100%
  }

  .job {
    position: absolute;
    margin-top: 22rem;
    margin-left: 6rem;
    border-radius: 0 0 1rem 1rem;
    width: 10rem;
    height: 9rem;
    background-color: #4F81BC;
    z-index: 1;
  }
  .name {
    font: 2rem/3rem bold;
    color: #fff;
    text-align: center;
    padding: 3rem 0 0 0;
  }
  .job-intention {
    text-align: center;
  }

  .info {
    width: 100%;
    background-color: #F2F2F2;
    margin-top: 0;
    margin-left: 0;
    border-radius: 1rem 1rem 0 0;
    padding: 2rem 1rem 0 0;

  }

  .info-img {
    padding: 0 3rem 8rem 3rem;
    width: 22rem;
    height: 28rem;
  }
  .title {
    height: 2rem;
    margin: 2rem 0 1rem 0;
    border: 2px solid ;
    border-color: #000 #565656 #565656 #565656;
  }
  .logo {
    padding: 0.3rem 0.5rem;
    background-color: #5C5C5C
  }
  .fa-2x {
    font-size: 1.3rem;
  }
  .font {
    margin: 0 auto;
    font: 1.2rem/2rem  bold;
    color: #5B5B5B;
  }
  .temp {
    font-size: 0.9rem;
    line-height: 1.3rem;
  }
  .temp .more {
    margin-bottom: 1rem;
  }
  .items {
    display: flex;
    flex-direction: column;
  }
  .item {
    font: 1.2rem/1.5rem bold;
    color: #5B5B5B;
  }


  .right-wrapper {
    width: 100% ;
    padding-left: 0;
  }



  .temp-items {
    color: #8799AD;
    padding-right: 0.5rem;
    display: flex;
    flex-flow: column;
    padding-top: 0.5rem;
    padding-bottom: 1rem;
  }
  .temp-item {
    padding-left: 0.5rem;
    padding-right: 0;
    font: 1.1rem/1.5rem normal;
  }
  .temp-detail p {
    padding-left: 0.5rem;
    border-top: 1rem;
    font: 1.1rem/1.5rem normal;
  }
}
</style>
