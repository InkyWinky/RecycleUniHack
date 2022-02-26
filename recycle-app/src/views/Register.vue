<template>
  <main class="register">
      <section class = "form">
          <form class="register" @submit.prevent = "register">
               <input id="username-reg" class = "input-field" type="text" placeholder="Username"
               >
               <br>
                <input id="password-reg" class = "input-field" type="password" placeholder="Password"
                v-model="register_form.password" required>
                <span toggle="#password-field" class="fa fa-fw fa-eye-slash field-icon-reg toggle-password"></span>
                <br>
                 <input id="email-reg" class = "input-field" type="email" placeholder="Email"
                  v-model="register_form.email" required>
               <br>
                 <input id="phone-reg" class = "input-field" type="number" placeholder="Phone number"
                  
       required>
       <br>
       <input id="user-address" class = "input-field" type="text" placeholder="Address"
     >
       <br>
       <input type="submit" id="register-btn" value="Sign up" />
</form>
    </section>
  </main>
</template>

<script>
import {ref} from 'vue'
import {useStore} from 'vuex'
export default {
    setup () {
        const register_form = ref ({});
        const store = useStore();

        const register = () =>{
            store.dispatch('register', register_form.value);
        }


        return {
            register_form,
            register
        }
    }

}
</script>

<style>
.field-icon-reg{
transform: translate(-30px);
}
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