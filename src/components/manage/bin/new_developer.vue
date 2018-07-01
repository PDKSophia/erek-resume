<template>
    <div class="new-developer">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem label="Dev-Name" prop="Dev_Name" :label-width="100">
                <Input v-model="formValidate.Dev_Name" placeholder="Enter new Dev-Name" />
            </FormItem>
            <FormItem label="Dev-Job" prop="Dev_Job" :label-width="100">
                <Input v-model="formValidate.Dev_Job" placeholder="Enter new Dev-Job" />
            </FormItem>
            <FormItem label="Dev-Skill" prop="Dev_Skill" :label-width="100">
                <Input v-model="formValidate.Dev_Skill" placeholder="Enter new Dev-Skill" />
            </FormItem>
            <FormItem label="Summary" prop="Dev_Summary" :label-width="100">
                <Input v-model="formValidate.Dev_Summary" placeholder="Enter new Dev-Summary" />
            </FormItem>
            <FormItem label="Avatar" prop="Dev_Avatar" :label-width="100">
                <Upload
                    type="drag"
                    style="width:50%"
                    action=""
                    >
                    <div style="padding: 20px 0">
                        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                        <p>Click or drag files here to upload</p>
                    </div>
                </Upload>
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
                    Dev_Name: '',
                    Dev_Job : '',
                    Dev_Skill : '',
                    Dev_Avatar : '',
                    Dev_Summary : ''
                },
                ruleValidate: {
                    Dev_Name: [
                        { required: true, message: 'The Dev_Name cannot be empty', trigger: 'blur' }
                    ],
                    Dev_Job: [
                        { required: true, message: 'The Dev_Job cannot be empty', trigger: 'blur' }
                    ],
                    Dev_Skill: [
                        { required: true, message: 'The Dev_Skill cannot be empty', trigger: 'blur' }
                    ],
                    Dev_Summary: [
                        { required: true, message: 'The Dev_Summary cannot be empty', trigger: 'blur' }
                    ],
                }
            }
        },
        methods: {
            ...mapActions([
                'SetAddDeveloper'
            ]),
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        if(this.$tool.CheckURLAddress(this.formValidate.address)){
                            // api 请求 返回一个promise 
                            let jsonData = {
                                Dev_Name : this.formValidate.Dev_Name,
                                Dev_Job : this.formValidate.Dev_Job,
                                Dev_Skill : this.formValidate.Dev_Skill,
                                Dev_Summary : this.formValidate.Dev_Summary,
                                Dev_Avatar : this.formValidate.Dev_Avatar
                            }
                            // this.$api.AddDeveloper(jsonData).then(()=>{
                            //     console.log(123)
                            // });
                            this.SetAddDeveloper(jsonData)
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
.new-developer{
    margin: 1rem;
}
.ivu-input-wrapper {
    width: 50%;
}
</style>
