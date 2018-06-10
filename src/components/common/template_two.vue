<template>
  <div class="template">
    <div class="left"></div>
    <div class="right">
      <div class="information-wrapper">
        <div class="pic">
          <img src="../../assets/咸鱼.jpg">
        </div>
        <div class="information-inner">
          <div>
            <i class="item name">陈思涵</i>
            <i class="item intention">求职意向：市场营销相关岗位</i>
          </div>
          <div class="column">
            <ul class="fa-ul info">
              <li><i class="fa-li fa fa-clock-o"></i>年龄：21岁</li>
              <li><i class="fa-li fa fa-id-card-o"></i>学历：大学本科</li>
              <li><i class="fa-li fa fa-home"></i>现居：福建厦门</li>
            </ul>
            <ul class="fa-ul info column-r">
              <li><i class="fa-li fa fa-leaf"></i>政治面貌：共青团员</li>
              <li><i class="fa-li fa fa-phone"></i>电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话：17070707070</li>
              <li><i class="fa-li fa fa-envelope-open"></i>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：1868660@qq.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="title-wrapper">
        <div class="title"><i class="fa fa-graduation-cap"></i>教育背景</div>
      </div>
      <div class="inner">
        <div class="time">
          <i>2014.09-2018.06</i>
          <i>闽南师范大学</i>
          <i>市场营销专业（本科）</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '模板2'
    }
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

.template {
  height: 100%;
  margin: 0 22%;
  display: flex;
  flex-wrap: wrap;
  border: 0.05rem solid  #8d8d90;
}
.left {
  max-width: 2rem;
  min-width: 1.8rem;
  background-color: #47475a;
}

.right {
  width: 95%;
  border-left: 0.2rem solid #47475a;
  margin-left: 0.5rem;
  padding: 1.4rem 3.4rem;
}

/* 个人基本信息 */
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
}
.info i {
  color: #47475a;
}
.column-r {
  margin-left: 7rem;
}
/* 标题 */
.title-wrapper {
  width: 100%;
  background-color: #d4d3dc;
  margin: 0.5rem 0;
}
.title {
  width: 17%;
  background-color: #47475a;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 700;
}
.title i {
  margin-left: 0.5rem;
}
</style>
