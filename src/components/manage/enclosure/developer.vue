<template>
    <div class="developer">
        <Tabs type="card"> 
            <TabPane label="Total Developer">
                <Row style="margin-top: .3rem">
                    <i-col v-for="(dev, index) in CardDeveloper" :key="index" span="5">
                        <Card style="width:96%">
                            <div style="text-align:center">
                                <img :src="dev.Avatar" class="dev-image">
                                <h2>{{ dev.Name }}</h2>
                            </div>
                            <div class="dev-information">
                                <p>Job : {{ dev.Job }}</p>
                                <p style="margin-bottom:1rem">Skill : {{ dev.Skill }}</p>
                                <Button type="success" @click="EditCardDev(index)">Edit</Button>
                                <Button type="error" @click="DeleteCardDev(index)">Del</Button>
                            </div>
                        </Card>
                    </i-col>
                </Row>
            </TabPane>
            <TabPane label="New Developer">
                <new-developer></new-developer>
            </TabPane>
        </Tabs>
        <Modal
            v-model="ShowUpdateDialog"
            :title="DialogTitle"
            @on-ok="ok"
            okText='OK'
            cancelText='Cancle'
            @on-cancel="ShowUpdateDialog = false">
            <p>
                <span style="margin-right: 10px">Name:</span> <Input v-model="CardDeveloper[SelectDevIndex].Name" style="width: 300px"/>
            </p>
            <br>
            <p>
                <span style="margin-right: 23px">Job:</span> <Input v-model="CardDeveloper[SelectDevIndex].Job" style="width: 300px" />
            </p>
            <br>
            <p>
                <span style="margin-right: 19px">Skill:</span> <Input v-model="CardDeveloper[SelectDevIndex].Skill" style="width: 300px" />
            </p>

        </Modal>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import NewDeveloper from '../bin/new_developer'

export default {
    components : {
        NewDeveloper
    },
    data () {
        return {
            CURRENT_FACTION : '',           // 当前执行的操作
            ShowUpdateDialog : false,
            DialogTitle : '',               // 弹窗标题
            SelectDevIndex : 0,             // 当前选中的下标
        }
    },
    computed : mapState({
        CardDeveloper : state => state.global.CardDeveloper
    }),
    methods : {
        ...mapActions([
            'DeleteOneDeveloper'
        ]),
        EditCardDev (index) {
            this.CURRENT_FACTION = 'update'
            this.DialogTitle = `You are revising ${this.CardDeveloper[index].Name}`
            this.SelectDevIndex = index
            this.ShowUpdateDialog = true
        },
        DeleteCardDev (index) {
            this.$Modal.confirm({
                title: `You will delete : ${this.CardDeveloper[index].Name}`,
                content: `Are you sure you want to delete ${this.CardDeveloper[index].Name} ?`,
                okText : 'OK',
                cancelText : 'cancel',
                loading: true,
                onOk: () => {
                    setTimeout(() => {
                        this.$Modal.remove();
                        this.DeleteOneDeveloper(index)
                        this.$Message.info('delete successful !');
                    }, 1000);
                }
            });
        },
        ok () {
            this.$Message.info('success')
        },
    }
}
</script>

<style scoped>
.developer{
    margin: .8rem 1.4rem;
}
img.dev-image{
    width: 13rem;
    height: 15rem;
}
.dev-information{
    /* padding: 1rem 2rem; */
    text-align: center;
    padding-top: .6rem;
    font-size: 1rem;
}
</style>
