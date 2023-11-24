<script setup lang="ts">
import { useCartStore } from '../../../stores/cart'
import type { Product } from '../../../stores/cart'

interface Props {
  product: Product
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'updateCart'): void
}>()
const router = useRouter()
const cartStore = useCartStore()

function removeProduct() {
  cartStore.removeProduct(props.product.id)
  emit('updateCart')
}
</script>

<template>
  <div class="relative flex cursor-pointer gap-x-5 rounded-lg bg-[#222222] pa-5" @click="router.push(`/produtos/${product.id}`)">
    <img :src="product.picture" w-150px rounded-lg object-contain>
    <div flex flex-col justify-between>
      <div flex flex-col>
        <div text-lg>
          {{ product.name }}
          <span ml-2 text-2xl text-primary>x {{ product.quantity }}</span>
        </div>
        <span>{{ product.description }}</span>
      </div>
      <span text-underline underline-offset-4>R$ {{ product.basePrice }}</span>
    </div>

    <button
      absolute right-1 top-1 rounded-full pa-4 hover:text-red
      @click.stop="removeProduct()"
    >
      <div i-carbon-trash-can />
    </button>
  </div>
</template>
