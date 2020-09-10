import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import VuePaginate from "vue-paginate";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";
import store from "./store";
import "./assets/style/index.scss"; //global css

Vue.use(ElementUI);
Vue.use(VuePaginate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
