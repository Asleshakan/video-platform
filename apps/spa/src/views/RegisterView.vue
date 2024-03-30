<script setup lang="ts">
import { reactive } from 'vue'
import { client } from '../api'

import { useRouter } from 'vue-router';

const router = useRouter();

const state = reactive({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    err : ''
})

const register = async () => {
    await client
        .POST('/auth/users/', {
            body: {
                email: state.email,
                password: state.password,
                username: state.email,
                id: 0
            }
        })
        .then(() => {
            router.push('/login')
        })
        .catch((error) => {
            state.err = error
        })
}
</script>

<template>
    <div>
        <h1>Register</h1>
        <div v-if="state.err">{{ state.err }}</div>
        <form @submit.prevent="register">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="state.email" required />

            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" v-model="state.firstName" required />

            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" v-model="state.lastName" required />

            <label for="password">Password:</label>
            <input type="password" id="password" v-model="state.password" required />

            <button type="submit">Register</button>
        </form>

        <p>Already have an account? <router-link to="/login">Login</router-link></p>
    </div>
</template>


<style scoped>
label {
    display: block;
    margin-top: 1rem;
}

input {
    width: 100%;
    padding: 0.5rem;
    margin-top: 0.5rem;
}

button {
    margin-top: 1rem;
    padding: 0.5rem;
}

p {
    margin-top: 1rem;
}

router-link {
    color: blue;
}

router-link:hover {
    text-decoration: underline;
}
</style>