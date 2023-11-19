<script setup>
import Character3D from '../../assets/character-3d.svg'
import ScrollDownAnimation from '../../assets/scroll-down-animation.gif'
</script>

<template>
  <div mb-20 w-full flex flex-col>
    <div w-full flex items-center justify-between>
      <!-- Banner Content -->
      <div class="z-10 text-left text-white">
        <h2 class="text-left text-7xl font-bold tracking-wide">
          Explore<br>
          Compre & Venda<br>
          Modelos 3D<br>
          <span class="text-gradient">Extraordinários</span>
        </h2>

        <p class="mb-8 mt-4">
          Molde o Futuro com Sua Criatividade – Venha ser <span class="text-gradient text-underline ml-1 text-2xl font-bold !underline-offset-5px">FRE3D!</span>
        </p>
        <div class="justify-lefts flex space-x-4">
          <button class="rounded-lg bg-purple-600 px-6 py-2 font-bold uppercase transition hover:bg-purple-700">
            Explorar
          </button>
          <button class="hover:bg-primary hover:border-primary border border-white rounded-lg bg-transparent px-6 py-2 font-bold uppercase transition hover:text-white">
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

    <div w-full flex items-center justify-center>
      <img w-130px :src="ScrollDownAnimation">
    </div>
  </div>
</template>
