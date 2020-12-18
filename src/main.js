import Vue from "vue";
import VueRouter from "vue-router";


import App from "./App.vue";
import "bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";

import "animate.css/animate.compat.css";
import "bootstrap/dist/css/bootstrap.css";

import {
  faShoppingCart,
  faDollarSign
} from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart, faDollarSign);

import Products from "./components/Products.vue";
import Checkout from "./components/Checkout.vue";
import ProductDetail from "./components/ProductDetail.vue";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: "*",
      component: Products
    },
    {
      path: "/checkout",
      component: Checkout
    },
    {
      path: "/product-detail/:id",
      component: ProductDetail
    },
  ]
});

new Vue({
  render: h => h(App),
  router 
}).$mount("#app");
