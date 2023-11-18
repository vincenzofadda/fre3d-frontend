<script setup>
import ProductCard from './ProductCard.vue'

const selectedCategory = ref('Personagens')
const categories = [
  'Personagens',
  'Animais',
  'Ferramentas',
  'Anime',
  'Arte',
  'Abstrato',
  'Fantasia',
]

const products = [
  {
    name: 'Renault CB max',
    imageUrl: 'https://media.printables.com/media/prints/627079/images/4970752_b7efbb4f-4432-472a-ab74-962f8bee4cf9_9854ba8c-df7c-4960-8ecc-4e13370cbd76/thumbs/inside/1600x1200/jpg/123224.webp',
    price: '22.99',
    description: 'Detailed miniature model of the Renault CB max, perfect for collectors and automotive enthusiasts.',
  },
  {
    name: 'Dollhouse Furniture Play Set',
    imageUrl: 'https://media.printables.com/media/prints/586149/images/4679183_f0418356-4788-477a-84df-6a17fb71c13b/thumbs/inside/1600x1200/jpg/20230918_125640.webp',
    price: '14.99',
    description: 'A charming collection of dollhouse furniture to furnish a tiny world with creativity and fun.',
  },
  {
    name: 'Loki bust',
    imageUrl: 'https://media.printables.com/media/prints/541252/images/4357708_80834f5c-31b1-43ee-9d32-3acf4987abe0/thumbs/inside/1600x1200/png/screenshot_33.webp',
    price: '39.99',
    description: 'A meticulously crafted bust of the antihero Loki, a must-have for any fan of the trickster god.',
  },
  {
    name: 'Miss Minutes Clock (Loki)',
    imageUrl: 'https://media.printables.com/media/prints/630404/images/4994062_661c04df-4f76-426c-bdfb-c8ec326d1630_4cc22b81-7a32-4807-94cd-3c74dadac586/thumbs/inside/1600x1200/jpg/miss_minutes_clock_1.webp',
    price: '99.99',
    description: 'Bring the Time Variance Authority to your desk with this delightfully unique Miss Minutes clock.',
  },
  {
    name: 'Articulated Spider',
    imageUrl: 'https://media.printables.com/media/prints/618300/images/4905309_285b6172-a025-4b1c-bcbf-7c80dbd807c9_6373d182-a14c-4063-a7e1-2df1f46fae93/thumbs/inside/1600x1200/jpg/img_8231.webp',
    price: '67.99',
    description: 'An eerily lifelike articulated spider model that moves with a frighteningly realistic crawl.',
  },
  {
    name: 'Space Shuttle Endeavour',
    imageUrl: 'https://media.printables.com/media/prints/628010/images/5000912_b5f9dd43-284f-4cca-a3ae-f93dacd4bf8b_9f76039d-11e0-41b3-9d51-686284b4c838/thumbs/inside/1600x1200/jpg/3.webp',
    price: '99.99',
    description: 'Celebrate human space exploration with this intricate model of the Space Shuttle Endeavour.',
  },
  {
    name: 'Tea Light Haunted House',
    imageUrl: 'https://media.printables.com/media/prints/604462/images/4810352_40908cc5-5f77-4c76-b74d-06cd1c44f01f_44263d15-92b9-413c-82e9-ac51ddd30499/thumbs/inside/1600x1200/jpg/pxl_20231006_043607647mp.webp',
    price: '49.99',
    description: 'Add a spooky touch to your decor with this haunted house tea light holder, just in time for Halloween.',
  },
  {
    name: 'DUMMY 13 Printable Jointed Figure',
    imageUrl: 'https://media.printables.com/media/prints/593185/images/4864098_747f5ba4-62e1-40f8-92de-64668b8e2ba5_9314dd72-b7f7-4052-92de-341a2c3d2aa0/thumbs/inside/1600x1200/jpg/landscape.webp',
    price: '19.99',
    description: 'Explore the mechanics of movement with DUMMY 13, the fully jointed and poseable printable figure.',
  },
]

function selectCategory(category) {
  selectedCategory.value = category
}
</script>

<template>
  <div mt-25 w-full flex flex-col>
    <h1 class="text-gradient text-underline mb-5 text-center text-5xl font-bold tracking-wide">
      Top Produtos
    </h1>

    <div mt-5 flex items-center justify-center gap-x-4>
      <button
        v-for="category in categories"
        :key="category"
        class="min-w-150px border border-white rounded-full px-4 py-2 text-lg tracking-wide text-white"
        :class="{ 'bg-primary text-white !border-primary': category === selectedCategory }"
        @click="selectCategory(category)"
      >
        {{ category }}
      </button>
    </div>

    <div grid grid-cols-12 mt-10 gap-4 gap-x-4>
      <ProductCard
        v-for="product in products"
        :key="product"
        :product="product"
      />
    </div>
  </div>
</template>
