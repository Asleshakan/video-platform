<template>
  <div class="main-layout">
    <nav class="navbar">
      <div class="logo">PLVIDS</div>
      <div class="logout">
        <button @click="logout">Logout</button>
      </div>
    </nav>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { client } from '../api'
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = async () => {
  const { error } = await client.POST('/auth/token/logout/')

  if (error) {
    return alert('Failed to logout')
  }

  localStorage.removeItem('token_video_platform_7348734')
  router.push('/login')
}
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
</style>
