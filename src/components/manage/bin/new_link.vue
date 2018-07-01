<template>
    <div class="new-link">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem label="L-Name" prop="name" :label-width="100">
                <Input v-model="formValidate.name" placeholder="Enter new L-Name" />
            </FormItem>
            <FormItem label="L-Address" prop="address" :label-width="100">
                <Input v-model="formValidate.address" placeholder="Enter new L-Address" />
            </FormItem>
            <FormItem label="L-Author" prop="author" :label-width="100">
                <Input v-model="formValidate.author" placeholder="Enter new L-Author" />
            </FormItem>
            <FormItem style="margin: 3rem 20px;">
                <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
                <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
    export default {
        data () {
            return {
                formValidate: {
                    name: '',
                    address : 'www.pengdaokuan.cn',
                    author : '',
                },
                ruleValidate: {
                    name: [
                        { required: true, message: 'The L-name cannot be empty', trigger: 'blur' }
                    ],
                    address: [
                        { required: true, message: 'The L-address cannot be empty', trigger: 'blur' }
                    ],
                    author: [
                        { required: true, message: 'The L-author cannot be empty', trigger: 'blur' }
                    ],
                }
            }
        },
        methods: {
            ...mapActions([
                'SetAddOtherLink'
            ]),
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        if(this.$tool.CheckURLAddress(this.formValidate.address)){
                            // api 请求 返回一个promise 
                            let jsonData = {
                                linkName : this.formValidate.name,
                                linkAddress : this.formValidate.address,
                                linkAuthor : this.formValidate.author
                            }
                            // this.$api.AddOtherLink(jsonData).then(()=>{
                            //     console.log(123)
                            // });
                            this.SetAddOtherLink(jsonData)
                            this.$refs[name].resetFields();
                            this.$Message.success('success');
                        }else{
                            this.$Message.error('please enter right address !!!')
                        }
                    } else {
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>

<style scoped>
.new-link{
    margin: 1rem .4rem;
}
.ivu-input-wrapper {
    width: 50%;
}
</style>
