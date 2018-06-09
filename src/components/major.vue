<template>
    <div class="major-view">
        <img src="../assets/yun.png" alt="">
        <p class="logo-name">快速了解</p>
        <div class="form">
            <Select class="select-form" placeholder="湖南科技大学" disabled id="school">
                <Option v-for="item in SchoolList" :value="item.value" :key="item.value" class="option-form">{{ item.label }}</Option>
            </Select> 
            <span>-</span> 
            <Select class="select-form" placeholder="计算机学院" disabled id="academy">
                <Option v-for="item in AcademyList" :value="item.value" :key="item.value" class="option-form">{{ item.label }}</Option>
            </Select> 
            <span>-</span> 
            <Select class="select-form" id="major">
                <Option v-for="item in MajorList" :value="item.value" :key="item.value" class="option-form">{{ item.label }}</Option>
            </Select> 
            <span>-</span> 
            <Select class="select-form" id="job">
                <Option v-for="item in JobList" :value="item.value" :key="item.value" class="option-form">{{ item.label }}</Option>
            </Select> 
        </div>
        <div class="form-button">
            <Button type="ghost" style="color: white" long @click="ContinueUse">SUBMIT</Button>
        </div>
        <div class="tips">
            <p class="tips-content">Tips : 一定要选择专业与工作范畴哦 ~ </p>
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
            JobList : ''
        }
    },
    methods : {
        ContinueUse () {
            // this.$router.push({
            //     path : '/home'
            // })
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
    font-size: .67rem;
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
        margin: 0rem 25%;
    }
    p.tips-content {
        color: white;
        font-size: .6rem;
        margin-top: 1rem;
    }
}
</style>
