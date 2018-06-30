import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/index'                                    // 首页

import FormMajorPage from '@/components/form_major'                           // 用户选择专业
import SamplePage from '@/components/sample'                                  // 案例页
import ChooseTemplatePage from '@/components/choose_template'                 // 用户选择模板
import IntroducePage from '@/components/page/introduce'                       // 介绍
import UserSkillPage from '@/components/page/user_form_skill'                 // 完善用户信息

import TemplateRouterPage from '@/components/common/template_router'          // 模板样式页
import TemplateOnePage from '@/components/common/template_one'                // 模板1
import TemplateTwoPage from '@/components/common/template_two'                //模板2
import TemplateThreePage from '@/components/common/template_three'            // 模板3
import TemplateFourPage from '@/components/common/template_four'              // 模板4
import TemplateFivePage from '@/components/common/template_five'              // 模板5
import TemplateSixPage from '@/components/common/template_six'                // 模板6
import TemplateSevenPage from '@/components/common/template_seven'            // 模板7
import TemplateEightPage from '@/components/common/template_eight'            // 模板8
import TemplateNinePage from '@/components/common/template_nine'              // 模板9
import UserTemplateRouterPage from '@/components/template/tem_router'         // 使用模板路由页
import UserTemplateOnePage from '@/components/template/tem_one'               // 使用模板1
import UserTemplateTwoPage from '@/components/template/tem_two'               // 使用模板2

// 后台管理
import ManageCtrlRoutePage from '@/components/manage/m_route'
import ManageCtrlLoginPage from '@/components/manage/m_index'
import ManageCtrlHomePage from '@/components/manage/m_home'

import ManageUserRoutePage from '@/components/manage/user/route'
import ManageUserListPage from '@/components/manage/user/userlist'
import ManageUserAccessPage from '@/components/manage/user/useraccess'

import ManageSettingRoutePage from '@/components/manage/setting/route'
import ManageSettingThemePage from '@/components/manage/setting/theme'
import ManageSettingInfoPage from '@/components/manage/setting/infomation'
import ManageSettingLinkPage from '@/components/manage/setting/otherlink'
 
Vue.use(Router)

export default new Router({
  routes: [
    {
      // 首页
      path: '/',
      name: 'index',
      component: IndexPage
    },
    {
      // 介绍
      path: '/introduce',
      name: 'introduce',
      component: IntroducePage
    },
    {
      // 快速了解
      path: '/form_major',
      name: 'form_major',
      component: FormMajorPage
    },
    {
      // 案例
      path: '/sample',
      name: 'sample',
      component: SamplePage
    },
    {
      // 用户选择简历
      path: '/choose_template',
      name: 'choose_template',
      component: ChooseTemplatePage
    },
    {
      // 用户补充信息
      path: '/user_form_skill',
      name: 'user_form_skill',
      component: UserSkillPage
    },
    {
      // 模板
      path: '/example',
      name: 'example',
      component: TemplateRouterPage,
      redirect : '/example/exam_one',
      children : [
        {
          path: 'exam_one',
          name: 'exam_one',
          component: TemplateOnePage,
        },
        {
          path: 'exam_two',
          name: 'exam_two',
          component: TemplateTwoPage,
        },
        {
          path: 'exam_three',
          name: 'exam_three',
          component: TemplateThreePage,
        }
        ,
        {
          path: 'exam_four',
          name: 'exam_four',
          component: TemplateFourPage,
        }
        ,
        {
          path: 'exam_five',
          name: 'exam_five',
          component: TemplateFivePage,
        }
        ,
        {
          path: 'exam_six',
          name: 'exam_six',
          component: TemplateSixPage,
        }
        ,
        {
          path: 'exam_seven',
          name: 'exam_seven',
          component: TemplateSevenPage,
        },
        {
          path: 'exam_eight',
          name: 'exam_eight',
          component: TemplateEightPage,
        },
        {
          path: 'exam_nine',
          name: 'exam_nine',
          component: TemplateNinePage,
        }
      ]
    },
    {
      // 模板
      path: '/user',
      name: 'user',
      component: UserTemplateRouterPage,
      redirect : '/user/template_one',
      children : [
        {
          path: 'template_one',
          name: 'template_one',
          component: UserTemplateOnePage,
        },
        {
          path: 'template_two',
          name: 'template_two',
          component: UserTemplateTwoPage,
        },
      ]
    },
    // 后台管理
    {
      path : '/manage',
      name : 'ManageCtrlRoutePage',
      component : ManageCtrlRoutePage,
      redirect : '/manage/Login',
      children : [
        {
          path : 'Login',
          name : 'ManageCtrlLoginPage',
          component : ManageCtrlLoginPage
        },
        {
          path : 'home',
          name : 'ManageCtrlHomePage',
          component : ManageCtrlHomePage,
          children : [
            {
              path : 'user',
              name : 'user',
              component : ManageUserRoutePage,
              children : [
                {
                  path : 'list',
                  name : 'ManageUserListPage',
                  component : ManageUserListPage 
                },
                {
                  path : 'access',
                  name : 'ManageUserAccessPage',
                  component : ManageUserAccessPage 
                },
              ]
            },
            {
              path : 'setting',
              name : 'setting',
              component : ManageSettingRoutePage,
              children : [
                {
                  path : 'theme',
                  name : 'ManageSettingThemePage',
                  component : ManageSettingThemePage 
                },
                {
                  path : 'webinfo',
                  name : 'ManageSettingInfoPage',
                  component : ManageSettingInfoPage 
                },
                {
                  path : 'otherlink',
                  name : 'ManageSettingLinkPage',
                  component : ManageSettingLinkPage 
                },
              ]
            }
          ]
        },
      ]
    },
  ]
})
