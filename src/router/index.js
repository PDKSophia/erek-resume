import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/home'                            // 首页

import TemplateRouterPage from '@/components/common/template_router.vue'         // 模板样式页
import TemplateOnePage from '@/components/common/template_one.vue'         // 模板样式页
import TemplateTwoPage from '@/components/common/template_two.vue'         // 模板样式页

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
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
