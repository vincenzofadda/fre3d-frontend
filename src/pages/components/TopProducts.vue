<script setup>
import axios from 'axios'
import { API_URL } from '../../config'
import ProductCard from './ProductCard.vue'

const router = useRouter()
const loadingProducts = ref(true)
const loadingCategories = ref(true)

const categories = ref([])
const selectedCategory = ref('')

const products = ref([])

function selectCategory(category) {
  selectedCategory.value = category.id
  getProducts()
}

function getCategories() {
  axios
    .get(`${API_URL}/category`)
    .then((response) => {
      loadingCategories.value = false
      categories.value = response.data

      selectCategory(categories.value[0])
    })
}

function getProducts() {
  loadingProducts.value = true
  axios
    .get(`${API_URL}/product?category=${selectedCategory.value}`)
    .then((response) => {
      loadingProducts.value = false
      products.value = response.data
    })
}

onMounted(() => {
  getCategories()
})
</script>

<template>
  <div w-full flex flex-col items-center justify-center>
    <h1 class="mb-5 text-center text-5xl font-bold tracking-wide text-white text-underline">
      Top Produtos
    </h1>

    <div v-if="loadingCategories" mt-5 flex flex-wrap items-center justify-center gap-x-4>
      <div
        v-for="i in 6"
        :key="i"
        class="min-w-150px grow border border-white rounded-full bg-[#222222] px-4 py-8"
      />
    </div>

    <div v-else mt-5 flex items-center justify-center gap-x-4>
      <button
        v-for="category in categories"
        :key="category.id"
        class="min-w-150px whitespace-nowrap border border-white rounded-full px-4 py-2 text-lg tracking-wide text-white hover:bg-primary"
        :class="{ 'bg-primary text-white !border-primary': category.id === selectedCategory }"
        @click="selectCategory(category)"
      >
        {{ category.name }}
      </button>
    </div>

    <div v-if="loadingProducts" grid grid-cols-12 mt-10 w-full gap-6>
      <div
        v-for="i in 4"
        :key="i"
        class="col-span-12 cursor-pointer rounded-xl bg-[#222222] px-6 py-6 lg:col-span-3 md:col-span-6"
      >
        <div h-300px w-300px w-full />
      </div>
    </div>

    <div v-else grid grid-cols-12 mt-10 gap-6>
      <ProductCard
        v-for="product in products"
        :key="product"
        :product="product"
      />
    </div>

    <button
      v-if="!loadingProducts"
      class="mt-10 border border-white rounded-full bg-transparent px-20 py-2 text-xl font-bold uppercase text-white transition hover:border-primary hover:bg-primary"
      @click="router.push('/produtos')"
    >
      Ver Mais
    </button>
  </div>
</template>
