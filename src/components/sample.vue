<template>
  <div>
    <div class="sample-view">
        <img src="../assets/yun.png" alt="">
        <p class="logo-name">WPS - 模板</p>
        <p class="logo-summary">根据 WPS 简历模板,手写HTML 及 CSS 样式布局 ~ </p>
        <div class="box">
            <ul class="styleul">
                <li @click="HiddenBox('new')">最新</li>
                <li @click="HiddenBox('hot')">热门</li>
                <li>预览</li>
            </ul>
        </div>
    </div>
    <div class="sample-cell">
        <h1 style="color:#15275e;margin-bottom: 1rem">{{ DefaultTitle }}</h1>
        <Row v-if="ShowNewTemplate">
            <i-col v-for="(sam, index) in SampleNewList" :key="index" :xs="24" :sm="12" :md="8" :lg="8" class="cell">
                <div class="img-box">
                    <img :src="sam.avatar" alt="">
                    <p class="under-explain">{{ sam.text }}</p>
                </div>
            </i-col>
        </Row>

        <!-- 热门 -->
        <Row v-if="ShowHotTemplate">
            <i-col v-for="(sam, index) in SampleHotList" :key="index" :xs="24" :sm="12" :md="8" :lg="8" class="cell">
                <div class="img-box">
                    <img :src="sam.avatar" alt="">
                    <p class="under-explain">{{ sam.text }}</p>
                </div>
            </i-col>
        </Row>
    </div>
    <div class="bottom">
        <Row>
            <i-col :xs="24" :sm="12" :md="8" :lg="8" >
                <div class="img-box">
                    <p>Template From : WPS </p>
                    <p>Web Designer : 彭道宽</p>
                    <p>Web Engineer : 彭道宽</p>
                    <p>Web Engineer : 林囿余</p>
                    <p>Copyright © 彭道宽</p>
                </div>
            </i-col>
            <i-col :xs="24" :sm="12" :md="8" :lg="8" class="mobile-hidden">
                <div class="img-box">
                    <p>Related links</p>
                    <p>彭道宽 : <a href="https://github.com/PDKSophia" target="_blank">Github</a></p>
                    <p>林囿余 : <a href="https://github.com/PDKSophia" target="_blank">Github</a></p>
                    <p style="margin-top: 1rem">Copyright © Yun Resumes</p>
                </div>
            </i-col>
            <!-- <i-col :xs="24" :sm="12" :md="8" :lg="8" class="mobile-hidden">
                <div class="img-box">
                    <p>Template From : WPS </p>
                    <p>Web Designer : 彭道宽</p>
                    <p>Web Engineer : 彭道宽</p>
                    <p>Web Engineer : 林囿余</p>
                    <p>Copyright © 彭道宽</p>
                </div>
            </i-col> -->
        </Row>
    </div>
  </div>
</template>

<script>
import OpenUser from './base/openUser'

export default {
    components : {
      OpenUser
    },
    data () {
        return {
            DefaultTitle : '最新',
            ShowNewTemplate : true,         // 显示最新
            ShowHotTemplate : false,        // 显示热门
            SampleNewList : [
                {
                    avatar : require('../../image/模板1.jpg'),
                    text : 'Sample Template 1'
                },
                {
                    avatar : require('../../image/模板2.jpg'),
                    text : 'Sample Template 2'
                },
                {
                    avatar : require('../../image/模板3.jpg'),
                    text : 'Sample Template 3'
                },
                {
                    avatar : require('../../image/模板4.jpg'),
                    text : 'Sample Template 4'
                },
                {
                    avatar : require('../../image/模板5.jpg'),
                    text : 'Sample Template 5'
                },
                {
                    avatar : require('../../image/模板6.jpg'),
                    text : 'Sample Template 6'
                }
            ],
            SampleHotList : [
                {
                    avatar : require('../../image/模板4.jpg'),
                    text : 'Sample Template 4'
                },
                {
                    avatar : require('../../image/模板5.jpg'),
                    text : 'Sample Template 5'
                },
                {
                    avatar : require('../../image/模板6.jpg'),
                    text : 'Sample Template 6'
                },
                {
                    avatar : require('../../image/模板7.jpg'),
                    text : 'Sample Template 7'
                },
                {
                    avatar : require('../../image/模板8.jpg'),
                    text : 'Sample Template 8'
                },
                {
                    avatar : require('../../image/模板9.jpg'),
                    text : 'Sample Template 9'
                }
            ]
        }
    },
    methods : {
        HiddenBox (type) {
            switch(type) {
                case 'new' :
                    this.DefaultTitle    = '最新'
                    this.ShowNewTemplate = true
                    this.ShowHotTemplate = false
                    break;
                case 'hot' :
                    this.DefaultTitle    = '热门'
                    this.ShowNewTemplate = false
                    this.ShowHotTemplate = true
                    break;
            }
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
/* 显示案例模板 */
.sample-cell {
    padding: 3rem 10%;
    text-align: center;
}
.cell {
    padding: 1rem 2rem;
    text-align: center;
}
.cell .img-box {
    border: 2px solid #cfcfcf;
    padding: 1.5rem;
    border-radius: 10px;
}
.cell img{
    width: 100%;
    height: 23rem;
}
.img-box p.under-explain{
    font-size: .78rem;
    margin-top: .66rem;
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
    /* 显示案例模板 */
    .sample-cell {
        padding: 0rem;
        text-align: center;
    }
    .cell {
        padding:1rem;
        text-align: center;
    }
    .cell .img-box {
        border: 2px solid #cfcfcf;
        padding: 1.5rem;
        border-radius: 5px;
    }
    .cell img{
        width: 100%;
        height: 20rem;
    }
    .img-box p.under-explain{
        font-size: .78rem;
        margin-top: .66rem;
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
    .cell {
        padding:1rem;
        text-align: center;
    }
    .cell .img-box {
        border: 2px solid #cfcfcf;
        padding: 1.5rem;
        border-radius: 5px;
    }
    .cell img{
        width: 100%;
        height: 25rem;
    }
    .img-box p.under-explain{
        font-size: .88rem;
        margin-top: .66rem;
    }
    .mobile-hidden {
        display: none;
    }
}
</style>
