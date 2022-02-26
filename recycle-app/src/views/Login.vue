<template>
  <main class="login">
      <section class = "form">
          <form class="login">
               <input id="username" class = "input-field" type="text" placeholder="Email or Username">
               <br>
                <input id="password" class = "input-field" type="password" placeholder="Password"><span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
          </form>
       <button id="login-btn" >
  Login
</button>
    </section>
  </main>
</template>

<script>
export default {

}
</script>

<style>
.field-icon {
  transform: translate(-30px);
}
#password {
    position: relative;
    right: -8px;
}

@font-face {
    font-family: 'FuturaPT';
    src: url("../assets/futuraPT/FuturaPT-Bold.ttf");
    font-style: normal;
}
#login-btn{
  background-color: #FF6464;
    box-shadow:10px 10px 10px rgba(0, 0, 0, 0.1);;
  border-radius: 15px;

  font-family: FuturaPT-bold;
   border: none;
   padding: 10px;
   color: white;
   width: 150px;
}
</style>