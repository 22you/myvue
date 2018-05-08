import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Model from '@/components/v-model'
import Friend from '@/components/FriendList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vmodel',
      name: 'test1',
      component: Model
    },
    {
      path: '/friend',
      name: 'friend',
      component: Friend
    }
  ]
})
