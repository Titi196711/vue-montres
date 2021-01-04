<template>
  <div>
        {{ msg }}
    <h1>WishList</h1>
    <div class='card-cart-container'>
        <div class='card-container'>
          <div class="card" v-for="item in liked">
            <!-- <img src="./img/curren-business.png" alt="photo de montre"/> -->
            <img v-bind:src="getImg( item.img )" alt="Photos de montres luxes">
            <h3>{{ item.description }}</h3>
            <span>{{ item.price }} €</span>
            <!-- <span>{{ item.img }}<span> -->
           <div class='card-icons'>
             <input type='checkbox' class='like' name='like' v-bind:id='item.id' :value=item.id v-model="liked" @click="setLikedCookie()">
             <label v-bind:for='item.id'>
                <i class="fas fa-heart fa-2x"></i>
             </label>
             <button class='addcart' v-on:click='addToCart(item)'>
                <i class="fas fa-cart-arrow-down fa-2x"></i>
             </button>
          </div>
          </div>
        </div>
         <div v-if="liked.length == []" class='no-result'>
            <h3>Désolé vous n'avez pas de coup de coeur</h3>
          </div>
      </div> 
  </div>
  </div>
</template>

<script>

export default{
  name: "wishlist",
  data () {
  return {
    msg: 'Wish List'
  }
  },
  props: {
    items: {type: Array},
    liked: {type: Array},
    cart: {type: Array}
  },
  created() {
    console.log('Wish List')
  }
}
</script>

<style scoped>

</style>