<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <navbar/>
    <router-view/>


  </div>
</template>

<script>
import navbar from './components/navbar'
import accueil from './components/accueil'
import usersettings from './components/usersettings'
import wishlist from './components/wishlist'
import shoppingcart from './components/shoppingcart'
import products from './components/product.json'

export default {
  name: 'App',
  components: {
    navbar,
    accueil,
    usersettings,
    wishlist,
    shoppingcart
  },
  data () {
    return {
 
    }
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  padding-top: 10px;
}
</style>
