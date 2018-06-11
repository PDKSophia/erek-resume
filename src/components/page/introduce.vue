<template>
  <div>
    <div class="sample-view">
        <img src="../../assets/yun.png" alt="">
        <p class="logo-name">了解一下</p>
        <p class="logo-summary">由 ` TickNet ` 工作室 成员开发此应用平台 ~</p>
        <div class="box">
            <ul class="styleul">
                <li @click="HiddenBox('index')">首页</li>
                <li @click="HiddenBox('new')">功能了解</li>
                <li @click="HiddenBox('hot')">团队了解</li>
            </ul>
        </div>
    </div>
    <div class="sample-cell">
        <p class="h-title">{{ DefaultTitle }}</p>
        <div class="fun-understand" v-if="ShowAbilityFlag">
            <Row class="code-row-bg">
                <i-col :xs="24" :sm="24" :md="12" :lg="12">
                    <p class="fun-title mobile">找不到好的简历模板 ? </p>
                    <div class="fun-content">
                        <p>你想做一份好一点的简历 ? 但是找不到好的模板 ?</p>
                        <p>找到了一份好的模板 ? 但是居然要会员、要破费 ?</p>
                        <p>. . .</p>
                        <p>. . .</p>
                        <p>最终找到了一份模板 , 但是不知道怎么写 ?</p>
                    </div>
                </i-col>
                <i-col :xs="24" :sm="24" :md="12" :lg="12" >
                    <p class="fun-title mobile">我们的优势 ? </p>
                    <div class="fun-content">
                        <p>HTML 还原 WPS 模板简历</p>
                        <p><span style="color:red">不</span>收费！<span style="color:red">不</span>收费！<span style="color:red">不</span>收费！</p>
                        <p>可以直接转成<span style="color:red"> pdf </span>文档 ！！！</p>
                        <p><span style="color:red">随意</span>挑选自己喜欢的模板！</p>
                        <p>为你整理多条<span style="color:red">金句</span>，无需自己组织语言！</p>
                        <p>. . .</p>
                    </div>
                </i-col>
            </Row>
        </div>
    </div>
    <div class="bottom">
        <Row>
            <i-col :xs="24" :sm="24" :md="24" :lg="24" >
                <div class="img-box">
                    <p>Template From : WPS </p>
                    <p>Web Designer : PDK</p>
                    <p>Web Engineer : PDK / LYY</p>
                    <p style="margin-top: 1rem">Copyright © Yun Resumes</p>
                </div>
            </i-col>
        </Row>
    </div>
  </div>
</template>

<script>

export default {
    data () {
        return {
            DefaultTitle : '功能了解',
            ShowAbilityFlag : true,         // 显示最新
            ShowTeamFlag : false,        // 显示热门
        }
    },
    methods : {
        HiddenBox (type) {
            switch(type) {
                case 'new' :
                    this.DefaultTitle    = '功能了解'
                    this.ShowAbilityFlag = true
                    this.ShowTeamFlag = false
                    break;
                case 'hot' :
                    this.DefaultTitle    = '团队了解'
                    this.ShowAbilityFlag = false
                    this.ShowTeamFlag = true
                    break;
                case 'index' :
                    this.$router.push({path : '/'})
            }
        },
        go: function(p) {
            this.$router.push({ path : '/example/exam_' + p })
        }  
    }
}
</script>

<style scoped>
.sample-view {
  padding-top: 8%;
  text-align: center;
  height: 100%;
  width: 100%;
  background: #15275e;
}
.sample-view img{
  height: 8rem;
  width: 8rem;
  animation : swing 2s;
}
.sample-view p.logo-name {
  font-size : 1.68rem;
  color: white;
  margin-top: 1rem;
}
.sample-view p.logo-summary {
  font-size : 1rem;
  color: white;
  margin-top: 5.2rem;
  animation: bounceIn 2s;
}
.box {
  margin: 3rem 38%;
}
ul, li {
  list-style: none;
}
ul.styleul {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  text-align: center;
}
li {
  width: 33.33%;       
  color: #0099fb;
  font-size: 1rem;
}
li:hover{
  color: white;
  cursor : pointer;
  animation : swing 1s;
}
/* 动画 */
@keyframes swing
{
  20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
}
 
@-webkit-keyframes swing /* Safari 与 Chrome */
{
    20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
}

@keyframes bounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  40% {
    -webkit-transform: scale3d(0.8, 0.8, 0.8);
    transform: scale3d(0.8, 0.8, 0.8);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  80% {
    -webkit-transform: scale3d(0.87, 0.87, 0.87);
    transform: scale3d(0.87, 0.87, 0.87);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@-webkit-keyframes bounceIn /* Safari 与 Chrome */
{
   from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  40% {
    -webkit-transform: scale3d(0.8, 0.8, 0.8);
    transform: scale3d(0.8, 0.8, 0.8);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  80% {
    -webkit-transform: scale3d(0.87, 0.87, 0.87);
    transform: scale3d(0.87, 0.87, 0.87);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
p.h-title{
    color:#15275e;
    font-size: 1.8rem;
    font-weight: 900;
    margin-bottom: 2rem;
    text-align: center;
}
/* 显示功能了解 / 团队了解 */
.sample-cell {
    padding: 3rem 15%;
}
.fun-understand {
    line-height: 2rem;
    padding-top: 1rem;
    padding: 1rem 3rem;
    width: 100%;
}
.fun-understand p.fun-title{
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-align: center;
}
.fun-understand .fun-content{
    font-size: 1rem;
    text-align: center;
}
/* 底部 */
.bottom{
    background-color: #15275e;
    color: white;
    font-size: .8rem;
    line-height: 1.6rem;
    text-align: center;
    padding-top: 2rem;
    padding-bottom: 1.5rem;
}

@media screen and (min-width: 320px) and (max-width: 360px){
    .sample-view {
        padding-top: 18%;
    }
    .sample-view img{
        height: 6.8rem;
        width: 6.8rem;
    }
    .sample-view p.logo-name {
        font-size : 1.3rem;
    }
    .sample-view p.logo-summary {
        font-size : .7rem;
        color: white;
    }
    .box {
        margin: 3rem;
    }
    li {
        font-size: .78rem;
    }
    /* 显示功能了解 / 团队了解 */
    p.h-title{
        margin-bottom: 0rem;
    }
    .sample-cell {
        padding: 3rem 1rem;
    }
    .fun-understand {
        line-height: 1.7rem;
        width: 100%;
    }
    .fun-understand p.fun-title{
        font-size: 1.1rem;
    }
    .fun-understand .fun-content{
        font-size: .8rem;
        text-align: center;
    }
    .mobile {
        margin-top: 2.5rem;
    }
}
@media screen and (min-width: 360px) and (max-width: 420px){
    .sample-view {
        padding-top: 18%;
    }
    .sample-view img{
        height: 6.8rem;
        width: 6.8rem;
    }
    .sample-view p.logo-name {
        font-size : 1.3rem;
    }
    .sample-view p.logo-summary {
        font-size : .88rem;
        color: white;
    }
    .box {
        margin: 3rem;
    }
    li {
        font-size: 1rem;
    }
    /* 显示案例模板 */
    .sample-cell {
        padding: 0rem;
        padding-top: 1rem;
    }
   
    .mobile-hidden {
        display: none;
    }
    /* 显示功能了解 / 团队了解 */
    p.h-title{
        margin-bottom: 0rem;
    }
    .sample-cell {
        padding: 3rem 1rem;
    }
    .fun-understand {
        line-height: 1.7rem;
        width: 100%;
    }
    .fun-understand p.fun-title{
        font-size: 1.1rem;
    }
    .fun-understand .fun-content{
        font-size: .84rem;
        text-align: center;
    }
    .mobile {
        margin-top: 2rem;
    }
}
</style>
