<template>
    <div class="major-view">
        <img src="../assets/yun.png" alt="">
        <p class="logo-name">快速了解</p>
        <div class="form">
            <input type="text" v-model="BasicUserInfo.School" placeholder="学校">
            <input type="text" v-model="BasicUserInfo.Academy" placeholder="学院">
            <input type="text" v-model="BasicUserInfo.Major" placeholder="专业">
            <input type="text" v-model="BasicUserInfo.Job" placeholder="应聘职位">
        </div>
        <!-- 多级联动 -->
        <!-- <Cascader :data="AcademyMajorList" trigger="hover"></Cascader>  -->
        <div class="form-button">
            <p class="arrow-pre" @click="ToIndex"><i class="fa fa-angle-left pc"></i><span class="pc_span">回到首页</span></p>
            <p class="arrow-next" @click="ContinueUse"><span class="pc_span">选择模板</span><i class="fa fa-angle-right pc"></i></p>
            <Button type="ghost" class="mobile" style="color: white" long @click="ContinueUse">SUBMIT</Button>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed : mapState({
        UserBasicInfo : state => state.user.UserBasicInfo
    }),
    data () {
        return {
            BasicUserInfo : {}
        }
    },
    methods : {
        ...mapActions([
            'SetBasicUserInfo'
        ]),
        ToIndex () {
            this.$router.push({
                path : '/'
            })
        },
        ContinueUse () {
            this.$Message.success('开启专属你的旅行~')
            this.SetBasicUserInfo(this.BasicUserInfo)
            setTimeout(()=> {
                this.$router.push({
                    path : '/user_form_skill'
                })
            }, 1500)
        },
    },
    mounted() {
        if(sessionStorage.getItem('Auth') == '' || sessionStorage.getItem('Auth') == undefined) {
            this.BasicUserInfo = this.UserBasicInfo
        } else {
            this.BasicUserInfo = JSON.parse(sessionStorage.getItem('Auth'))
        }
    },
}
</script>

<style scoped>
.major-view {
  padding-top: 8%;
  text-align: center;
  height: 100%;
  width: 100%;
  background: #15275e;
  position: absolute;
}
.major-view img{
  height: 8rem;
  width: 8rem;
  animation : swing 2s;
}
.major-view p.logo-name {
  font-size : 1.18rem;
  color: white;
  margin-top: .5rem;
}
/* 复选框 */
.form{
    margin: 3rem 13%;
}
.select-form {
    margin-right: 1rem;
    margin-left: 1rem;
    width: 11rem;
}
#Academy {
    width: 12.2rem;
}
.option-form{
    width: 11rem;
}
span{
    color: white;
}
.form-button{
    margin: 3rem 25%;
    margin-bottom: 1.5rem;
}
p.tips-content {
    color: white;
    font-size: .77rem;
    margin-top: 2rem;
}
/* 上下箭头 */
/* PC显示箭头，手机显示按钮 */
.mobile {
    display: none;
}
.pc{
    margin-top: 4rem;
}
span.pc_span{
    margin: 0 .58rem;
    font-size: .65rem;
}
p.arrow-pre {
    cursor: pointer;
    font-size: 1rem;
    color: white;
    float: left;
}
p.arrow-next {
    cursor: pointer;
    font-size: 1rem;
    color: white;
    float: right; 
}
/* iphone 5 - iphone X - 平板Ipad*/
@media screen and (min-width: 320px) and (max-width: 768px){
    .major-view {
        padding-top: 8%;
    }
    .major-view img{
        height: 8rem;
        width: 8rem;
        animation : swing 2s;
    }
    .major-view p.logo-name {
        font-size : 1.18rem;
        color: white;
        margin-top: .5rem;
    }
    /* 复选框 */
    .form{
        margin: 1.4rem; 
    }
    #Academy {
        width: 15rem
    }
    .select-form {
        margin: 1rem;
        width: 15rem;
    }
    .option-form{
        width: 15rem;
    }
    span{
        color: white;
        display: none;
    }
    .form-button{
        margin: 0rem 20%;
    }
    p.tips-content {
        color: white;
        font-size: .7rem;
        margin-top: 1rem;
    }
    .pc {
        display: none;
    }
    .mobile{
        display: block;
        margin-top: 1rem;
    }
}
</style>
