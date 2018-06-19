<template>
  <div class="box">
    <div id="pdfDom" class="template" v-if="SessionTaskFinish">
      <div class="left-wrapper">
        <div class="pic-wrapper">
          <img class="pic" :src="Auth.Avatar" alt="">
        </div>
        <p class="box-1"></p>
        <div class="message-wrapper">
          <div class="name-box">
            <p class="name text">{{ Auth.UserName }}</p>
            <p class="intention text">求职意向 ：{{ Auth.Job }}</p>
          </div>
          <div class="message">
            <ul class="fa-ul info">
              <li><i class="fa-li fa fa-map-marker"></i>籍贯：{{ Auth.Area }}</li>
              <li><i class="fa-li fa fa-phone"></i>+86&nbsp;{{ Auth.Phone }}</li>
              <li><i class="fa-li fa fa-envelope-open"></i>{{ Auth.Email }}</li>
            </ul>
          </div>
          <div class="skill-wrapper">
            <p class="skill">求职意向&nbsp;&nbsp;&nbsp;&nbsp;Job</p>
            <ul class="skill-item fa-ul">
              <li><i class="fa-li fa fa-square"></i>职位 ：{{ Auth.Job }}</li>
            </ul>
            <ul class="skill-item fa-ul">
              <li><i class="fa-li fa fa-square"></i>城市 ：{{ Auth.JobAddress }}</li>
            </ul>
          </div>
          <div class="skill-wrapper">
            <p class="skill">荣誉证书&nbsp;&nbsp;&nbsp;&nbsp;Honor</p>
            <ul class="skill-item fa-ul" v-for="(cer,cerIndex) in Auth.Certificate" :key="cerIndex">
              <li v-if="cer.cer != ''"><i class="fa-li fa fa-square"></i>{{ cer.cer }}</li>
            </ul>
          </div>
          <p class="sum">PERSONAL&nbsp;RESUME</p>
        </div>
      </div>
      <div class="mid-wrappr">
        <div class="name-box1">
          <p class="name color">{{ Auth.UserName }}</p>
          <p class="intention color">求职意向 ：{{ Auth.Job }}</p>
        </div>
        <div class="introduce-warpper" >
          <p class="introduce" v-for="(sk,idx) in Auth.Skill" :key="idx" v-if="sk.ability != ''">{{ idx + 1 }}、{{ sk.ability }}</p>
        </div>
        <p class="title color">
          <i class="fa fa-bar-chart"></i>工作经验&nbsp;&nbsp;&nbsp;&nbsp;Experience
        </p>
        <div class="m-box" v-for="(work, workIndex) in Auth.WorkExper" :key="workIndex + '-label'">
          <div class="column color">
            <span class="item">{{ work.StartTime }}</span>
            <span class="item1">{{ work.workName }}</span>
          </div>
          <div class="column">
            <span class="item font">{{ work.workJob }}</span>
            <span class="item1">
              <p v-for="(item, tes) in work.contentItem" :key="tes">{{tes+1}}.{{ item.content }}</p>
            </span>
          </div>
        </div>
        
        <p class="title color">
          <i class="fa fa-graduation-cap"></i>教育背景&nbsp;&nbsp;&nbsp;&nbsp;Education
        </p>
        <p class="school">{{ Auth.School }}&nbsp;/&nbsp;{{ Auth.Major }}</p>
        <p class="school">{{ Auth.EnrolmentTime }}&nbsp;/&nbsp;{{ Auth.GraduationTime }}</p>
        
        <!-- 自我评价 -->
        <p class="title color">
          <i class="fa fa-graduation-cap"></i>自我评价&nbsp;&nbsp;&nbsp;&nbsp;Remark
        </p>
        <p v-for="(Eva, evaIndex) in Auth.Evaluation" :key="evaIndex" class="study" style="font-weight: 800;">{{ Eva.remark }}</p>
      </div>
      <div class="right-wrapper">
        <p class="pic-wrapper"></p>
        <p class="box-1"></p>
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
      modal1 : false,
    }
  },
   methods : {
        initAuth () {
            this.Auth = SessionAuth.initGetter()
            console.log(this.Auth)
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
  margin: 0 20%;
  display: flex;
  flex-wrap: wrap;
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

.name-box {
  display: none;
}
/* 左边 */
.left-wrapper {
  width: 30%;
  /* height: 100%; */
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
  border: 0.3rem solid #ffffff;
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
  margin: 1rem 1.4rem;
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
.introduce-warpper {
  margin: 2rem 0;
}
.introduce {
  font-size: 1rem;
  line-height: 2;
}
.title {
  font-size: 1.3rem;
  font-weight: 700;
  border-bottom: 0.1rem solid #e7e7e7;
  padding: 0 0 0.5rem 0;
  /* margin-bottom: 1rem; */
  margin: 1.5rem 0;
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
  flex: 3;
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
    padding: 1.5rem 5.5rem;
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
    padding: 3rem 4rem 1rem;
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
  .name-box {
    display: block;
    text-align: center;
    margin: 1rem 0;
  }
  .name-box1 {
    display: none;
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
  .introduce-warpper {
    margin: 2rem 0;
  }
  .introduce {
    font-size: 1rem;
    line-height: 2;
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
    flex: 3;
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
    padding: 1.5rem 7rem;
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
    padding: 2rem 5rem 1rem;
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
  .name-box {
    display: block;
    text-align: center;
    margin: 2rem 0;
  }
  .name-box1 {
    display: none;
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
  .introduce-warpper {
    margin: 2rem 0;
  }
  .introduce {
    font-size: 1rem;
    line-height: 2;
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
    padding: 2rem 5rem 1rem;
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
  .name-box {
    display: block;
    text-align: center;
    margin: 2rem 0;
  }
  .name-box1 {
    display: none;
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
  .introduce-warpper {
    margin: 2rem 0;
  }
  .introduce {
    font-size: 1.3rem;
    line-height: 2;
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
