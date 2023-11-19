<script setup lang="ts">
// @ts-expect-error this module does not have types
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

defineOptions({
  name: 'Navbar',
})
const router = useRouter()
</script>

<template>
  <nav class="flex items-center justify-between px-10 py-6 text-white">
    <router-link to="/">
      <h1 class="flex gap-x-2 text-3xl font-bold">
        <div i-carbon-3d-cursor text-2xl />
        FRE3D
      </h1>
    </router-link>

    <div flex items-center gap-x-4>
      <button class="hover:text-primary flex gap-x-2 px-6 py-2 text-white transition">
        <div i-carbon-shopping-cart />
        Carrinho
      </button>

      <button
        class="hover:border-primary hover:bg-primary border border-white rounded-lg px-6 py-2 text-white transition"
        @click="router.push('/auth/login')"
      >
        Entrar
      </button>
    </div>
  </nav>
</template>

<style scoped>
</style>
