<template>
  <div class="view">
    <img src="../assets/yun.png" alt="">
    <p class="logo-name">Yun Resumes</p>
    <p class="logo-summary">一个模板简历制作平台, 让你的简历更加出众 ~ </p>
    <div class="box">
      <ul class="styleul">
        <li @click="ToLink('Sample')">模板</li>
        <li><a href="https://github.com/PDKSophia/resumes" target="_blank">GitHub</a></li>
        <li @click="ToLink('openUse')">使用</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    methods : {
      ToLink (link) {
        let url = '/home'
        switch(link) {
          case 'Sample' :
            url = '/sample'
            break;
          case 'openUse' : 
            url = '/form_major'
            break;
        }
        this.$router.push({
          path : url
        })
      }
    }
}
</script>

<style>
.view {
  padding-top: 8%;
  text-align: center;
  height: 100%;
  width: 100%;
  background: #15275e;
  position: absolute;
}
.view img{
  height: 8rem;
  width: 8rem;
  animation : swing 2s;
}
.view p.logo-name {
  font-size : 1.68rem;
  color: white;
  margin-top: 1rem;
}
.view p.logo-summary {
  font-size : 1.1rem;
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
  font-size: 1.1rem;
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
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
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
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@media screen and (min-width: 320px) and (max-width: 420px){
  .view {
    padding-top: 18%;
  }
  .view img{
    height: 6.8rem;
    width: 6.8rem;
  }
  .view p.logo-name {
    font-size : 1.3rem;
  }
  .view p.logo-summary {
    font-size : .88rem;
    color: white;
  }
  .box {
    margin: 3rem;
  }
  li {
    font-size: 1rem;
  }
}
</style>
