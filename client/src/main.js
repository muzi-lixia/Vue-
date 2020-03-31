import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {Button,Container,Aside,Main,MessageBox,Form,FormItem,Input} from 'element-ui'
Vue.use(Button);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
