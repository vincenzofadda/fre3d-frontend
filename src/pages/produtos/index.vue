<script setup>
import axios from 'axios'
import { API_URL } from '../../config'

import ProductCard from '../components/ProductCard.vue'

const loadingProducts = ref(true)
const loadingCategories = ref(true)

const categories = ref([])
const selectedCategory = ref('')

const products = ref([])
const searchProductQuery = ref('')

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
    })
}

function getProducts() {
  loadingProducts.value = true
  const params = {}

  if (selectedCategory.value)
    params.category = selectedCategory.value

  if (searchProductQuery.value)
    params.productName = searchProductQuery.value

  axios
    .get(`${API_URL}/product`, {
      params,
    })
    .then((response) => {
      loadingProducts.value = false
      products.value = response.data
    })
}

function inputEnterEvent() {
  // Get the input field
  const input = document.getElementById('searchInput')

  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      // Cancel the default action, if needed
      event.preventDefault()
      getProducts()
    }
  })
}

onMounted(() => {
  getProducts()
  getCategories()
  inputEnterEvent()
})
</script>

<template>
  <div w-full flex gap-x-4 px-10 pb-10>
    <div class="max-w-1/5 min-w-1/5 flex flex-col gap-y-2 border-r border-primary">
      <span class="text-gradient mb-2 text-4xl">Categorias</span>
      <div
        v-if="loadingCategories"
        flex flex-col items-start gap-y-2
      >
        <div
          v-for="i in 4"
          :key="i"
          class="h-32px min-w-200px border border-white rounded-full bg-[#222222] px-4"
        />
      </div>

      <button
        v-for="category in categories"
        v-else
        :key="category.id"
        class="text-left hover:text-underline underline-offset-5 hover:underline-offset-5"
        :class="{ 'text-primary text-underline': selectedCategory === category.id }"
        @click="selectCategory(category)"
      >
        {{ category.name }}
      </button>
    </div>

    <div grow pl-4>
      <span class="text-gradient mb-2 text-4xl">Produtos</span>
      <div mt-2 w-fit flex items-center justify-between border border-gray-300 rounded-md bg-white text-black>
        <input
          id="searchInput"
          v-model="searchProductQuery"
          placeholder="Procure pelo nome do produto..."
          autocomplete="off"
          grow p-2 pr-10 outline-none
        >
        <button mr-4 hover:text-primary @click="getProducts()">
          <div i-carbon-search />
        </button>
      </div>

      <div v-if="loadingProducts" grid grid-cols-12 mt-10 w-full gap-6>
        <div
          v-for="i in 4"
          :key="i"
          class="col-span-12 cursor-pointer rounded-xl bg-[#222222] px-6 py-6 lg:col-span-4 md:col-span-6"
        >
          <div h-300px w-300px w-full />
        </div>
      </div>

      <div v-else-if="products.length > 0" grid grid-cols-12 mt-6 gap-6>
        <ProductCard
          v-for="product in products"
          :key="product"
          custom-grid-classes="col-span-12 lg:col-span-4 md:col-span-6"
          :product="product"
        />
      </div>

      <div v-else h-full w-full flex justify-center py-30>
        <span text-gradient text-4xl>Nenhum item encontrado =(</span>
      </div>
    </div>
  </div>
</template>
