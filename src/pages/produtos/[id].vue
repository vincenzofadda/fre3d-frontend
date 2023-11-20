<script setup lang="ts">

</script>

<template>
  <div mt-10 min-h-100vh flex flex-col px-10>
    <div w-full flex gap-x-5>
      <div class="min-h-80vh min-w-1/2 flex flex-col items-center justify-start gap-y-5">
        <div class="h-8/10 w-full flex items-center justify-center rounded-xl bg-primary">
          produto images/ 3D model
        </div>
        <div w-full flex gap-x-5>
          <div
            v-for="i in 5" :key="i"
            class="h-75px w-75px flex items-center justify-center rounded-xl bg-primary text-sm"
          >
            imagem {{ i }}
          </div>
        </div>
      </div>

      <div flex grow flex-col>
        <h1 text-3xl>
          Product name -
          <span class="text-gradient mb-5 text-3xl font-bold tracking-wide text-underline">R$ 99.99</span>
        </h1>
        <p class="text-md mb-5 mt-1 text-[#858584]">
          Criado por João Victor
        </p>
        <p>
          Lorem ipsum dolor sit amet. Et sunt assumenda aut voluptas velit et sint aspernatur sit voluptatem possimus. Et eaque provident vel repellendus delectus non laborum dolor qui veniam doloribus et commodi nemo quo sunt labore qui eligendi Quis. Ut facere consequatur sit explicabo aliquam et natus aliquam non galisum suscipit in necessitatibus animi cum officia rerum sed recusandae sint. Qui provident animi eos labore internos est quibusdam voluptatibus est magni dolores.
          sit doloribus explicabo non nulla corrupti ea adipisci temporibus sed eveniet ullam. Et molestiae reiciendis est dignissimos delectus At assumenda cupiditate sed tenetur iste et magnam maiores et incidunt dolorem non quis repudiandae?
        </p>

        <div my-5 flex flex-col>
          <h1 mb-2 text-xl font-bold>
            Tags
          </h1>
          <div flex flex-wrap gap-2>
            <div
              v-for="category in 8" :key="category"
              class="flex items-center justify-center rounded-lg bg-[#3B3B3B] px-4 py-1 text-sm"
            >
              Categoria {{ category }}
            </div>
          </div>
        </div>

        <button
          my-5 w-fit rounded-lg bg-primary px-4 py-2 font-bold text-white
        >
          + Adicionar ao carrinho
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
