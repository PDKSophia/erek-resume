<template>
  <div class="box">
    <div id="pdfDom" class="template">
      <div class="left"></div>
      <div class="right">
        <div class="information-wrapper">
          <div class="pic">
            <img :src="Auth.Avatar">
          </div>
          <div class="information-inner">
            <div class="mobile-style">
              <i class="name">{{ Auth.UserName}}</i>
              <i class="intention">求职意向：{{ Auth.Job}}</i>
            </div>
            <div class="column">
              <ul class="fa-ul info">
                <li><i class="fa-li fa fa-clock-o"></i>年龄：21岁</li>
                <li><i class="fa-li fa fa-id-card-o"></i>学历：大学本科</li>
                <li><i class="fa-li fa fa-home"></i>籍贯：{{ Auth.Area }}</li>
              </ul>
              <ul class="fa-ul info column-r">
                <li><i class="fa-li fa fa-leaf"></i>专&nbsp;&nbsp;&nbsp;业：{{ Auth.Major }}</li>
                <li><i class="fa-li fa fa-phone"></i>电&nbsp;&nbsp;&nbsp;话：{{ Auth.Phone }}</li>
                <li><i class="fa-li fa fa-envelope-open"></i>邮&nbsp;&nbsp;&nbsp;箱：{{ Auth.Email }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="title-wrapper">
          <div class="title"><i class="fa fa-graduation-cap"></i>&nbsp;&nbsp;教育背景</div>
        </div>
        <div class="inner">
          <div class="time">
            <i>{{ Auth.EnrolmentTime }} / {{ Auth.GraduationTime }}</i>
            <i>{{ Auth.School }}</i>
            <i>{{ Auth.Major }}（本科）</i>
          </div>
          <div class="list">
            <!-- <p>主修课程:管理学、微观经济学、宏观经济学、管理信息系统、统计学、会计学、财务管理市场营销、经济法、
              消费者行为学、国际市场营销、市场调查等课程
            </p> -->
          </div>
        </div>
        <div class="title-wrapper">
          <div class="title"><i class="fa fa-suitcase"></i>&nbsp;&nbsp;项目经历</div>
        </div>
        <div class="inner" v-for="(expr, index) in Auth.Experience" :key="index">
          <div class="time">
            <i>{{ expr.StartTime }}&nbsp;/&nbsp;{{ expr.EndTime }}</i>
            <i>{{ expr.projectName }}</i>
            <i>{{ expr.projectJob }}</i>
          </div>
          <div class="list">
            <ul class="fa-ul">
              <li><i class="fa-li fa fa-star-o"></i>{{ expr.projectSummary }}</li>
              <li v-if="expr.projectLink != ''">
                  <i class="fa-li fa fa-star-o"></i><a style="color: #8c8c8c" :href="expr.projectLink" target="brank">{{ expr.projectLink }}</a>
              </li>
              <li><i class="fa-li fa fa-star-o"></i>{{ expr.projectSkill }}</li>
              <li v-for="(item, key) in expr.solveAnswer" :key="key">
                  <i class="fa-li fa fa-star-o"></i>{{ item.solve }}
              </li>
            </ul>
          </div>
        </div>
        <div class="title-wrapper">
          <div class="title"><i class="fa fa-gear"></i>&nbsp;&nbsp;技能证书</div>
        </div>
        <div class="inner">
          <div class="time">
            <i v-for="(cer, index) in Auth.Certificate" :key="index" v-if="cer.cer!=''">【{{ cer.cer }}】</i>
          </div>
          <div class="list">
            <ul class="fa-ul">
              <li><i class="fa-li fa fa-star-o"></i>擅长文案策划，文笔流畅,熟练操作常用办公软件和互联网处理日常工作,
              熟悉WORD、EXCEL、PPT、SPSS等办公软件,具备良好的综合工作能力;
              </li>
              <li><i class="fa-li fa fa-star-o"></i>熟悉掌握的运营策划技巧，具有平台推广和社群运营经验,具备较好的市场评估和调研能力,
              系统地学习过营销推广理论,并在实践中接触过商务和策划，能在日常工作中植入营销技巧;
              </li>
              <li><i class="fa-li fa fa-star-o"></i>了解消费者的心理需求和爱好,善于捕捉市场趋势,熟悉互联网和各类新媒体领域的发展趋势;</li>
            </ul>
          </div>
        </div>
        <div class="title-wrapper">
          <div class="title"><i class="fa fa-address-card"></i>&nbsp;&nbsp;自我评价</div>
        </div>
        <div class="inner">
          <div class="list">
            <ul class="fa-ul">
              <li v-for="(Eva, index) in Auth.Evaluation" :key="index" v-if="Eva.remark != ''">
                  <i class="fa-li fa fa-star-o"></i>{{ Eva.remark }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-box"><Button class="btn" type="primary" @click="getPDF()">导出PDF</Button></div>
    <Modal
      title="Yun Resume Title"
      v-model="modal"
      :mask-closable="false"
      @on-ok="getPdf()">
      <p>当前简历内容已超过一页，是否确认打印该简历？</p>
    </Modal>
    <Modal
      title="Yun Resume Title"
      v-model="modal1"
      :mask-closable="false">
      <p>移动端无法导出正常简历，请在电脑中导出！</p>
    </Modal>
  </div>
</template>

<script>
import SessionAuth from '../../task/session_parse.js'
import Browser from '../../task/browser.js'

export default {
  data () {
    return {
        SessionTaskFinish : false,
        Auth : {},
        htmlTitle : '简历',
        modal : false,
        modal1 : false
    }
  },
  methods : {
        initAuth () {
            this.Auth = SessionAuth.initGetter()
            // console.log(this.Auth)
            this.SessionTaskFinish = true
        },
        getPDF () {
          if (Browser.versions.mobile) {
            this.modal1 = true
          } else {
            var flag = this.getHeight()
            if (flag == 1) {
              this.modal = true
            } 
            if (flag == 0) {
              this.getPdf()
            }
          }
        }
  },
  created () {
      this.initAuth()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*,body {
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
i {
  font-style: normal;
}

.box {
  width: 100%;
  height: 100%;
  background-color: rgb(239, 238, 241);
}
.btn-box {
  display: flex;
  justify-content: center;
}
.btn {
  width: 10%;
  height: 3rem;
  border-radius: 2rem;
  margin: 1rem 0;
}

.template {
  height: 100%;
  margin: 0 22%;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
}
.left {
  max-width: 2rem;
  min-width: 1.8rem;
  background-color: #47475a;
}

.right {
  width: 95%;
  color: #8d8d90;
  border-left: 0.2rem solid #47475a;
  margin-left: 0.5rem;
  padding: 1.4rem 3.4rem;
}

/* 个人基本信息 */
.pic {
  margin: 0;
}
.pic img {
  height: 10.8rem;
  width: 8.7rem;
  border: 0.1rem solid #47475a;
}
.information-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.information-inner {
  color: #47475a;
  margin-left: 2.2rem;
  padding: 0.5rem 0;
}
.column {
  margin: 1rem 1.8rem;
  display: flex;
  justify-content: space-between;
}
.name {
  font-size: 2rem;
}
.intention {
  margin-left: 2.8rem;
  font-size: 1.3rem;
}
.info li {
  font-size: 1.1rem;
  color: #8d8d90;
  margin: 0.3rem 0;
  width: 100%;
}
.info i {
  color: #47475a;
}
.column-r {
  margin-left: 6rem;
}
/* 标题 */
.title-wrapper {
  width: 100%;
  background-color: #d4d3dc;
  margin: 0.5rem 0;
}
.title {
  width: 18.5%;
  background-color: #47475a;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 700;
}
.title i {
  margin-left: 0.5rem;
}
.time i {
  font-size: 1rem;
  margin-right: 4rem;
}
.list {
  margin: 0.5rem 0 2rem 0;
}
.list ,.list li{
  font-size: 1rem;
  line-height: 2;
}
.list li {
  margin-left: 1.5rem;
}
.list i {
  margin-top: -0.2rem;
}

/* 手机 */
@media screen and (min-width: 360px) and (max-width: 420px) {
  .template {
    height: 100%;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
  }
  .btn-box {
    display: flex;
    justify-content: center;
  }
  .btn {
    width: 5rem;
    height: 3rem;
    border-radius: 2rem;
    margin: .5rem 0;
  }
  .left {
    max-width: 0.6rem;
    min-width: 0.6rem;
    background-color: #47475a;
  }

  .right {
    width: 95%;
    color: #8d8d90;
    border-left: 0.2rem solid #47475a;
    margin-left: 0.2rem;
    padding: 1.4rem 0.2rem;
  }

  /* 个人基本信息 */
  .pic {
    margin: 0 auto;
  }
  .pic img {
    height: 14rem;
    width: 12rem;
    border: 0.1rem solid #47475a;
    margin: 2rem auto;
  }
  .information-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  .information-inner {
    color: #47475a;
    margin-left: 1rem;
    padding: 0.5rem 0;
    width: 100%;
  }
  .column {
    margin: 1rem 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: unset;
  }
  .inner {
    padding: 0.5rem;
  }
  .name {
    text-align: center;
    font-size: 2rem;
    display: block;
  }
  .intention {
    text-align: center;
    margin-left: 0;
    font-size: 1.3rem;
  }
  .info li {
    font-size: 1.2rem;
    color: #8d8d90;
    margin: 0.3rem 0;
    width: 100%;
  }
  .info i {
    color: #47475a;
  }
  .column-r {
    margin-left: 0;
  }
  /* 标题 */
  .title-wrapper {
    width: 100%;
    background-color: #d4d3dc;
    margin: 0.5rem 0;
  }
  .title {
    width: 38%;
    background-color: #47475a;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 700;
  }
  .title i {
    margin-left: 0.5rem;
  }
  .time i {
    font-size: 1.2rem;
    margin-right: 0;
    display: block;
  }
  .list {
    margin: 0.5rem 0 2rem 0;
  }
  .list ,.list li{
    font-size: 1.1rem;
    line-height: 2;
  }
  .list li {
    margin-left: 1.5rem;
  }
  .list i {
    margin-top: -0.2rem;
  }
  .mobile-style {
    text-align: center;
  }
}

@media screen and (min-width: 320px) and (max-width: 360px) {
  .template {
    height: 100%;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
  }
  .btn-box {
    display: flex;
    justify-content: center;
  }
  .btn {
    width: 5rem;
    height: 3rem;
    border-radius: 2rem;
    margin: .5rem 0;
  }
  .left {
    max-width: 0.6rem;
    min-width: 0.6rem;
    background-color: #47475a;
  }

  .right {
    width: 95%;
    color: #8d8d90;
    border-left: 0.2rem solid #47475a;
    margin-left: 0.2rem;
    padding: 1.4rem 0.2rem;
  }

  /* 个人基本信息 */
  .pic {
    margin: 0 auto;
  }
  .pic img {
    height: 14rem;
    width: 12rem;
    border: 0.1rem solid #47475a;
    margin: 2rem auto;
  }
  .information-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  .information-inner {
    color: #47475a;
    margin-left: 1rem;
    padding: 0.5rem 0;
    width: 100%;
  }
  .column {
    margin: 1rem 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: unset;
  }
  .inner {
    padding: 0.5rem;
  }
  .name {
    text-align: center;
    font-size: 2rem;
    display: block;
  }
  .intention {
    text-align: center;
    margin-left: 0;
    font-size: 1.3rem;
  }
  .info li {
    font-size: 1rem;
    color: #8d8d90;
    margin: 0.3rem 0;
    width: 100%;
  }
  .info i {
    color: #47475a;
  }
  .column-r {
    margin-left: 0;
  }
  /* 标题 */
  .title-wrapper {
    width: 100%;
    background-color: #d4d3dc;
    margin: 0.5rem 0;
  }
  .title {
    width: 38%;
    background-color: #47475a;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 700;
  }
  .title i {
    margin-left: 0.5rem;
  }
  .time i {
    font-size: 1rem;
    margin-right: 0;
    display: block;
  }
  .list {
    margin: 0.5rem 0 2rem 0;
  }
  .list ,.list li{
    font-size: 1rem;
    line-height: 2;
  }
  .list li {
    margin-left: 1.5rem;
  }
  .list i {
    margin-top: -0.2rem;
  }
  .mobile-style {
    text-align: center;
  }
}
</style>
