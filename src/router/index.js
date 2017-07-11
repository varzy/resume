import Vue from 'vue'
import Router from 'vue-router'
import Resume from '@/components/resume'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'resume',
      component: Resume
    }
  ]
})
