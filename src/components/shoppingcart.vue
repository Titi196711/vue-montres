<template>
  <div>
        {{ msg }}
      <h1>Shopping Cart</h1>
    <div class='card-cart-container'>
        <div class='card-container'>
          <div class="card" v-for="item in cart">
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
         <div v-if="cart.length == []" class='no-result'>
            <h3>Désolé votre panier est vide</h3>
          </div>
      </div> 
  </div>
</template>

<script>

export default {
  name: "shoppingcart",
  data () {
  return {
    msg: 'Shopping Cart'
    }
  },
  props: {
    items: {type: Array},
    liked: {type: Array}
  },
  created() {
    console.log('Shopping Cart Page')
  }
}
</script>

<style scoped>
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.card-cart-container{
  width: 100%;
  /* height: 30%; */
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  margin: 1%;
}
.card-container input{
  display: none;
}
.card {
  background-color: gray;
  border-color: black;
  margin: 1%;
  padding: 1%;
  width: 300px;
}
.card img{
  width: 100%;
}
.card-icons{
  display: flex;
  justify-content: space-around;
}
.card-icons button{
    background: none;
    border: none;
}
.card-icons :hover{
  color: blue;
}
.card-icons input:checked + label i {
  color: red;
}
</style>