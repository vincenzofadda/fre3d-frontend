<script setup lang="ts">
interface Props {
  position: number
  creator: {
    name: string
    image: string
    totalSales: string
  }
}

defineProps<Props>()
</script>

<template>
  <div
    class="col-span-12 lg:col-span-3 md:col-span-6"
  >
    <div relative>
      <img
        :src="creator.image"
        class="w-full rounded-lg object-cover"
      >
      <div class="bg-primary absolute left-8 h-13 w-13 rounded-full text-xl font-bold text-white -bottom-2">
        <div h-full w-full flex items-center justify-center>
          {{ position }}º
        </div>
      </div>
    </div>

    <div px-10 text-white>
      <p mt-5 text-lg text-white>
        {{ creator.name }}
      </p>

      <p class="text-md mt-1 text-[#858584]">
        {{ creator.totalSales }}+ cópias vendidas
      </p>
    </div>
  </div>
</template>
