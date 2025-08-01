<template>
  <form @submit.prevent="submit"  class="login-form">
    <h1 >Please sign in</h1>

    <input v-model="data.email" type="email"  placeholder="Email" class="email-input" required>

    <input v-model="data.password" type="password"  placeholder="Password"  class="password-input"  required>

    <button  type="submit" class="submit-btn" >Sign in</button>
  </form>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const data = reactive({
  email: '',
  password: ''
})

const router = useRouter()

const submit = async () => {
  await fetch('/api/session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(data)
  })

  await router.push('/')
}
</script>

<style lang="css">
@import "../src/assets/Login.css";
</style>
