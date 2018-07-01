<template>
  <div class="view">
    <img src="../../assets/yun.png" alt="">
    <p class="logo-summary">Background Management</p>
    <div class="box">
        <div class="manageform">
            <input type="text" class="form-ipt" v-model="manage_name" placeholder="UserName ...">
            <input type="password" class="form-ipt" v-model="manage_pwd" placeholder="PassWord ...">
            <button type="button" class="login_in" @click.stop="login_in">Login</button>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    components : {
    },
    data() {
        return {
            manage_name : 'admin',
            manage_pwd : 'admin'
        }
    },
    methods : {
        login_in : function() {
          let encryptPwd = this.$tool.encryptByDES(this.manage_pwd)
          this.$router.push({
            path : '/manage/home',
            query : {
              username : this.manage_name,
              pwd : encryptPwd
            }
          })
        }
    }
}
</script>

<style scoped>
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
  font-size : 1.68rem;
  color: white;
  margin-top: 3.2rem;
}
.box {
  margin: 3rem 40%;
}
/* 登陆表单 */
div.manageform {
    padding: .5rem;
}
input[type="text"], input[type="password"] {
    height: 2.2rem;
    padding: .2rem .6rem;
    width: 100%;
    margin: 0rem .5rem 1.5rem;
    border: none;
    border-radius: 3px;
    background-color: #fffdfd;
}
button.login_in{
    width: 100%;
    margin: 0rem .5rem;
    height: 2.2rem;
    border: none;
    border-radius: 3px;
    background-color:#4fc4fa;
    color: rgb(243, 239, 239);
    font-size: .88rem;
}

@media screen and (min-width: 320px) and (max-width: 360px){
  .view {
    padding-top: 18%;
  }
  .view img{
    height: 6.8rem;
    width: 6.8rem;
  }
  .view p.logo-summary {
    font-size : 1.1rem;
    color: white;
  }
  .box {
    margin: 2rem 3.2rem;
  }
}
@media screen and (min-width: 375px) and (max-width: 420px){
  .view {
    padding-top: 18%;
  }
  .view img{
    height: 6.8rem;
    width: 6.8rem;
  }
  .view p.logo-summary {
    font-size : 1.1rem;
    color: white;
  }
  .box {
    margin: 2.5rem 3.8rem;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px){
    .box {
    margin: 3rem 30%;
    }
}
</style>
