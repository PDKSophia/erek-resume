<template>
    <div class="otherlink">
        <Tabs type="line">
            <TabPane label="Total Link">
                <Table border :columns="linkColumn" :data="totalLink" :no-data-text="TabelNoData"></Table>
            </TabPane>
            <TabPane label="Add New Link">
                <new-link></new-link>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import NewLink from '../bin/new_link'

export default {
    components : {
        NewLink
    },
    data() {
        return {
            TabelNoData : 'No Data',        // 表格数据为空显示的提示内容
            linkColumn : [
                {
                    title : 'ID',
                    key : 'id',
                    width : 120,
                    align: 'center',
                },
                {
                    title : 'L-Name',
                    key : 'l_name',
                    width : 230,
                    align: 'center',
                },
                {
                    title : 'L-Address',
                    key : 'l_address',
                },
                {
                    title : 'L-Author',
                    key : 'l_author',
                    width : 230,
                    align: 'center',
                },
                {
                    title : 'L-State',
                    key : 'l_state',
                    width : 230,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.index)
                                    }
                                }
                            }, 'View'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index)
                                    }
                                }
                            }, 'Delete')
                        ]);
                    }
                }
            ],
            
        }
    },
    computed : mapState({
        totalLink : state => state.global.totalLink,              
    }),
    methods : {
        ...mapActions([
            'DeleteOtherLink'
        ]),
        show(index) {
            this.$Modal.info({
                title : `${this.totalLink[index].l_name}`,
                content : `<p>Address : ${this.totalLink[index].l_address}</p>
                           <p>&nbsp;</p>
                           <p>Author : ${this.totalLink[index].l_author}</p>
                          `
            })
        },
        remove (index) {
            this.$Modal.confirm({
                title: `You will delete : ${this.totalLink[index].l_name}`,
                content: `Are you sure you want to delete ${this.totalLink[index].l_name} ?`,
                okText : 'OK',
                cancelText : 'cancel',
                loading: true,
                onOk: () => {
                    setTimeout(() => {
                        this.$Modal.remove();
                        this.DeleteOtherLink(index)
                        this.$Message.info('delete successful !');
                    }, 1000);
                }
            });
        }
    },
    mounted() {
    },
}
</script>

<style scoped>
.otherlink {
    margin: 0.8rem 1.4rem;
}
</style>
