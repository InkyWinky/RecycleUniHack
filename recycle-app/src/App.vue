<template>
  <div id="nav">
    <img class="logo" src="../public/Trashy_White_Icon.png" alt="Trashy logo">
  <h1>Trashy.</h1>
    <router-link to="/">Home</router-link> |   
    <router-link to="/login">Login</router-link> |    
    <router-link to="/register">Register</router-link>
  </div>
  <router-view/>
</template>

<style>
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

#nav a {
  font-family: "Helvetica", sans-serif;
  color: white;
  opacity: 0.6;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: white;
  opacity: 1;
}

</style>
