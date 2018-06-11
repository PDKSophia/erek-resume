<template>
    <div>
        <div class="sample-view">
            <img src="../../assets/yun.png" alt="">
            <p class="logo-name">完善 - 信息</p>
            <p class="logo-summary">完善个人技能，开启 “ 装逼 ” 之路 ~</p>
        </div>
        <div class="form-box">
            <Tabs style="background: white" class="tabs">
                <TabPane label="完善信息">
                    <Form :label-width="80">
                        <!-- 基本信息 -->
                        <div class="base-infomation">
                            <p class="prompt-title">基本信息</p>
                            <p>学 &nbsp; 校 &nbsp; :  &nbsp; {{ Auth.School }}</p>
                            <p>学 &nbsp; 院 &nbsp; :  &nbsp; {{ Auth.Academy }}</p>
                            <p>专 &nbsp; 业 &nbsp; :  &nbsp; {{ Auth.Major }}</p>
                            <p>职 &nbsp; 位 &nbsp; :  &nbsp; {{ Auth.Job }}</p>
                        </div>
                        <!-- 个人信息 -->
                        <div class="base-infomation">
                            <p class="prompt-title">个人信息</p>
                            <p><span class="left-tips">*</span>姓 名 : 
                                &nbsp;<Input v-model="Auth.UserName" placeholder="姓名..." />
                            </p>
                            <p><span class="left-tips">*</span>籍 贯 : 
                                &nbsp;<Input v-model="Auth.Area" placeholder="籍贯..." />
                            </p>
                            <p><span class="left-tips">*</span>邮 箱 : 
                                &nbsp;<Input v-model="Auth.Email" placeholder="邮箱..." />
                            </p>
                            <p><span class="left-tips">*</span>电 话 : 
                                &nbsp;<Input v-model="Auth.Phone" placeholder="电话..." />
                            </p>
                        </div>
                        <!-- 个人简介 -->
                        <div class="base-infomation">
                            <p class="prompt-title">个人简介</p>
                            <p>GitHub : 
                                &nbsp;<Input v-model="Auth.Github"  placeholder="https://github.com/PDKSophia/resumes" />
                            </p>
                            <p>Blog :&nbsp;&nbsp;&nbsp;&nbsp; 
                                &nbsp;<Input v-model="Auth.Blog"  placeholder="http://www.pengdaokuan.cn/wordpress" />
                            </p>
                            <p>Hobby :&nbsp;
                                &nbsp;<Input v-model="Auth.Hobby"  placeholder="跑步、篮球、吉他、舞蹈" />
                                <span class="input-tips"> * 多个爱好以 、 分割</span>
                            </p>
                        </div>
                        <!-- 求职意向 -->
                        <div class="base-infomation">
                            <p class="prompt-title">求职意向</p>
                            <p><span class="left-tips">*</span>职 位 : 
                                &nbsp;<Select v-model="Auth.Job" >
                                    <Option value="前端工程师">前端工程师</Option>
                                    <Option value="后端工程师">后端工程师</Option>
                                    <Option value="Android工程师">Android工程师</Option>
                                </Select>
                            </p>
                            <p><span class="left-tips">*</span>地 点 : 
                                &nbsp;<Input v-model="Auth.JobAddress" placeholder="例如 : 成都|北京|南京" /> 
                                <span class="input-tips"> * 多个地点以 | 分割</span>
                            </p>
                        </div>
                        <!-- 获奖证书 -->
                        <div class="base-infomation">
                            <p class="prompt-title">获奖证书</p>
                            <p><span class="left-tips">*</span>证 书 : 
                                &nbsp;<Input v-model="Auth.Certificate" type="textarea" :autosize="{minRows: 3,maxRows: 5}" placeholder="湖南科技大学校级一等奖|互联网+大赛一等奖" />
                                <span class="input-tips"> * 多个证书以 | 分割</span>
                            </p>
                        </div>
                        <!-- 技能清单 -->
                        <div class="base-infomation">
                            <p class="prompt-title">技能清单</p>
                            <p style="float: left;" class="mobile-skill"><span class="left-tips">*</span>标 签 : </p>
                            <p>
                                <Tag v-if="Auth.Job == '前端工程师'" v-for="(web, index) in WebSkill" 
                                        :key="index">
                                        <span @click="AddTagToSkill(web.text)">{{ web.text }}</span>
                                </Tag>
                                <Tag v-if="Auth.Job == '后端工程师'" v-for="(houduan, index) in HouDuanSkill" 
                                        :key="index">
                                        <span @click="AddTagToSkill(houduan.text)">{{ houduan.text }}</span>
                                </Tag>
                                <Tag v-if="Auth.Job == 'Android工程师'" v-for="(android, index) in AndroidSkill" 
                                        :key="index">
                                        <span @click="AddTagToSkill(android.text)">{{ android.text }}</span>
                                </Tag>
                            </p>
                            <p style="margin-top: 1rem"><span class="left-tips">*</span>技 能 : 
                                &nbsp;<Input v-model="Auth.Skill" type="textarea" :autosize="{minRows:3, maxRows: 5}" placeholder="例如 : Git 、Mysql" />
                                <span class="input-tips"> * 多个技能以 、 分割</span>
                            </p>
                        </div>
                        <!-- 项目经验 -->
                        <div class="base-infomation">
                            <p class="prompt-title">项目经验</p>
                            
                        </div>
                        <!-- 个人评价 -->
                        <div class="base-infomation">
                            <p class="prompt-title">个人评价</p>
                            <p style="float: left;" class="mobile-remark"><span class="left-tips">*</span>常 用 : </p>
                            <p>
                                <Tag v-for="(eva, index) in EvaluationList" 
                                        :key="index">
                                        <span @click="AddTagToEvaluation(eva.text)">{{ eva.text }}</span>
                                </Tag>
                            </p>
                            <p style="margin-top: 1rem"><span class="left-tips">*</span>评 价 : 
                                &nbsp;<Input v-model="Auth.Evaluation" type="textarea" :autosize="{minRows:3, maxRows: 5}" placeholder="例如 : Git 、Mysql" />
                                <span class="input-tips"> * 多个技能以 | 分割</span>
                            </p>
                        </div>

                        <div class="base-infomation" style="border-bottom: none; text-align:center">
                            <Button type="primary">保存所有</Button>
                            <Button type="success">生成简历</Button>
                        </div>
                    </form>
                </TabPane>
            </Tabs>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            Auth : {
                School : '',
                Academy : '',
                Major : '',
                Job : '',
                UserName : '',
                Area : '',
                Email : '',
                Phone : '',
                JobAddress : '',
                Certificate : '',
                Github : '',
                Blog : '',
                Hobby : '',
                Skill : '',
                Evaluation : '',
            },
            WebSkill : [
                {
                    'text' : 'HTML'
                },
                {
                    'text' : 'JavaScript'
                },
                {
                    'text' : 'jQuery'
                },
                {
                    'text' : 'Node.js'
                },
                {
                    'text' : 'Git'
                },
                {
                    'text' : 'Mysql'
                },
                {
                    'text' : 'Vue.js'
                },
                {
                    'text' : 'Angular.js'
                },
                {
                    'text' : 'React.js'
                },
                {
                    'text' : 'WebSocket'
                }
            ],
            HouDuanSkill : [
                {
                    'text' : 'PHP'
                },
                {
                    'text' : 'Java'
                },
                {
                    'text' : 'ThinkPHP'
                },
                {
                    'text' : 'Node.js'
                },
                {
                    'text' : 'Git'
                },
                {
                    'text' : 'C++'
                },
                {
                    'text' : 'Go'
                },
                {
                    'text' : 'Yii'
                },
                {
                    'text' : 'SpringBoot'
                },
                {
                    'text' : 'Redis'
                },
                {
                    'text' : 'Docker'
                },
                {
                    'text' : 'Swoole'
                }
            ],
            AndroidSkill : [
                {
                    'text' : 'AsyncTask'
                },
                {
                    'text' : '自动化测试'
                },
                {
                    'text' : '网络与数据存储'
                },
                {
                    'text' : 'Kotlin'
                },
                {
                    'text' : '服务与通信'
                },
                {
                    'text' : 'ButterKnife'
                },
                {
                    'text' : 'Android UI'
                },
            ],
            // 个人评价
            EvaluationList : [
                {
                    'text' : '良好的语言表达能力和沟通能力，能快速融 入团队，较快适应新的工作环境'
                },
                {
                    'text' : '代码洁癖，前后端分离'
                },
                {
                    'text' : '自我学习能力强'
                },
                {
                    'text' : '保持好奇，对新知识新技术有决心和毅力'
                }
            ]
        }
    },
    methods : {
        AddTagToSkill (tab) {
            if(this.Auth.Skill == ''){
                this.Auth.Skill += tab + '、'
            }else{
                this.Auth.Skill = this.Auth.Skill + tab + '、'
            }
        },
        AddTagToEvaluation (tab) {
            if(this.Auth.Evaluation == ''){
                this.Auth.Evaluation += tab + ' | '
            }else{
                this.Auth.Evaluation = this.Auth.Evaluation + tab + ' | '
            }
        }
    },
    created () {
        let SessionUser   = JSON.parse(sessionStorage.getItem('Auth'))
        this.Auth.School  = SessionUser.School
        this.Auth.Academy = SessionUser.Academy
        this.Auth.Major   = SessionUser.Major
        this.Auth.Job     = SessionUser.Job
    }
}
</script>

<style scoped>
.sample-view {
  padding-top: 8%;
  text-align: center;
  height: 100%;
  width: 100%;
  padding-bottom: 3rem;
  background: #15275e;
}
.sample-view img{
  height: 8rem;
  width: 8rem;
}
.sample-view p.logo-name {
  font-size : 1.68rem;
  color: white;
  margin-top: 1rem;
}
.sample-view p.logo-summary {
  font-size : 1rem;
  color: white;
  margin-top: 5.2rem;
}
/* 用户基本信息 */
.form-box{
    background-color: #ecedf1;
    padding: 3rem 20%;
}
.form-box .tabs {
    padding: 2rem 3rem;
    border-radius: 10px;
}
.form-box .base-infomation {
    padding: 1rem;
    font-size: .9rem;
    line-height: 2rem;
    color: rgb(100, 98, 98);
    padding-bottom: 2rem;
    border-bottom: 1px solid #e8e8ea;
}
p.mobile-skill, p.mobile-remark {
    height: 3rem;
}
p.prompt-title{
    color: #15275e;
    font-size: 1rem;
    margin-bottom: .38rem;
}
span.input-tips{
    color: rgb(241, 47, 47);
    font-size: .68rem;
    margin-left: 2rem;
}
span.left-tips{
    color: rgb(241, 47, 47);
    font-size: .68rem;
    margin-right: .5rem;
}
.ivu-input-wrapper,.ivu-select {
    width: 60%;
    line-height: 3rem;
}
.ivu-tag{
    height: 25px;
    margin: 4px;
}
button{
    margin: 1rem;
    margin-bottom: 0;
}
/* iphone 5 - iphone X - 平板Ipad*/
@media screen and (min-width: 320px) and (max-width: 768px){
  .sample-view {
        padding-top: 15%;
    }
    .sample-view img{
        height: 6.6rem;
        width: 6.6rem;
    }
    .sample-view p.logo-name {
        font-size : 1.38rem;
    }
    .sample-view p.logo-summary {
        font-size : .88rem;
        margin-top: 3.8rem;
    }  
    .form-box{
        background-color: #ecedf1;
        padding:1rem;
    }
    .form-box .tabs {
        padding: 1rem;
    }
    .form-box .base-infomation {
        padding: 1rem;
        padding-bottom: 2.6rem;
    }
    p.mobile-skill{
        height: 9rem;
    }
    p.mobile-remark{
        height: 2rem;
    }
    p.prompt-title{
        color: #15275e;
        font-size: .92rem;
        margin-bottom: .38rem;
    }
    span.input-tips{
        color: rgb(241, 47, 47);
        font-size: .6rem;
        float: right;
        margin-right: 1rem;
    }
    span.left-tips{
        color: rgb(241, 47, 47);
        font-size: .68rem;
        text-align: center;
    }
    .ivu-input-wrapper,.ivu-select {
        width: 70%;
        line-height: 3rem;
    }
    .ivu-tag{
        height: 25px;
        margin: 4px;
    }
}
@media screen and (min-width: 365px) and (max-width: 768px){
    span.input-tips{
        color: rgb(241, 47, 47);
        font-size: .6rem;
        float: right;
        margin-right: 1rem;
    }
    .ivu-input-wrapper,.ivu-select {
        width: 77%;
        line-height: 3rem;
    }
    p.mobile-skill{
        height: 7rem;
    }
    p.mobile-remark{
        height: 2rem;
    }
}
@media screen and (min-width: 650px) and (max-width: 768px){
    span.input-tips{
        color: rgb(241, 47, 47);
        font-size: .6rem;
        float: right;
        margin-right: 6rem;
    }
    p.mobile-skill{
        height: 5rem;
    }
    p.mobile-remark{
        height: 4rem;
    }
}
</style>

