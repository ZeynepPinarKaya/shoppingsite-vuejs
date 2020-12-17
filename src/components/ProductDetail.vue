<template>
  <div>
    <navbar :cart="cart" :cartQty="cartQty" :cartTotal="cartTotal"></navbar>
    <h1>Product Detail</h1>
    <div
      class="row d-flex mb-3 align-items-center"
      v-for="(item, index) in products"
      :key="item.id"
      :data-index="index"
    >
      <div class="col-4">
        <img class="img-fluid d-block" :src="item.image" :alt="item.name" />
      </div>
      <div class="col">
        <router-link to="/product-detail"
          ><h3 class="text-info">{{ item.name }}</h3></router-link
        >
        <p class="mb-0">{{ item.description }}</p>
        <div class="h5 float-right m-4">
          <price :value="Number(item.price)"> </price>
          <button class="btn btn-info" @click="$emit('add', item)">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Price from "./Price.vue";

export default {
  name: "products",
  props: ["products", "cart", "cartQty", "cartTotal"],
  components: {
    Navbar,
    Price
  },
};
</script>
