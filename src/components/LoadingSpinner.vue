<script setup lang="ts">
interface Props {
  color?: string
  border?: string
  text?: string
  size?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  color: 'border-primary',
  border: 'border-8',
  size: () => ['w-12', 'h-12'],
})
</script>

<template>
  <!-- INNER SHADOW -->
  <div class="relative">
    <div
      class="absolute border-gray-200 rounded-full border-solid"
      :class="[props.size, props.border]"
    />

    <div
      class="animate-spin border-t-transparent rounded-full border-solid shadow-md"
      :class="[props.color, props.size, props.border]"
    />

    <h1 v-if="text" class="absolute left-1/2 top-1/2 transform -translate-1/2">
      {{ text }}
    </h1>
  </div>
</template>
