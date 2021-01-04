<template>
  <div>
        {{ msg }}
      <h1>Page d'accueil</h1>
      <h2>Articles</h2>
      <input type='search' v-model='searchKey' id='search' placeholder="Rechercher..." autocomplete="off"/>
      <span v-if="searchKey && filtrelist.length >= 1">
        {{ filtrelist.length }} résultat<span v-if="filtrelist.length >= 2">s</span>
      </span>
      <div class='card-cart-container'>
        <div class='card-container'>
          <div class="card" v-for="item in filtrelist">
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
         <div v-if="filtrelist.length == []" class='no-result'>
            <h3>Désolé aucun résultat trouvé</h3>
          </div>
      </div> 
  
  </div>
</template>

<script>
import products from './product.json'
import usersettings from './usersettings'
import wishlist from './wishlist'

export default {
  name: "accueil",
  data () {
  return {
     msg: 'Accueil',
     items: products,
     searchKey: '',
     liked: [],
     cart: []
     }
  },
    created () {
    console.log('Accueil')
  },
  methods: {
        getImg(pic) {
          // req = require(pic)
         return require(`@/assets/img/${pic}`)           
          },
          setLikedCookie() {
            document.addEventListener('input', () => {
              $cookies.set('Liketiti', JSON.stringify(this.liked))
            })
          },
          addToCart(produit) {
            this.cart.push({
              id: produit.id,
              img: produit.img,
              description: produit.description,
              price: produit.price,
              quantity: 1
            })
          }
  },
  // computed: {
  //   filtrelist(){
  //     return this.items.filter((item) => {
  //       return item.description.toLowerCase().includes(this.searchKey.toLowerCase());
  //     })
  //   }
  // }
  computed: {
    filtrelist(){
      return this.items.filter( item => item.description.toLowerCase().includes(this.searchKey.toLowerCase()))
    },
    getLikedCookie(){
      let cookieValue = JSON.parse($cookies.get('Liketiti'))
      cookieValue == null ? this.liked = [] : this.liked = cookieValue
    }
  },
  mounted() {
    this.getLikedCookie
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
#search{
  color: green;
  font-size: 1.4em;
}
</style>