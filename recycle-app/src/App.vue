<template>
  <div id="nav">
  <i id = "logout-icon" v-if="$store.state.user" @click="$store.dispatch('logout')" class="fa-solid fa-right-from-bracket"></i>
  <div id="logo-heading" 
   v-if="$route.path === '/'"
   >
    <img class="logo" src="../public/Trashy_White_Icon.png" alt="Trashy logo">
  <h1>Trashy.</h1>
  
  </div>
  <div id="logo-heading-right" 
   v-if="$route.path !== '/'"
   >
    <img class="logo-left" src="../public/Trashy_White_Icon.png" alt="Trashy logo">
  <h1 id="heading-right">Trashy.</h1>
  </div>
    <router-link to="/">Home</router-link> |   
    <router-link to="/login">Login</router-link> |    
    <router-link to="/register">Register</router-link>
    
  </div>
  <router-view/>
</template>


  


<style>
#logout-icon{
  float: right;
}
.navigation{
margin-top:70px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

#nav {
  padding: 30px;
  
}
#logo-heading-right{
  height:200px;
}
#nav a {
  font-family: "Helvetica", sans-serif;
  color: white;
  opacity: 0.6;
  text-decoration: none;
}

.logo-left {
  width:60px;
  margin-top: 10%;
  transform: translate(-100px, 0)
}
#heading-right{
 transform: translate(60px, -110px)
}

.logo{
  width:60px;
  margin-top: 10%;
}
#nav a.router-link-exact-active {
  color: white;
  opacity: 1;
  text-decoration: underline;
  font-weight: bold
}

</style>
