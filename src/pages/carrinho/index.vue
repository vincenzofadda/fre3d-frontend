<script setup lang="ts">
import { useCartStore } from '../../stores/cart'
import type { Product } from '../../stores/cart'

import CardProductCard from './components/CardProductCard.vue'

const router = useRouter()
const cartStore = useCartStore()
const products = ref<Product[]>([])

function getAll() {
  products.value = cartStore.getAll()
}

function finish() {
  cartStore.clearAll()
  router.push('/compra-finalizada')
}

onMounted(() => {
  getAll()
})
</script>

<template>
  <div w-full flex flex-col gap-x-4 px-10 pb-10>
    <h2 class="text-gradient text-center text-4xl font-bold tracking-wide text-underline">
      Carrinho
    </h2>

    <div v-if="products.length > 0" mt-5 w-full flex gap-x-4>
      <div class="w-2/3">
        <CardProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          @update-cart="getAll"
        />
      </div>
      <div class="flex grow flex-col justify-between rounded-lg bg-[#222222] pa-5">
        <div flex flex-col>
          <span mb-2 text-xl>Total</span>
          <div
            v-for="(product, index) in products"
            :key="product.id"
            flex gap-x-2
          >
            <span>{{ index + 1 }}. {{ product.name }} - R${{ (parseFloat(product.basePrice) * product.quantity).toFixed(2) }}</span>
          </div>
        </div>

        <button rounded-xl bg-primary py-2 @click="finish">
          Finalizar compra
        </button>
      </div>
    </div>
    <div v-else h-full w-full flex justify-center py-30>
      <span text-gradient text-2xl>Seu carrinho está vazio</span>
    </div>
  </div>
</template>
