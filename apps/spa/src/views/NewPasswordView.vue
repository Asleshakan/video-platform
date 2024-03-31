<template>
  <div>
    <h1>Reset Password</h1>
    <p>{{ errorMessage }}</p>
    <form @submit.prevent="submitForm">
      <label for="password">New Password:</label>
      <input type="password" id="password" v-model="password" required />
      <button type="submit">Reset</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { client } from '../api'

const router = useRouter()
const route = useRoute()

const uid = route.params.uid as string
const token = route.params.token as string

const errorMessage = ref('')

const password = ref('')

const submitForm = async () => {
  const { error } = await client.POST('/auth/users/reset_password_confirm/', {
    body: {
      new_password: password.value,
      uid: uid,
      token: token
    }
  })

  if (error) {
    errorMessage.value = error
    return
  }

  router.push({ name: 'login' })
}
</script>
