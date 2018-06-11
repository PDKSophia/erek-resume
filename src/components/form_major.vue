<template>
    <div class="major-view">
        <img src="../assets/yun.png" alt="">
        <p class="logo-name">快速了解</p>
        <div class="form">
            <Select class="select-form"  v-model="UserSelect.School">
                <Option v-for="item in SchoolList" :value="item.value" :key="item.value" class="option-form">{{ item.label }}</Option>
            </Select> 
            <span>-</span> 
            <Select class="select-form" v-model="UserSelect.Academy">
                <Option v-for="item in AcademyList" :value="item.value" :key="item.value" class="option-form">{{ item.label }}</Option>
            </Select> 
            <span>-</span> 
            <Select class="select-form" v-model="UserSelect.Major">
                <Option v-for="item in MajorList" :value="item.value" :key="item.value" class="option-form">{{ item.label }}</Option>
            </Select> 
            <span>-</span> 
            <Select class="select-form"  v-model="UserSelect.Job">
                <Option v-for="item in JobList" :value="item.value" :key="item.value" class="option-form">{{ item.label }}</Option>
            </Select> 
        </div>
        <div class="tips">
            <!-- <p class="tips-content">Tips : 一定要选择专业与工作范畴哦 ~ </p> -->
        </div>
        <div class="form-button">
            <p class="arrow-pre" @click="ToIndex"><i class="fa fa-angle-left pc"></i><span class="pc_span">回到首页</span></p>
            <p class="arrow-next" @click="ContinueUse"><span class="pc_span">选择模板</span><i class="fa fa-angle-right pc"></i></p>
            <Button type="ghost" class="mobile" style="color: white" long @click="ContinueUse">SUBMIT</Button>
        </div>
    </div>
</template>

<script>
import store from '../store'

export default {
    store,
    data () {
        return {
            SchoolList : '',
            AcademyList : '',
            MajorList : '',
            JobList : '',

            UserSelect : {
                School : '湖南科技大学',
                Academy : '计算机学院',
                Major : '软件工程',
                Job : '前端工程师'
            },
        }
    },
    methods : {
        ToIndex () {
            this.$router.push({
                path : '/'
            })
        },
        ContinueUse () {
            this.$Message.success('开启专属你的旅行~')
            this.$store.commit('ADD_USER_SELECT', this.UserSelect)
            console.log(sessionStorage.getItem('Auth'))
            console.log(this.$store.state.Auth)
            setTimeout(()=> {
                this.$router.push({
                    path : '/user_form_skill'
                })
            }, 1500)
        },
    },
    created () {
        this.SchoolList  = this.$store.state.SchoolList
        this.AcademyList = this.$store.state.AcademyList
        this.MajorList   = this.$store.state.MajorList
        this.JobList     = this.$store.state.JobList
    }
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
    margin: 3rem 20%;
}
.select-form {
    margin-right: 1rem;
    margin-left: 1rem;
    width: 10rem;
}
.option-form{
    width: 10rem;
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
    .select-form {
        margin: 1rem;
        width: 13rem;
    }
    .option-form{
        width: 13rem;
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
