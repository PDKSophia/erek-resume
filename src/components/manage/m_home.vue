<template>
    <div>
        <top-nav></top-nav>
        <div class="container-manage">
            <div class="manage-left">
                <h-left></h-left>
            </div>
            <div class="manage-right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import TopNav from '../base/topnav'
import HLeft from './home/m_home_left'

export default {
    components : {
        TopNav,
        HLeft,
    },
    data() {
        return {

        }
    },
    created() {
        // console.log(this.$route)
        let res = this.$tool.parseSearch(this.$route.query)
        switch(res.code)
        {
            case 200 : 
                break;
            default :
                this.$Message.error(`${res.message}`)
                setTimeout(()=>{
                    this.$router.push({
                        path : res.link
                    })
                }, 1500)
                break;
        }
    }
}
</script>

<style scoped>
.container-manage {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
}
.container-manage .manage-left {
    width: 18%;
    margin-right:1%;
}
.container-manage .manage-right {
    width: 80%;
}
</style>
