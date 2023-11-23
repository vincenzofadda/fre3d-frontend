<script setup lang="ts">
import axios from 'axios'
import { API_URL } from '../../config'
import { vue3dLoader } from "vue-3d-loader";

const route = useRoute()
const loadingProduct = ref(true)
const active3D = ref(true)

const product = ref({
  id: '',
  name: '',
  picture: '',
  basePrice: '',
  modelUrl: '',
  createdAt: '',
  description: '',
  categories: [{
    id: '',
    name: '',
  }],
})

const formattedDate = computed(() => {
  const date = new Date(product.value.createdAt)

  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0') // Month is zero-based
  const year = date.getFullYear()

  const formattedDate = `${day}/${month}/${year}`
  return formattedDate
})

function getProduct() {
  loadingProduct.value = true
  axios
    .get(`${API_URL}/product/id/${route.params.id}`)
    .then((response) => {
      product.value = response.data
      if (response.data.id)
        loadingProduct.value = false
    })
}

function toggle3D() {
  active3D.value = !active3D.value
}

function addToCart() {
  // notify({
  //   type: 'success',
  //   title: 'app.locale-update.title',
  //   text: 'app.locale-update.text',
  //   group: 'notifications',
  // }, 8000)
}

onMounted(() => {
  getProduct()
})

const lights = [
  {
    type: "AmbientLight",
    color: "#A259FF",
  },
  {
    type: "DirectionalLight",
    position: { x: 100, y: 10, z: 100 },
    color: "#A259FF",
    intensity: 0.8,
  },
  {
    type: "DirectionalLight",
    position: { x: 100, y: 10, z: 100 },
    color: "green",
    intensity: 0.8,
  },
  {
    type: "DirectionalLight",
    position: { x: -100, y: 100, z: 100 },
    color: "green",
    intensity: 0.8,
  },
  // {
  //   type: "PointLight",
  //   color: "#000000",
  //   position: { x: 200, y: -200, z: 100 },
  //   intensity: 1
  // },
  {
    type: "HemisphereLight",
    skyColor: "#000",
    groundColor: "#000000",
    position: { x: 200, y: -200, z: 100 }
  }
]

const process = ref(0);
function onProcess(event: any, index: number) {
  process.value = Math.floor((event.loaded / event.total) * 100);
}

</script>

<template>
  <div mt-10 min-h-70vh flex flex-col items-center justify-center px-10>
    <LoadingSpinner v-if="loadingProduct" :size="['w-24', 'h-24']" />
    <div v-else min-h-70vh w-full flex gap-x-5>
      <div class="relative max-h-8/10 min-h-8/10 w-1/2 flex flex-col items-center justify-start gap-y-5">
        <button absolute right-5 top-5 h-12 w-12 flex items-center justify-center rounded-full bg-primary shadow-xl
          @click="toggle3D">
          {{ active3D ? '2D' : '3D' }}
        </button>
        <div v-if="active3D" h-full w-full flex flex-col items-center justify-center gap-y-5 rounded-xl bg-gray relative>
          <LoadingSpinner v-if="process<100" class="absolute top-1/2"/>
          <vue3dLoader 
          :filePath="product.modelUrl" 
          :cameraPosition="{ x: 0, y: -400, z: 0 }" 
          :height="550"
          :width="550" 
          :lights="lights"
          :backgroundAlpha="0.0"
          @process="onProcess"
           />

        </div>
        <img v-else :src="product.picture" h-full w-full rounded-xl object-cover>
      </div>

      <div flex grow flex-col justify-between>
        <div flex flex-col>
          <h1 text-3xl>
            {{ product.name }} -
            <span class="text-gradient mb-5 text-3xl font-bold tracking-wide text-underline">R$ 99.99</span>
          </h1>

          <p class="text-md mb-5 mt-1 text-[#858584]">
            Criado em {{ formattedDate }}
          </p>

          <p>
            {{ product.description }}
          </p>

          <button class="my-5 w-fit rounded-lg bg-primary px-4 py-2 font-bold text-white" @click="addToCart()">
            + Adicionar ao carrinho
          </button>
        </div>

        <div mt-5 flex flex-col>
          <h1 mb-2 text-lg font-bold>
            Tags
          </h1>
          <div flex flex-wrap gap-2>
            <div v-for="category in product.categories" :key="category.id"
              class="flex items-center justify-center rounded-lg bg-[#3B3B3B] px-4 py-1 text-sm">
              {{ category.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
