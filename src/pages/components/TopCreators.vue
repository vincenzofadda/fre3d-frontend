<script setup>
import Creator01 from '../../assets/creators/01.svg'
import Creator02 from '../../assets/creators/02.svg'
import Creator03 from '../../assets/creators/03.svg'
import Creator04 from '../../assets/creators/04.svg'
import Creator05 from '../../assets/creators/05.svg'
import Creator06 from '../../assets/creators/06.svg'
import Creator07 from '../../assets/creators/07.svg'
import Creator08 from '../../assets/creators/08.svg'

import CreatorCard from './CreatorCard.vue'

const creators = [
  {
    name: 'Isabella Monteiro',
    image: Creator01,
    totalSales: '415',
  },
  {
    name: 'Marcela Silva',
    image: Creator02,
    totalSales: '378',
  },
  {
    name: 'Gabriel Rodrigues',
    image: Creator03,
    totalSales: '313',
  },
  {
    name: 'Rute Magalhães',
    image: Creator04,
    totalSales: '291',
  },
  {
    name: 'Anna Freitas',
    image: Creator05,
    totalSales: '232',
  },
  {
    name: 'Alexandre Oliveira',
    image: Creator06,
    totalSales: '187',
  },
  {
    name: 'Sofia Santos',
    image: Creator07,
    totalSales: '116',
  },
  {
    name: 'Clarice Nogueira',
    image: Creator08,
    totalSales: '83',
  },
]
</script>

<template>
  <div mt-25 w-full flex flex-col>
    <h1 class="text-underline mb-5 text-center text-5xl font-bold tracking-wide text-white">
      Top Criadores
    </h1>

    <div grid grid-cols-12 mt-10 gap-6>
      <CreatorCard
        v-for="(creator, index) in creators"
        :key="creator"
        :position="index + 1"
        :creator="creator"
      />
    </div>
  </div>
</template>
