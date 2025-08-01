<template>
  <form @submit.prevent="submit" class="register-form">
    <h1 >Please register</h1>

    <input v-model="data.username"  placeholder="Username" class="register-input" required>
     <p v-if="errors.username" style="color: red">{{ errors.username }}</p>

    <input v-model="data.firstName"  placeholder="firstName"  class="register-input" required>
      <p v-if="errors.firstName" style="color: red">{{ errors.firstName }}</p>

    <input v-model="data.lastName" placeholder="lastName"  class="register-input" required>
          <p v-if="errors.lastName" style="color: red">{{ errors.lastName }}</p>

    <input v-model="data.email" type="email" placeholder="Email" class="register-input"  required>
      <p v-if="errors.email" style="color: red">{{ errors.email }}</p>

    <input v-model="data.password" type="password"  placeholder="Password"  class="register-input" required>

    <button  type="submit" class="submit-btn" >Submit</button>
  </form>
</template>


<script lang="ts">
import {reactive} from 'vue';
import {useRouter} from "vue-router";
import Cookies from 'js-cookie';

export default {
  name: "Register",
  setup() {
    const data = reactive({
      username: '',
      email: '',
      password: '',
      firstName:'',
      lastName:''
    });

    const errors = reactive({
       username: '',
      email: '',
      password: '',
      firstName:'',
      lastName:''
    })
    const router = useRouter();

    const fetchRestoreUser = async()=>{
      await fetch("/api/csrf/restore")
    }

    const submit = async () => {
      await fetchRestoreUser()

      try{
        const res = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'XSRF-Token': Cookies.get('XSRF-TOKEN')
        },
        body: JSON.stringify(data),
        credentials: 'include'

      });
      if(!res.ok){
        const data = await res.json()
        errors.username = data.errors.username||''
        errors.firstName = data.errors.firstName||''
        errors.lastName = data.errors.lastName||''
        errors.email =data.errors.email||''

      }else{
           await router.push('/login');
      }

      }catch(error){
        console.log(error)
      }
  
    }

    return {
      data,
      errors,
      submit
    }
  }
}
</script>

<style lang="css">
@import "../src/assets/Register.css";
</style>