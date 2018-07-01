<template>
    <div class="web-info">
        <div class="contribution">
            <div class="cont-title">
                <p>System Notice</p>
            </div>
            <div class="cont-content">
                <p><Icon type="happy-outline" size="18" style="margin-right: .8rem"></Icon>Yun Resume Background management has been completed !!!</p>
            </div>
        </div>
        <div class="contribution">
            <div class="cont-title">
                <p>System Detail</p>
            </div>
            <div class="cont-content">
                <p>Operating System : Windows 10</p>
                <p>Operating Environment : Nginx / Apache</p>
                <p>Yun Resume CMS Editon : v1.0</p>
                <p>PHP Edition : 7.0</p>
                <p>Main Language : Vue.js / ThinkPHP5.1 </p>                
            </div>
        </div>
        <div class="contribution">
            <div class="cont-title">
                <p>System Developer</p>
            </div>
            <div class="cont-content">
                <p>UI Designer : PengDaoKuan</p>
                <p>Manage Web Engineer : PengDaoKuan</p>
                <p>Manage PHP Engineer : PengDaoKuan</p>
                <p>Yun Resume Web Engineer : PengDaoKuan / LinYouYu</p>
            </div>
        </div>
        <div class="contribution">
            <div class="cont-title">
                <p>Communication Way</p>
            </div>
            <div class="cont-content">
                <p>Network : <a href="https://github.com/PDKSophia/resumes" target="_brack">https://github.com/PDKSophia/resumes</a></p>
                <p>Yun Demo Address : <a href="http://zhaike.pengdaokuan.cn/YunResume" target="_brack">http://zhaike.pengdaokuan.cn/YunResume</a> </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    }
}
</script>

<style scoped>
.web-info {
    margin: .8rem 1.4rem;
}
.contribution{
    border-color: #ecf0f1;
    margin-top: 10px;
    border: 1px solid #ecf0f1;
    margin-bottom: 20px;
}
.contribution .cont-title{
    padding: 1rem;
    color: #555;
    font-size: .88rem;
    background-color: #f3f4f7;
    /* background-color: #ecf0f1; */
    border-color: #ecf0f1;
}
.contribution .cont-content{
    padding: .8rem 1.4rem;
    color: #2C3E50;
    border-color: #ecf0f1;
    font-size: .82rem;
    line-height: 1.78rem;
}
</style>
