<script setup lang="ts">
// @ts-expect-error this module does not have types
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { useUserStore } from '../stores/user'

defineOptions({
  name: 'Navbar',
})

const userStore = useUserStore()

const loggedIn = computed(() => !!userStore.token)
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
      <button class="flex gap-x-2 px-6 py-2 text-white transition hover:text-primary" @click="router.push('/carrinho')">
        <div i-carbon-shopping-cart />
        Carrinho
      </button>

      <button
        v-if="!loggedIn"
        class="border border-white rounded-lg px-6 py-2 text-white transition hover:border-primary hover:bg-primary"
        @click="router.push('/auth/login')"
      >
        Entrar
      </button>
      <div cursor-pointer hover:text-underline>
        {{ userStore.user?.name }}
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>
