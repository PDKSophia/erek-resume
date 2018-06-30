<template>
  <div class="box">
    <div id="pdfDom" class="template" v-if="SessionTaskFinish">
      <div class="left-wrapper">
        <div class="pic">
          <img :src="Auth.Avatar">
        </div>
        <div class="name-wrapper">
          <p class="name">{{ Auth.UserName }}</p>
          <p>求职意向：{{ Auth.Job }}</p>
        </div>
        <div class="left-title">基本信息</div>
        <ul class="fa-ul info">
          <li><i class="fa-li fa fa-universal-access"></i>学校：{{ Auth.School }}</li>
          <li><i class="fa-li fa fa-universal-access"></i>专业：{{ Auth.Major }}</li>
          <li><i class="fa-li fa fa-clock-o"></i>学年：{{ Auth.EnrolmentTime }} / {{ Auth.GraduationTime }}</li>
          <li><i class="fa-li fa fa-map-marker"></i>籍贯：{{ Auth.Area }}</li>
        </ul>
        <div class="left-title">联系方式</div>
        <ul class="fa-ul info">
          <li><i class="fa-li fa fa-phone"></i>手机：{{ Auth.Phone }}</li>
          <li><i class="fa-li fa fa-envelope-open"></i>邮箱：{{ Auth.Email }}</li>
        </ul>
        <div class="left-title">获奖证书</div>
        <ul class="fa-ul info" v-for="(item,index) in Auth.Certificate" :key="index">
          <li v-if="item.cer != ''"><i class="fa-li fa fa-send"></i>{{ item.cer }}</li>
        </ul>
      </div>
      <div class="right-wrapper">
        <div class="title-wrapper">
          <p class="title"><i class="fa fa-suitcase fa-2x"></i>&nbsp;&nbsp;&nbsp;项目经验&nbsp;/&nbsp;Experience</p>
        </div>
        <div>
          <div class="work-wrapper" v-for="(expr, index) in Auth.Experience" :key="index">
            <div class="work-name">
              <i>{{ expr.projectName }}</i>
              <i>{{ expr.StartTime }}&nbsp;/&nbsp;{{ expr.EndTime }}</i>
            </div>
            <p class="work">岗位：{{ expr.projectJob }}</p>
            <div class="inner">
              <p>1、{{ expr.projectSummary }}</p>
              <p v-if="expr.projectLink != ''">2、<a style="color: #8c8c8c" :href="expr.projectLink" target="brank">{{ expr.projectLink }}</a></p>
              <p>3、技术栈 : {{ expr.projectSkill }}</p>
              <div v-for="(item, key) in expr.solveAnswer" :key="key">
                <p>{{ key+3 }}、{{ item.solve }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="title-wrapper">
          <p class="title"><i class="fa fa-graduation-cap fa-2x"></i>&nbsp;&nbsp;&nbsp;教育背景&nbsp;/&nbsp;Education</p>
        </div>
        <div class="work-wrapper">
          <div class="school-name">
            <p>{{ Auth.EnrolmentTime }}&nbsp;/&nbsp;{{ Auth.GraduationTime }}</p>
            <p>{{ Auth.School }}&nbsp;/&nbsp;{{ Auth.Academy }}</p>
          </div>
          <p class="work">{{ Auth.Major }}&nbsp;/&nbsp;本科</p>
        </div>
        <div class="title-wrapper">
          <p class="title"><i class="fa fa-user-circle fa-2x"></i>&nbsp;&nbsp;&nbsp;自我评价&nbsp;/&nbsp;About Me</p>
        </div>
        <div class="inner">
           <p class="i" v-for="(Eva, index) in Auth.Evaluation" :key="index">
               {{ Eva.remark }}
          </p>
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
/* 初始化 */
* {
  margin: 0;
  padding: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
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

/* 左边 */
.left-wrapper {
  width: 33%;
  color: #fff;
  text-align: center;
  background-color: #778495;
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
  color: #778495;
  padding-bottom: 0.3rem;
  margin-bottom: 0.7rem;
  border-bottom: 0.1rem solid #9aa2ac;
}
.work-wrapper {
  font-size: 1rem;
  margin-bottom: 2rem;
}
.work-name  {
  color: #778495;
  display: flex;
  justify-content: space-between;
  margin: 0.2rem 0;
}
.school-name {
  color: #778495;
}
.work {
  margin: 0.2rem 0;
  font-weight: 700;
}
.inner p {
  font-size: 1rem;
  line-height: 1.7;
  color: #8c8c8c;
}

@media screen and (min-width: 320px) and (max-width: 420px) {
  /* 通用 */
  .template {
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
  }

  .btn-box {
    display: flex;
    justify-content: center;
  }

  .btn {
    width: 5rem;
    height: 3rem;
    border-radius: 2rem;
    margin: 0.5rem 0;
  }

  /* 左边 */
  .left-wrapper {
    width: 100%;
    color: #fff;
    text-align: center;
    background-color: #778495;
    padding-bottom: 3rem;
  }
  /* 头像 */
  .pic img {
    height: 13rem;
    width: 11rem;
    margin: 3.5rem auto;
    border: #fff solid 0.5rem;
    margin-bottom: 2rem;
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
    margin: 2rem 1.8rem 1rem 1.8rem;
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
    width: 100%;
    padding: 2rem;
  }
  /* 标题 */
  .title-wrapper {
    font-size: 1.2rem;
    color: #778495;
    padding-bottom: 0.3rem;
    margin-bottom: 0.7rem;
    border-bottom: 0.1rem solid #9aa2ac;
  }
  .work-wrapper {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  .work-name {
    color: #778495;
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
