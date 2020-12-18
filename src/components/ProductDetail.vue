<template>
  <div>
    <navbar :cart="cart" :cartQty="cartQty" :cartTotal="cartTotal" :showDollarButton="false"></navbar>
    <button @click="$router.go(-1)" class="btn btn-default">&lt; Back</button>
    <h1>Product Detail</h1>
    <div class="row d-flex mb-2 align-items-center" v-if="product">
      <div class="col-7">
        <img class="img-fluid d-block" :src="product.image" :alt="product.name" />
      </div>
      <div class="col">
        <h3 class="text-info">{{ product.name }}</h3>
        <p class="mb-0">{{ product.description }}</p>
        <div class="h5 float-right m-4">
          <price :value="Number(product.price)"> </price>
          <button class="btn btn-info" @click="$emit('add', product)">
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
  name: "ProductDetail",
  props: ["cart", "cartQty", "cartTotal"],
  components: {
    Navbar,
    Price
  },

  data: function(){
    return {
      productId: this.$route.params.id,
      product: null
    }
  },

  mounted: function(){  
    fetch("https://hplussport.com/api/products/id/" + this.productId)
      .then((response) => response.json())
      .then((data) => {
        this.product = data[0];
      });
  }
};
</script>
