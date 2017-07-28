import Vue from 'vue'
import Router from 'vue-router'
import Resume from '@/components/resume'

Vue.use(Router)

export default new Router({
  // hashbang: false,
  // history: true,
  routes: [
    {
      path: '/',
      name: 'resume',
      component: Resume
    }
  ]
})
