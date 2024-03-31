<template>
  <div class="login-container">
    <h1>Login</h1>
    <div v-if="errorMessage">{{ errorMessage }}</div>
    <form @submit.prevent="login">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />

      <button type="submit">Login</button>
    </form>

    <div class="options">
      <router-link to="/forgot-password">Forgot Password?</router-link>
      <router-link to="/register">Create Account</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { client } from '@/api/index'

import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')

const errorMessage = ref('')

const login = async () => {
  const { data, error } = await client.POST('/auth/token/login/', {
    body: {
      password: password.value,
      username: email.value
    }
  })

  if (error) {
    errorMessage.value = error
  } else {
    localStorage.setItem('token_video_platform_7348734', (data as any).auth_token) // generated schema does not have auth_token but it is returned by the API
    router.push('/')
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-weight: bold;
}

input[type='email'],
input[type='password'] {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.options {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
</style>
