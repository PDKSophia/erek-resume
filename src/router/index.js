import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/index'                                    // 首页

import TemplateRouterPage from '@/components/common/template_router'          // 模板样式页
import TemplateOnePage from '@/components/common/template_one'                // 模板1
import TemplateTwoPage from '@/components/common/template_two'                // 模板2

import FormMajorPage from '@/components/form_major'                           // 用户选择专业
import SamplePage from '@/components/sample'                                  // 案例页

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
        }
      ]
    }
  ]
})
