<template>
    <div class="bottom">
        <p>Powered By PengDaoKuan</p>
        <p>Copyright © 彭道宽</p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bottom{
    position: fixed;
    bottom: 0;
    height: 13%;
    width:100%;
}
.bottom{
    color: white;
    font-size: .88rem;
    line-height: 1.6rem;
}
@media screen and (min-width: 320px) and (max-width: 420px){
    .bottom{
        position: fixed;
        bottom: 0;
        height: 15%;
        width:100%;
    }
    .bottom{
        color: white;
        font-size: .8rem;
        line-height: 1.6rem;
    }
}
</style>
