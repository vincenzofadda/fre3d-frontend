<script setup lang="ts">
import HomeBanner from './components/HomeBanner.vue'
import TopProducts from './components/TopProducts.vue'
import TopCreators from './components/TopCreators.vue'

defineOptions({
  name: 'InitialPage',
})

// const router = useRouter()
</script>

<template>
  <div class="flex flex-col items-start justify-between px-20 py-20">
    <HomeBanner />
    <TopProducts />
    <TopCreators />
  </div>
</template>
