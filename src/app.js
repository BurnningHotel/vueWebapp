require('./assets/css/reset.css');
require('./assets/scss/base.scss');
// require('./assets/scss/weui.scss');

import Vue from 'vue'; //vue
import VueRouter from 'vue-router'; //vue-router路由
import RouterMap from './routers'; //路由配置文件
import filters from './filters'
import AppVue from './app.vue';


let App = Vue.extend(AppVue);

Vue.use(VueRouter);

//实例化Vue的filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

// 购物车数字校验
// Vue.filter('numFormat', {

//   write: function(val, oldVal) {
//     var number = Number(val);
//     if (isNaN(number)) {
//       return oldVal;
//     }else{
//       return (number <=0) ? 1 : number
//     }
//   }

// });


//过渡代码放到最下面的时候，有时候并不会执行钩子函数的方法，放到这里就可以了。
Vue.transition('next', {
  beforeEnter: function (el) {
    router.app.changePage = true;
  },
  enter:function(){
  },
  afterEnter: function (el) {
    router.app.changePage = false;
  }
});
Vue.transition('prev', {
  beforeEnter: function (el) {
    router.app.changePage = true;
  },
  enter:function(){
  },
  afterEnter: function (el) {
    router.app.changePage = false;
  }
});



let router = new VueRouter({
    hashbang: true, 
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true,
    linkActiveClass: 'custom-active',
});


RouterMap(router);

router.start(App, '#app');
