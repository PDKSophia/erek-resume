<template>
    <div>
        <i-menu :theme="theme" width="300" :accordion=false @on-select="handleSelect" active-name="user/list" :open-names="['1']">
            <Submenu name="1">
                <template slot="title">
                    <Icon type="person"  size="16"></Icon>
                        User Analysis ( 用户分析 )
                </template>
                <MenuItem name="user/list">User List ( 用户列表 )</MenuItem>
                <MenuItem name="user/access">User Access ( 用户量 )</MenuItem>
            </Submenu>

            <Submenu name="2">
                <template slot="title">
                    <Icon type="pie-graph" size="16"></Icon>
                        Template Analysis ( 模板分析 )
                </template>
                <MenuItem name="template/access">Template Use Access ( 模板使用量 )</MenuItem>
            </Submenu>

            <Submenu name="3">
                <template slot="title">
                    <Icon type="images"  size="16"></Icon>
                        Enclosure ( 附件 )
                </template>
                <MenuItem name="enclosure/developer">Developer ( 开发人员 ) </MenuItem>
                <MenuItem name="enclosure/uploadfile">Upload File ( 文件上传 ) </MenuItem>
            </Submenu>

            <Submenu name="4">
                <template slot="title">
                    <Icon type="ios-gear" size="16"></Icon>
                        Setting ( 设置 )
                </template>
                <MenuItem name="setting/theme">Setting Theme ( 主题 ) </MenuItem>
                <MenuItem name="setting/webinfo">Manage Infomation ( 网站信息 ) </MenuItem>
                <MenuItem name="setting/otherlink">Other Link ( 友情链接 ) </MenuItem>
            </Submenu>
        </i-menu>
    </div>
    
</template>
<script>
import { mapState } from 'vuex'

export default {
    data () {
        return {
        }
    },
    computed : mapState({
        theme : state => state.global.theme,               // 当前主题
    }),
    methods : {
        handleSelect (name) {
        this.$router.push({path : '/manage/home/' + name})
        }
    },
    mounted() {
        console.log(this.theme)
    },
}
</script>

<style>

</style>
