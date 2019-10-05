import Vue from 'vue'
import Router from 'vue-router'
import StreamPage from "@/views/StreamPage.vue";
import Polls from "@/views/Polls.vue";
import OmOss from "@/views/OmOss.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: StreamPage
    },
    {
      path: '/polls',
      name: 'Polls',
      component: Polls
    },
    {
      path: '/om-oss',
      name: 'OmOss',
      component: OmOss
    },
  ]
})
