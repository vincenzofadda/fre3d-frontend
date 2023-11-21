<script setup lang="ts">
const route = useRoute()

const disabledNavbarRoutes = ['/auth/login', '/auth/criar-conta']

const showNavbar = computed(() => !disabledNavbarRoutes.includes(route.path))
</script>

<template>
  <main class="font-poppins min-h-100vh bg-black text-white">
    <Notifications />

    <Navbar v-if="showNavbar" />
    <RouterView />
  </main>
</template>
