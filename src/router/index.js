import Vue from 'vue';
import Router from 'vue-router';
import GoodsList from './../view/GoodsList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/goods/:goodsId/user/:userId',
      name: 'GoodsList',
      component: GoodsList
    }
  ]
});
