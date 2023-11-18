<script setup lang="ts">
interface Props {
  product: {
    name: string
    imageUrl: string
    price: string
    description: string
  }
}

defineProps<Props>()

function openProduct() {

}
</script>

<template>
  <div
    class="col-span-12 cursor-pointer rounded-xl bg-[#222222] px-6 py-6 lg:col-span-3 md:col-span-6"
    @click="openProduct()"
  >
    <div text-white>
      <div relative>
        <img
          :src="product.imageUrl"
          class="h-200px w-full rounded-lg object-cover"
        >
        <div class="bg-primary absolute min-w-100px rounded-full px-4 py-1 text-center font-bold -bottom-4 -right-2">
          R$ {{ product.price }}
        </div>
      </div>

      <p mt-5 text-lg text-white>
        {{ product.name }}
      </p>

      <p class="mt-1 text-sm text-[#858584]">
        {{ product.description }}
      </p>
    </div>
  </div>
</template>
