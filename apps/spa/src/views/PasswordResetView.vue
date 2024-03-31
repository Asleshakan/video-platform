<template>
  <div>
    <h1>Password Reset</h1>
    <template v-if="!emailSent">
      <div v-if="errorMessage">{{ errorMessage }}</div>
      <form @submit.prevent="resetPassword">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
        <button type="submit">Reset Password</button>
      </form>
    </template>
    <template v-else>
      <p>
        An email has been sent to your email address with instructions on how to reset your
        password.
      </p>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { client } from '../api'

const email = ref('')
const errorMessage = ref('')
const emailSent = ref(false)

const resetPassword = async () => {
  const { error } = await client.POST('/auth/users/reset_password/', {
    body: {
      email: email.value
    }
  })

  if (error) {
    errorMessage.value = error
  } else {
    emailSent.value = true
  }
}
</script>

<style scoped>
h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  font-size: 1.2rem;
}

input {
  padding: 0.5rem;
  font-size: 1rem;
}

button {
  padding: 0.5rem;
  font-size: 1rem;
}

</style>
