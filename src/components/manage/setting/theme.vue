<template>
    <div class="theme">
        <Tabs type="card"> 
            <TabPane label="Themes">
                <RadioGroup v-model="cur_theme" @on-change="SetTheme">
                    <Radio label="light" size="large"></Radio>
                    <Radio label="dark" size="large"></Radio>
                </RadioGroup>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data () {
        return {
            cur_theme : ''
        }
    },
    computed : mapState({
        theme : state => state.global.theme,               // 当前主题
    }),
    watch : {
        theme(val, oldval){
            // console.log('旧的值是 ：' + oldval)
            // console.log('新的值是 ：' + val)
        }
    },
    methods : {
        ...mapActions([
            'SetManageTheme'
        ]),
        SetTheme() {
            this.SetManageTheme(this.cur_theme)
        }
    },
    mounted() {
        this.cur_theme = this.theme
    },
}
</script>

<style scoped>
.theme {
    margin: .8rem 1.4rem;
}
</style>
