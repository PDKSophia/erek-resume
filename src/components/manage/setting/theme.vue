<template>
    <div class="theme">
        <Tabs type="card"> 
            <TabPane label="Themes">
                <RadioGroup v-model="theme">
                    <Radio label="light" size="large"></Radio>
                    <Radio label="dark" size="large"></Radio>
                </RadioGroup>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
export default {
    data () {
        return {
            theme : 'light'
        }
    }
}
</script>

<style scoped>
.theme {
    margin: .8rem 1.4rem;
}
</style>
