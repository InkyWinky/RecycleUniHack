<template>
  <main class="login">
      <section class = "form">
          <form class="login">
               <input id="username-reg" class = "input-field" type="text" placeholder="Username">
               <br>
                <input id="password-reg" class = "input-field" type="password" placeholder="Password"><span toggle="#password-field" class="fa fa-fw fa-eye-slash field-icon toggle-password"></span>
                <br>
                 <input id="email-reg" class = "input-field" type="email" placeholder="Email">
               <br>
                 <input id="phone-reg" class = "input-field" type="number" placeholder="Phone number" pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
       required>
       <br>
       <input id="user-address" class = "input-field" type="text" placeholder="Address">
          </form>
       <button id="register-btn" >
  Sign up
</button>
    </section>
  </main>
</template>

<script>
export default {

}
</script>

<style>

#password-reg {
    position: relative;
    right: -8px;
}

@font-face {
    font-family: 'FuturaPT';
    src: url("../assets/futuraPT/FuturaPT-Bold.ttf");
    font-style: normal;
}
#register-btn{
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