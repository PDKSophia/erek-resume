<template>
    <div>
        <div class="sample-view">
            <img src="../../assets/yun.png" alt="">
            <p class="logo-name">完善 - 信息</p>
            <p class="logo-summary">完善个人技能，开启 “ 装逼 ” 之路 ~</p>
        </div>
        <div class="form-box">
            <div id="yun-tips">
                <p style="color:red">提示</p>
                <p>开发者对所有的输入框都没做验证，说白就是太懒了也太多了~ 你们不填，简历就是空的，为的是你们，而不是我 ~ 就那么任性</p>
            </div>
        </div>
        <div class="form-box">
            <div id="yun-tips">
                <p style="color:red">常见问题</p>
                <p>1 : 浏览器关闭状态下需重新完善信息</p>
                <p>2 : 建议每次完善信息或者在 “ 生成简历 ” 前都先“ 保存所有 ”，防止页面刷新之后重填</p>
                <p>3 : 页面刷新，输入的信息都没了，是不是需要重填 ? 如果页面刷新前你 “ 保存所有 ” 则不需要，否则需重填</p>
                <p>4 : 请按照开发者定义好的规则填写 ~ </p>
            </div>
        </div>
        <div class="form-box">
            <Tabs style="background: white" class="tabs">
                <TabPane label="完善信息">
                    <Form :label-width="80" ref="formCustom">
                        <!-- 基本信息 -->
                        <div class="base-infomation">
                            <p class="prompt-title">基本信息</p>
                            <p>学 &nbsp; 校 &nbsp; :  &nbsp; {{ Auth.School }}</p>
                            <p>学 &nbsp; 院 &nbsp; :  &nbsp; {{ Auth.Academy }}</p>
                            <p>专 &nbsp; 业 &nbsp; :  &nbsp; {{ Auth.Major }}</p>
                            <p>职 &nbsp; 位 &nbsp; :  &nbsp; {{ Auth.Job }}</p>
                        </div>
                        <!-- 简历照片 -->
                        <div class="base-infomation">
                            <p class="prompt-title">简历头像</p>
                            <div class="box-resume-image">
                                <img class="avatar-image" :src="Auth.Avatar" alt="">
                                <a class="input-file input-fileup" href="javascript:;">
                                    + 选择文件<input type="file" name="image" id="image" @change="HeadImage('head-file')">
                                </a>
                            </div>
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
                            <p><span class="left-tips">*</span>学 年 : 
                                &nbsp;<DatePicker type="month" v-model="Auth.EnrolmentTime" placeholder="Select date"></DatePicker>
                                 - <DatePicker type="month" v-model="Auth.GraduationTime" placeholder="Select date"></DatePicker>
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
                                &nbsp;<Input v-model="Auth.Hobby"  placeholder="跑步、音乐、篮球、吉他、舞蹈" />
                                <span class="input-tips"> * 多个爱好以 、 分割， 并以 、 结尾</span>
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
                                <span class="input-tips"> * 多个地点以 | 分割， 并以 | 结尾</span>
                            </p>
                        </div>
                        <!-- 获奖证书 -->
                        <div class="base-infomation">
                            <p class="prompt-title">获奖证书</p>
                            <p><span class="left-tips">*</span>证 书 : 
                                &nbsp;<Input v-model="Auth.Certificate" type="textarea" :autosize="{minRows: 3,maxRows: 5}" placeholder="湖南科技大学校级一等奖|互联网+大赛一等奖" />
                                <span class="input-tips"> * 多个证书以 | 分割， 并以 | 结尾</span>
                            </p>
                        </div>
                        <!-- 技能清单 -->
                        <div class="base-infomation" v-if="Auth.Academy == '计算机科学与工程学院'">
                            <p class="prompt-title">技能清单</p>
                            <p style="float: left;" class="mobile-skill"><span class="left-tips">*</span>标 签 :</p>
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
                                <span class="input-tips"> * 多个技能以 、 分割， 并以 、 结尾</span>
                            </p>
                        </div>
                        <!-- 项目经验 -->
                        <div class="base-infomation">
                            <p class="prompt-title">项目经验</p>
                            <div class="experience" v-for="(item, index) in Auth.Experience" :key="index">
                                <p>项目名称 : {{ item.projectName }}</p>  
                                <p>担任职位 : {{ item.projectJob }}</p>  
                                <p v-if="item.projectLink != ''">链接地址 : {{ item.projectLink }}</p>
                                <p>项目描述 : {{ item.projectSummary }}</p>
                                <Button type="error" style="margin:.6rem 0rem 1rem" @click="DeleteProject(index)">删除</Button>
                                <Button type="primary" style="margin:.6rem 0rem 1rem" @click="ChangeProject(index)">修改</Button>

                                <!-- 修改项目信息 -->
                                <div class="experience" style="border: none" v-if="item.show">
                                    <div class="project-table">
                                        <div class="left-cell">
                                            <p class="label-span"><span class="left-tips">*</span>项目名称 : </p>
                                        </div>
                                        <div class="right-cell">
                                            <Input class="pro-tab" v-model="exProject.projectName" placeholder="例如 : 开源 - 宅客( 开发中 ) - 独立开发" />
                                        </div>
                                        <div class="left-cell">
                                            <p class="label-span"><span class="left-tips">*</span>担任职位 : </p>
                                        </div>
                                        <div class="right-cell">
                                            <Input class="pro-tab" v-model="exProject.projectJob" placeholder="例如 : 前端工程师" />
                                        </div>
                                        <div class="left-cell">
                                            <p class="label-span"><span class="left-tips">*</span>技术栈 : </p>
                                        </div>
                                        <div class="right-cell">
                                            <Input class="pro-tab" v-model="exProject.projectSkill"  placeholder="例如 : Vue.js + Axios + iView UI + ThinkPHP5.1" />
                                        </div>
                                        <div class="left-cell">
                                            <p class="label-span"><span class="left-tips">*</span>项目时间 : </p>
                                        </div>
                                        <div class="right-cell">
                                            <DatePicker type="month" v-model="exProject.StartTime" placeholder="Select date"></DatePicker>
                                            - <DatePicker type="month" v-model="exProject.EndTime" placeholder="Select date"></DatePicker>
                                        </div>
                                        <div class="left-cell">
                                            <p class="label-span">链接地址 : </p>
                                        </div>
                                        <div class="right-cell">
                                            <Input class="pro-tab" v-model="exProject.projectLink" placeholder="建议填写" />
                                        </div>
                                        <div class="left-cell">
                                            <p class="label-span"><span class="left-tips">*</span>项目描述 : </p>
                                        </div>
                                        <div class="right-cell">
                                            <Input class="pro-tab" v-model="exProject.projectSummary" type="textarea" :autosize="{minRows: 3,maxRows: 6}" placeholder="项目的基本介绍" />
                                        </div>
                                        <div class="left-cell">
                                            <p class="label-span"><span class="left-tips">*</span>问题解决 : </p>
                                        </div>
                                        <div class="right-cell">
                                            <Input class="pro-tab" v-model="exProject.projectSolve" type="textarea" :autosize="{minRows: 3,maxRows: 6}" placeholder="例如 : {node socket.io实现群聊，采用PM2部署node.js，保证进程永久存活}" />
                                            <p><span class="input-tips" style="margin-left: 0"> * 多个问题及解决以 { } 分割成一个句子</span></p>
                                        </div>
                                    </div>
                                    <div align="center">
                                        <Button type="ghost" @click="item.show = false">取消</Button>
                                        <Button type="dashed" @click="PreservationProject(index)">保存</Button>
                                    </div>
                                </div>
                            </div> 
        
                            <!-- <div class="experience">
                                <p>项目名称 : 基于微信企业号 - 二手市场 - 前端</p>  
                                <p>担任职位 : Web前端工程师</p>  
                                <p>链接地址 : https://github.com/PDKSophia/resumes</p>
                                <p>项目描述 : 作为在校学生进行二手商品交易平台，功能包括商品上传、下单、聊天、处理、收藏等</p>
                            </div> 
                            <div class="experience">
                                <p>项目名称 : 开源 - 宅客( 开发中 ) - 独立开发</p>  
                                <p>担任职位 : 全栈工程师</p>  
                                <p>链接地址 : https://github.com/PDKSophia/resumes</p>
                                <p>项目描述 : 一个有爱的聊天APP平台应用功能包括 : 注册登陆、个人信息、添加好友、加入群聊、接入图灵机器人、朋友圈等</p>
                            </div>  -->
                            <!-- 添加一条 -->
                            <div class="experience" style="border: none" v-if="ShowAddProject">
                                <div class="project-table">
                                    <div class="left-cell">
                                        <p class="label-span"><span class="left-tips">*</span>项目名称 : </p>
                                    </div>
                                    <div class="right-cell">
                                        <Input class="pro-tab" v-model="NewProject.projectName" placeholder="例如 : 开源 - 宅客( 开发中 ) - 独立开发" />
                                    </div>
                                    <div class="left-cell">
                                        <p class="label-span"><span class="left-tips">*</span>担任职位 : </p>
                                    </div>
                                    <div class="right-cell">
                                        <Input class="pro-tab" v-model="NewProject.projectJob" placeholder="例如 : 前端工程师" />
                                    </div>
                                    <div class="left-cell">
                                        <p class="label-span"><span class="left-tips">*</span>技术栈 : </p>
                                    </div>
                                    <div class="right-cell">
                                        <Input class="pro-tab" v-model="NewProject.projectSkill"  placeholder="例如 : Vue.js + Axios + iView UI + ThinkPHP5.1" />
                                    </div>
                                    <div class="left-cell">
                                        <p class="label-span"><span class="left-tips">*</span>项目时间 : </p>
                                    </div>
                                    <div class="right-cell">
                                        <DatePicker type="month" v-model="NewProject.StartTime" placeholder="Select date"></DatePicker>
                                        - <DatePicker type="month" v-model="NewProject.EndTime" placeholder="Select date"></DatePicker>
                                    </div>
                                    <div class="left-cell">
                                        <p class="label-span">链接地址 : </p>
                                    </div>
                                    <div class="right-cell">
                                        <Input class="pro-tab" v-model="NewProject.projectLink" placeholder="建议填写" />
                                    </div>
                                    <div class="left-cell">
                                        <p class="label-span"><span class="left-tips">*</span>项目描述 : </p>
                                    </div>
                                    <div class="right-cell">
                                        <Input class="pro-tab" v-model="NewProject.projectSummary" type="textarea" :autosize="{minRows: 3,maxRows: 6}" placeholder="项目的基本介绍" />
                                    </div>
                                    <div class="left-cell">
                                        <p class="label-span"><span class="left-tips">*</span>问题解决 : </p>
                                    </div>
                                    <div class="right-cell">
                                        <Input class="pro-tab" v-model="NewProject.projectSolve" type="textarea" :autosize="{minRows: 3,maxRows: 6}" placeholder="例如 : {node socket.io实现群聊，采用PM2部署node.js，保证进程永久存活}" />
                                        <p><span class="input-tips" style="margin-left: 0"> * 多个问题及解决以 { } 分割成一个句子</span></p>
                                    </div>
                                </div>
                                <div align="center">
                                    <Button type="ghost" @click="ShowAddProject = false">取消</Button>
                                    <Button type="dashed" @click="IncreaseProject">保存</Button>
                                </div>
                            </div>
                            <Button type="ghost" v-else class="AddButton" @click="ShowAddProject = true">增加一条</Button>
                        </div>
                        <!-- 工作经验 -->
                        <div class="base-infomation">
                            <p class="prompt-title">工作经验</p>
                            <div class="experience" v-for="(item, index) in Auth.WorkExper" :key="index">
                                <p>公司名称 : {{ item.workName }}</p>  
                                <p>担任职位 : {{ item.workJob }}</p>  
                                <Button type="error" style="margin:.6rem 0rem 1rem" @click="DeleteWork(index)">删除</Button>
                                <Button type="primary" style="margin:.6rem 0rem 1rem" @click="ChangeWork(index)">修改</Button>

                                <!-- 修改信息 -->
                                <div class="experience" style="border: none" v-if="item.show">
                                    <div class="project-table">
                                        <div class="left-cell">
                                            <p class="label-span"><span class="left-tips">*</span>公司名称 : </p>
                                        </div>
                                        <div class="right-cell">
                                            <Input class="pro-tab" v-model="exWork.workName" placeholder="例如 : 天津金米特科技股份有限公司" />
                                        </div>
                                        <div class="left-cell">
                                            <p class="label-span"><span class="left-tips">*</span>担任职位 : </p>
                                        </div>
                                        <div class="right-cell">
                                            <Input class="pro-tab" v-model="exWork.workJob" placeholder="例如 : 前端工程师" />
                                        </div>
                                        <div class="left-cell">
                                            <p class="label-span"><span class="left-tips">*</span>工作时间 : </p>
                                        </div>
                                        <div class="right-cell">
                                            <DatePicker type="month" v-model="exWork.StartTime" placeholder="Select date"></DatePicker>
                                            - <DatePicker type="month" v-model="exWork.EndTime" placeholder="Select date"></DatePicker>
                                        </div>
                                        <div class="left-cell">
                                            <p class="label-span"><span class="left-tips">*</span>工作内容 : </p>
                                        </div>
                                        <div class="right-cell">
                                            <Input class="pro-tab" v-model="exWork.workContent" type="textarea" :autosize="{minRows: 3,maxRows: 6}" placeholder="例如 : {专职负责公司web项目前端的开发}" />
                                            <p><span class="input-tips" style="margin-left: 0"> * 多个问题及解决以 { } 分割成一个句子</span></p>
                                        </div>
                                    </div>
                                    <div align="center">
                                        <Button type="ghost" @click="item.show = false">取消</Button>
                                        <Button type="dashed" @click="PreservationWork(index)">保存</Button>
                                    </div>
                                </div>
                            </div>

                            <!-- 添加一条 -->
                            <div class="experience" style="border: none" v-if="ShowAddWork">
                                <div class="project-table">
                                    <div class="left-cell">
                                        <p class="label-span"><span class="left-tips">*</span>公司名称 : </p>
                                    </div>
                                    <div class="right-cell">
                                        <Input class="pro-tab" v-model="NewWork.workName" placeholder="例如 : 天津金米特科技股份有限公司" />
                                    </div>
                                    <div class="left-cell">
                                        <p class="label-span"><span class="left-tips">*</span>担任职位 : </p>
                                    </div>
                                    <div class="right-cell">
                                        <Input class="pro-tab" v-model="NewWork.workJob" placeholder="例如 : 前端工程师" />
                                    </div>
                                    <div class="left-cell">
                                        <p class="label-span"><span class="left-tips">*</span>工作时间 : </p>
                                    </div>
                                    <div class="right-cell">
                                        <DatePicker type="month" v-model="NewWork.StartTime" placeholder="Select date"></DatePicker>
                                        - <DatePicker type="month" v-model="NewWork.EndTime" placeholder="Select date"></DatePicker>
                                    </div>
                                    <div class="left-cell">
                                        <p class="label-span"><span class="left-tips">*</span>工作内容 : </p>
                                    </div>
                                    <div class="right-cell">
                                        <Input class="pro-tab" v-model="NewWork.workContent" type="textarea" :autosize="{minRows: 3,maxRows: 6}" placeholder="例如 : {专职负责公司web项目前端的开发}" />
                                        <p><span class="input-tips" style="margin-left: 0"> * 多个问题及解决以 { } 分割成一个句子</span></p>
                                    </div>
                                </div>
                                <div align="center">
                                    <Button type="ghost" @click="ShowAddWork = false">取消</Button>
                                    <Button type="dashed" @click="IncreaseWork">保存</Button>
                                </div>
                            </div>
                            <Button type="ghost" v-else class="AddButton" @click="ShowAddWork = true">增加一条</Button>
                        </div>
                        <!-- 个人评价 -->
                        <div class="base-infomation">
                            <p class="prompt-title">个人评价</p>
                            <p style="float: left;" class="mobile-remark"><span class="left-tips">*</span>常 用 :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p>
                                <Tag v-for="(eva, index) in EvaluationList" 
                                        :key="index">
                                        <span @click="AddTagToEvaluation(eva.text)">{{ eva.text }}</span>
                                </Tag>
                            </p>
                            <p style="margin-top: 1rem"><span class="left-tips">*</span>评 价 : 
                                &nbsp;<Input v-model="Auth.Evaluation" type="textarea" :autosize="{minRows:3, maxRows: 5}" placeholder="例如 : Git 、Mysql" />
                                <span class="input-tips"> * 多个技能以 | 分割， 并以 | 结尾</span>
                            </p>
                        </div>

                        <div class="base-infomation" style="border-bottom: none; text-align:center">
                            <Button type="primary" @click="SessionUserInfo">保存所有</Button>
                            <Button type="success" @click="SubmitMakeResume">生成简历</Button>
                        </div>
                    </form>
                </TabPane>
            </Tabs>
        </div>
        
        <div class="form-box" v-if="ShowTemplateChoose">
            <div id="template-choose">
                <p class="title-choose">模板挑选</p>
                <Row>
                    <i-col v-for="(sam, index) in SampleNewList" :key="index" :xs="24" :sm="12" :md="8" :lg="8" class="cell">
                        <div class="img-box mouse">
                            <img :src="sam.avatar" alt="">
                            <Button type="dashed" @click="UserTemplate(index)">使用模板</Button>
                        </div>
                    </i-col>
                </Row>
            </div>
        </div>
    </div>
</template>

<script>
import Validate from '../../task/validate.js'

export default {
    data () {
        return {
            Auth : {
                School : '',
                Academy : '',
                Major : '',
                Job : '',
                Avatar : require('../../assets/default.jpg'),
                UserName : '林囿余',
                Area : '贵州',
                Email : '2577187007@qq.com',
                Phone : '18673291007',
                EnrolmentTime : '2015-09',
                GraduationTime : '2019-07',
                JobAddress : '成都|长沙|北京|',
                Certificate : '湖南科技大学一等奖|全国英语四级证|全国计算机二级证书|',
                Github : 'https://github.com/PDKSophia/resumes/pull/18',
                Blog : 'https://github.com/PDKSophia/resumes/pull/18',
                Hobby : '跑步、音乐、看书、',
                Skill : '',
                Experience :[
                    {
                        projectName : '基于微信企业号 - 二手市场 - 前端',
                        projectJob : '前端工程师',
                        projectSkill : 'Vue.js + jQuery + Vuex',
                        projectLink : 'https://market.ticknet.hnust.cn',
                        projectSummary : '作为在校学生进行二手商品交易平台,功能包括商品上传、下单、聊天、处理、收藏等',
                        projectSolve : '{sessionStorage 实现从详情到列表页的滚动}{配置nginx，实现跨域问题}',
                        StartTime : '2017-11',
                        EndTime : '2018-05',
                        show : false
                    },
                    {
                        projectName : '开源 - 嘟嘟WebApp( 完善中 ) - 独立开发',
                        projectJob : '全栈工程师',
                        projectSkill : 'Vue.js + jQuery + Vuex',
                        projectLink : 'https://market.ticknet.hnust.cn',
                        projectSummary : '功能包括实时电影热映、在线播放歌曲、文章博客浏览、发布动态、五子棋、 脑筋急转弯、天气查询等',
                        projectSolve : '{豆瓣API获得资源，存入数据库，减少豆瓣API请求次数}{通过QQ音乐API，获取歌单列表存入数据库，rand()随机歌曲数量，更新 歌曲信息播放地址}{接入个人博客文章，借鉴朋友圈风格，实现动态、分享多图上传}',
                        StartTime : '2018-03',
                        EndTime : '2018-06',
                        show : false
                    },
                    {
                        projectName : '开源 - 宅客( 开发中 ) - 独立开发',
                        projectJob : '全栈工程师',
                        projectSkill : 'Vue.js + Axios + muse ui + Vuex + ThinkPHP5',
                        projectLink : 'https://market.ticknet.hnust.cn',
                        projectSummary : '一个有爱的聊天APP平台应用',
                        projectSolve : '{PHP Header 实现跨域}{MD5加密用户密码，rand()随机生成用户名及用户标识}{node socket.io实现群聊，采用PM2部署node.js，保证进程永久存活}',
                        StartTime : '2018-06',
                        EndTime : '至今',
                        show : false
                    },
                ],
                WorkExper : [
                    {
                        workName : '天津金米特科技股份有限公司',
                        workJob : '前端工程师',
                        workContent : '{专职负责公司web项目前端的开发}{利用HTML/CSS/JavaScript/HTML5等各种Web技术进行产品的界面开发}',
                        StartTime : '2017-06',
                        EndTime : '2018-01',
                        show : false,
                    },
                    {
                        workName : '天津金米特科技股份有限公司',
                        workJob : '前端工程师',
                        workContent : '{专职负责公司web项目前端的开发}{利用HTML/CSS/JavaScript/HTML5等各种Web技术进行产品的界面开发}',
                        StartTime : '2017-06',
                        EndTime : '2018-01',
                        show : false,
                    },
                    {
                        workName : '天津金米特科技股份有限公司',
                        workJob : '前端工程师',
                        workContent : '{专职负责公司web项目前端的开发}{利用HTML/CSS/JavaScript/HTML5等各种Web技术进行产品的界面开发}',
                        StartTime : '2017-06',
                        EndTime : '2018-01',
                        show : false,
                    }
                ],
                Evaluation : '',
            },
            WebSkill : [
                {
                    'text' : 'HTML'
                },
                {
                    'text' : 'jQuery'
                },
                {
                    'text' : 'Git'
                },
                {
                    'text' : 'Node.js'
                },
                {
                    'text' : 'JavaScript'
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
                },
                {
                    'text' : '了解微信小程序'
                },
                {
                    'text' : '了解基于微信公众号开发'
                },
                {
                    'text' : '了解Mysql,了解数据库优化方法'
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
                },
                {
                    'text' : '了解微信小程序'
                },
                {
                    'text' : '了解基于微信公众号开发'
                },
                {
                    'text' : '了解MYSQL,了解数据库优化方法'
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
                    'text' : '良好的语言表达能力和沟通能力，能快速融入团队，较快适应新的工作环境'
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
            ],
            NewProject : {
                projectName : '',
                projectJob : '',
                projectSkill : '',
                StartTime : '',
                EndTime : '',
                projectLink : '',
                projectSummary : '',
                projectSolve : '',
                show : false
            },
            exProject : {
                projectName : '',
                projectJob : '',
                projectSkill : '',
                StartTime : '',
                EndTime : '',
                projectLink : '',
                projectSummary : '',
                projectSolve : '',
                show : false
            },
            NewWork : {
                workName : '',
                workJob : '',
                StartTime : '',
                EndTime : '',
                workContent : '',
                show : false
            },
            exWork : {
                workName : '',
                workJob : '',
                StartTime : '',
                EndTime : '',
                workContent : '',
                show : false
            },
            ShowAddProject : false,
            ShowAddWork : false,
            ShowTemplateChoose : false,
            SampleNewList : [
                {
                    avatar : require('../../../image/模板1.jpg'),
                    text : 'Sample Template 1',
                    path : 'one'
                },
                {
                    avatar : require('../../../image/模板2.jpg'),
                    text : 'Sample Template 2',
                    path : 'two'
                },
                {
                    avatar : require('../../../image/模板3.jpg'),
                    text : 'Sample Template 3',
                    path : 'three'
                },
                {
                    avatar : require('../../../image/模板4.jpg'),
                    text : 'Sample Template 4',
                    path : 'four'
                },
                {
                    avatar : require('../../../image/模板5.jpg'),
                    text : 'Sample Template 5',
                    path : 'five'
                },
                {
                    avatar : require('../../../image/模板6.jpg'),
                    text : 'Sample Template 6',
                    path : 'six'
                }
            ],
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
        },
        // 添加新项目经验数据信息
        IncreaseProject () {
            // 添加到用户的项目经验中
            this.Auth.Experience.push({
                projectName : this.NewProject.projectName,
                projectJob : this.NewProject.projectJob,
                projectSkill : this.NewProject.projectSkill,
                projectLink : this.NewProject.projectLink,
                projectSummary : this.NewProject.projectSummary,
                projectSolve : this.NewProject.projectSolve,
                StartTime : this.NewProject.StartTime,
                EndTime : this.NewProject.EndTime,
                show : false,
            })
            this.NewProject = {}
        },
        // 添加新工作经验数据信息
        IncreaseWork () {
            // 添加到用户的工作经验中
            this.Auth.WorkExper.push({
                workName : this.NewWork.workName,
                workJob : this.NewWork.workJob,
                workContent : this.NewWork.workContent,
                StartTime : this.NewWork.StartTime,
                EndTime : this.NewWork.EndTime,
                show : false
            })
            this.NewWork = {}
        },
        // 删除项目
        DeleteProject (index) {
            this.$Modal.confirm({
                title: 'Yun Resume Title',
                content: '<p>确定要删除此项目吗 ? </p>',
                onOk: () => {
                    this.Auth.Experience.splice(index, 1)
                    this.$Message.success('删除成功');
                },
                onCancel: () => {
                    
                }
            });
        },
        //修改项目
        ChangeProject (index) {
            this.exProject = {
                projectName : this.Auth.Experience[index].projectName,
                projectJob : this.Auth.Experience[index].projectJob,
                projectSkill : this.Auth.Experience[index].projectSkill,
                projectLink : this.Auth.Experience[index].projectLink,
                projectSummary : this.Auth.Experience[index].projectSummary,
                projectSolve : this.Auth.Experience[index].projectSolve,
                StartTime : this.Auth.Experience[index].StartTime,
                EndTime : this.Auth.Experience[index].EndTime,
                show : false
            }
            this.Auth.Experience[index].show = true
        },
        PreservationProject (index) {
            this.Auth.Experience.push({
                projectName : this.exProject.projectName,
                projectJob : this.exProject.projectJob,
                projectSkill : this.exProject.projectSkill,
                projectLink : this.exProject.projectLink,
                projectSummary : this.exProject.projectSummary,
                projectSolve : this.exProject.projectSolve,
                StartTime : this.exProject.StartTime,
                EndTime : this.exProject.EndTime,
                show : false
            })
            this.exProject = {}
            this.Auth.Experience.splice(index, 1)
        },
        // 删除工作
        DeleteWork (index) {
            this.$Modal.confirm({
                title: 'Yun Resume Title',
                content: '<p>确定要删除此工作吗 ? </p>',
                onOk: () => {
                    this.Auth.WorkExper.splice(index, 1)
                    this.$Message.success('删除成功');
                },
                onCancel: () => {
                    
                }
            });
        },
        //修改工作
        ChangeWork (index) {
            this.exWork = {
                workName : this.Auth.WorkExper[index].workName,
                workJob : this.Auth.WorkExper[index].workJob,
                workContent : this.Auth.WorkExper[index].workContent,
                StartTime : this.Auth.WorkExper[index].StartTime,
                EndTime : this.Auth.WorkExper[index].EndTime,
                show : false
            }
            this.Auth.WorkExper[index].show = true
        },
        PreservationWork (index) {
            this.Auth.WorkExper.push({
                workName : this.exWork.workName,
                workJob : this.exWork.workJob,
                workContent : this.exWork.workContent,
                StartTime : this.exWork.StartTime,
                EndTime : this.exWork.EndTime,
                show : false
            })
            this.exWork = {}
            this.Auth.WorkExper.splice(index, 1)
        },
        // 保存所有
        SessionUserInfo () {
            sessionStorage.setItem('SessionUser', JSON.stringify(this.Auth))
            this.$Modal.success({
                title: 'Yun Resume',
                content: '保存成功，无需重新完善信息，直接点击 “生成简历” 去生成专属自己的简历吧 ~'
            });
            console.log(sessionStorage.getItem('SessionUser'))
        },
        // 生成简历
        SubmitMakeResume () {
            this.$Notice.warning({
                title: 'Yun Resume title',
                desc: '先 “ 保存所有 ”，再生成简历，这样只要页面不关闭状态，都可生成简历'
            });
            this.ShowTemplateChoose = true
        },
        // 使用该模板
        UserTemplate (index) {
            switch (index) {
                case 0:
                    this.$router.push({path : '/user/template_one'})
                    break;
                case 1:
                    this.$router.push({path : '/user/template_two'})
                    break;
                case 2:
                    this.$router.push({path : '/user/template_three'})
                    break;
                case 3:
                    this.$router.push({path : '/user/template_four'})
                    break;
                case 4:
                    this.$router.push({path : '/user/template_five'})
                    break;
                case 5:
                    this.$router.push({path : '/user/template_six'})
                    break;
                default:
                    break;
            }
        },
        // 头像上传
        HeadImage (head) {
            var headBox = document.getElementById('image')
            var headimg = headBox.files
            console.log(headimg)
			// 获得图片名， 大小， 类型(全转换小写)
            var imgName = headimg[0].name
			var imgSize = headimg[0].size
			var imgType = imgName.substring(imgName.lastIndexOf(".")+1).toLowerCase()
            // 判断是否属于jpg  jpeg png
            if(imgType != 'jpg' && imgType != 'jpeg' && imgType != 'png')
            {
                this.$Message.info('只支持 jpg | jpeg | png 格式')
                imgName = ''
                headimg = null
                return false
            }
            // 判断大小
            if(imgSize > 5242000)       // 1M = 1024 * 1024 * 1
            {
                this.$Message.info('图片不能大于5M ')
                headimg = null
                return false
			}
			else
			{
                var imgUrl = window.URL.createObjectURL(headBox.files[0])
                this.Auth.Avatar = imgUrl
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
  animation: swing 2s;
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
/* 简历头像 */
.box-resume-image {
    
}
.box-resume-image img.avatar-image {
    width: 9rem;
    height: 13rem;
}
/* 提示框 */
#yun-tips {
  animation: bounceIn 2s;
}
#yun-tips, #template-choose{
    background-color: white;
    text-align: center;
    padding: 1rem 1rem;
    border-radius: 10px;
    line-height: 1.5rem;
}
/* 模板选择 */
#template-choose p.title-choose{
    color: #15275e;
    font-size: 1.36rem;
    font-weight: 600;
}
/* 使用模板 */
.img-box {
    margin-top: 1rem;
    padding: 1.5rem;
    border-radius: 10px;
}
.img-box img{
    width: 100%;
    height: 20rem;
    padding: .5rem
}
.mouse {
    cursor: pointer;
}
/* 用户基本信息 */
.form-box{
    background-color: #ecedf1;
    padding: 1.5rem 20%;
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
    height: 4rem;
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
/* 项目经验 */
.new-project {
    border: none;
}
.experience{
    margin: 0rem 1rem;
    padding: 1rem 0rem;
    border-bottom: 1px solid #e8e8ea;
}
.experience p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
/* 增加一条 */
button.AddButton {
    width: 80%;
    margin: 1rem 5rem;
    margin-top: 2rem;
}
.ivu-date-picker {
    width: 29.2%;
}
.ivu-input-wrapper,.ivu-select {
    width: 60%;
    line-height: 3rem;
}
.ivu-input-wrapper,.ivu-select {
    /* margin-left: 1.3rem; */
}
.ivu-tag{
    height: 25px;
    margin: 4px;
}
button{
    margin: 1rem;
    margin-bottom: 0;
}
/* 新增项目表格样式 */
.project-table {
    width: 100%;
    padding: 1rem;
    border: 1px solid #e8e8ea;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 2rem;
}
.project-table .left-cell {
    width: 25%;
    margin-bottom: .4rem;
}
.left-cell p.label-span {
    float: right;
    margin-right: 1rem;
    margin-top: .5rem;
}
.project-table .right-cell {
    width: 75%;
    margin-bottom: .4rem;
}
.pro-tab{
    width: 80%;
}
/* 头像上传按钮 */
.input-file{
    display: inline-block;
    position: relative;
    overflow: hidden;
    text-align: center;
    width: auto;
    background-color: #576fb9;
    border: solid 1px #ddd;
    border-radius: 4px;
    padding: 5px 10px;
    font-size: 12px;
    font-weight: normal;
    line-height: 18px;
    color:#fff;
    text-decoration: none;
    margin-left : 3rem;
}
.input-file input[type="file"] {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 14px;
    background-color: #fff;
    transform: translate(-300px, 0px) scale(4);
    height: 40px;
    opacity: 0;
    filter: alpha(opacity=0);
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
        height: 15rem;
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
    .ivu-date-picker {
        width: 32%;
    }
    .ivu-input-wrapper,.ivu-select{
        width: 70%;
        line-height: 3rem;
    }
    .ivu-tag{
        height: 25px;
        margin: 4px;
    }
    /* 简历头像 */
    .box-resume-image {
        text-align: center;
    }
    .input-file {
        margin-left: 0;
    }
    .box-resume-image img.avatar-image {
        width: 9rem;
        height: 13rem;
    }
    /* 项目经验 */
    .experience{
        margin: 0rem 0rem;
        padding: 0rem 0rem;
        border-bottom: 1px solid #e8e8ea;
    }
    .experience p{
        font-size: .7rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    button.AddButton {
        width: 90%;
        margin: 1.5rem 1rem;
        margin-bottom: -1rem;
    }
    /* 新增项目表格样式 */
    .project-table {
        width: 100%;
        padding: .4rem;
        border: 1px solid #e8e8ea;
        display: flex;
        flex-wrap: wrap;
        border-radius: 10px;
        margin-top: .68rem;
        padding-bottom: 1rem;
    }
    .project-table .left-cell {
        width: 35%;
        margin-bottom: 0rem;
    }
    .left-cell p.label-span {
        float: right;
        margin-right: .5rem;
        margin-top: .5rem;
    }
    .project-table .right-cell {
        width: 100%;
        margin-bottom: 0rem;
        padding: 0rem .45rem;
    }
    .pro-tab{
        width: 100%;
    }
    /* 模板选择 */
    #template-choose p.title-choose{
        margin-top: 1rem;
    }
    /* 使用模板 */
    .img-box {
        padding: .5rem;
        border-radius: 10px;
    }
    .img-box img{
        width: 100%;
        height: 20rem;
        padding: .5rem
    }
    
}
@media screen and (min-width: 365px) and (max-width: 768px){
    span.input-tips{
        color: rgb(241, 47, 47);
        font-size: .6rem;
        float: right;
        margin-right: 1rem;
    }
    .ivu-date-picker {
        width: 36%;
    }
    .ivu-input-wrapper,.ivu-select{
        width: 77%;
        line-height: 3rem;
    }
    p.mobile-skill{
        height: 13rem;
    }
    p.mobile-remark{
        height: 2rem;
    }
    /* 项目经验 */
    .experience{
        margin: 0rem 0rem;
        padding: 1rem 0rem;
        border-bottom: 1px solid #e8e8ea;
    }
    .experience p{
        font-size: .78rem;
    }
    .experience p {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    /* 项目经验 */
    .experience{
        margin: 0rem 0rem;
        padding: 0rem 0rem;
        border-bottom: 1px solid #e8e8ea;
    }
    .experience p{
        font-size: .7rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    button.AddButton {
        width: 90%;
        margin: 1.5rem 1rem;
        margin-bottom: -1rem;
    }
    /* 新增项目表格样式 */
    .project-table {
        width: 100%;
        padding: .4rem;
        border: 1px solid #e8e8ea;
        display: flex;
        flex-wrap: wrap;
        border-radius: 10px;
        margin-top: .68rem;
        padding-bottom: 1rem;
    }
    .project-table .left-cell {
        width: 27%;
        margin-bottom: 0rem;
    }
    .left-cell p.label-span {
        float: right;
        margin-right: .5rem;
        margin-top: .5rem;
    }
    .project-table .right-cell {
        width: 100%;
        margin-bottom: 0rem;
        padding: 0rem .45rem;
    }
    .pro-tab{
        width: 100%;
    }
    /* 使用模板 */
    .img-box {
        padding: .5rem 1rem;
        border-radius: 10px;
    }
    
    .img-box img{
        width: 100%;
        height: 24rem;
        padding: .8rem;
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
    .box-resume-image {
        text-align: unset;
    }
}
</style>

