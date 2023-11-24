<script setup lang="ts">
import Robot from '../assets/robot.svg'
</script>

<template>
  <div class="h-70vh w-full flex flex-col items-center justify-center gap-x-4 px-10 pb-10">
    <img :src="Robot" w-200px>
    <h1 class="text-gradient mt-5 text-5xl tracking-wide">
      Compra finaliza
    </h1>
    <h1 class="text-gradient mt-5 pb-5 text-5xl tracking-wide">
      Obrigado!!
    </h1>
  </div>
</template>

<style scoped>

</style>
