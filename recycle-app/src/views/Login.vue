<template>
  <main class="login">
      <section class = "form">
          <form class="login" @submit.prevent="login">
               <input id="username" class = "input-field" type="email" placeholder="Email"
               v-model ="login_form.email">
               <br>
                <input id="password" class = "input-field" type="password" placeholder="Password"
                v-model="login_form.password"><span toggle="#password-field" class="fa fa-fw fa-eye-slash field-icon toggle-password"></span>
           <input type="submit" value="Login" id="login-btn" />
          </form>
      

    </section>
  </main>
</template>

<script>
import {ref} from 'vue'
import {useStore} from 'vuex'
export default {
setup (){
    const login_form = ref({});
    const store = useStore();

    const login = () => {
        store.dispatch('login', login_form.value);
    }
    return {
        login_form,
        login
    }
}
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
  background-color: #FFE164;
    box-shadow:10px 10px 10px rgba(0, 0, 0, 0.1);;
  border-radius: 15px;

  font-family: FuturaPT-bold;
   border: none;
   padding: 10px;
   color: white;
   width: 150px;
}
</style>