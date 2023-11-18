<script setup lang="ts">
import Character3D from '../assets/character-3d.svg'

defineOptions({
  name: 'InitialPage',
})

// const router = useRouter()
</script>

<template>
  <div class="min-h-screen flex items-start justify-between px-20 pt-20">
    <!-- Banner Content -->
    <div class="z-10 text-left text-white">
      <h2 class="text-left text-7xl font-bold tracking-wide">
        Explore<br>
        Compre & Venda<br>
        Modelos 3D<br>
        <span class="text-gradient">Extraordinários</span>
      </h2>

      <p class="mb-8 mt-4">
        Molde o Futuro com Sua Criatividade – Venha ser <span class="text-gradient ml-1 text-2xl font-bold underline underline-[#A259FF]">FRE3D!</span>
      </p>
      <div class="justify-lefts flex space-x-4">
        <button class="rounded-lg bg-purple-600 px-6 py-2 font-bold uppercase transition hover:bg-purple-700">
          Explorar
        </button>
        <button class="border border-white rounded-lg bg-transparent px-6 py-2 font-bold uppercase transition hover:bg-white hover:text-black">
          Criar
        </button>
      </div>
    </div>

    <div flex flex-col items-center justify-center>
      <img
        :src="Character3D"
        class="h-64 w-64 object-cover md:h-90 md:w-90"
      >

      <div class="mt-5 flex justify-center px-10 text-white">
        <div class="flex space-x-8">
          <div class="text-center">
            <span class="text-2xl font-bold">9.000+</span>
            <p class="text-sm">
              Modelos 3D
            </p>
          </div>
          <div class="text-center">
            <span class="text-2xl font-bold">200+</span>
            <p class="text-sm">
              Artistas
            </p>
          </div>
          <div class="text-center">
            <span class="text-2xl font-bold">1.300+</span>
            <p class="text-sm">
              Itens vendidos
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.text-gradient {
    background: linear-gradient(90deg, #60429f 0%, #A259FF 50%, #60429f 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
