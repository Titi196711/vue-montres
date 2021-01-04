<template>
<div  id='navbar'>
    <nav>
      <div class="nav-container">
        <div id="logo">
            <router-link :to="{name: 'accueil'}">
                 <img src="../assets/img/wish-logo-800.png" alt="logo" />
            </router-link>
        </div>
        <ul id="icons">
          <li>
            <router-link :to="{name: 'usersettings'}">
                <i class="fas fa-user"></i>
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'wishlist'}">
                <i class="fas fa-heart"></i>
                <span id="nav-notif"></span>
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'shoppingcart'}">
                <i class="fas fa-shopping-cart"></i>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- <router-view/> -->
    </nav>
</div>
</template>

<script>
export default {
    name: "navbar"
};
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
nav {
  padding: 0.8rem 2.4rem;
  background: rgba(255, 255, 255, 0.97);
  /* position: fixed; */
  width: 100%;
  z-index: 2;
  box-shadow: 0 2px 4px -3px rgba(31, 31, 31, 0.2);
}
nav .nav-container {
  display: flex;
  /* justify-content: space-between; */
  align-items: baseline;
  max-width: 90%;
  margin: 0 auto;
}
nav .nav-container #logo {
  width: 20%;
   height: 32px;
}
nav .nav-container #logo img {
  display: flex;
  align-items: flex-start;   
  height: 100%;
}
nav .nav-container #icons {
  width: 80%;
  display: flex;
  font-size: 24px;
  justify-content: flex-end;
}
 nav .nav-container #icons li {
  margin-left: calc(5% + 8px);
}
nav .nav-container #icons i {
  transition: 0.25s;
  cursor: pointer;
}
nav .nav-container #icons i:hover {
  color: rgba(34, 34, 34, 0.65);
}

</style>