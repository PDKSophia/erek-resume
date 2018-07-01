<template>
    <div class="header">
        <img src="../../assets/yun.png" class="logo-image" alt="">
        <p class="t_left title">
            Yum Resume Management</p>
        <p class="t_right title"></p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    height: 6.6rem;
    background-color: #15275e;
}
.header img.logo-image {
    float: left;
    width: 4.2rem;
    height: 4.2rem;
    margin: 1.28rem 0rem 0rem 3rem;
}
.header p.title{
    color: white;
    padding: 2.36rem 0rem 0rem 1rem;
    font-size: 1.42rem;
}
p.t_left {
    float: left;
}
p.t_right {
    float: right;
}
</style>
