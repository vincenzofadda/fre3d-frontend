<script setup lang="ts">
function getBackgroundColor(type: string) {
  const colors: Record<string, string> = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
    white: 'bg-white',
  }

  return colors[type] || colors.info
}

function getTextColor(type: string) {
  const colors: Record<string, string> = {
    success: 'text-green-500',
    error: 'text-red-500',
    info: 'text-blue-500',
    warning: 'text-yellow-500',
    white: 'text-black',
  }

  return colors[type]
}

function getIcon(type: string) {
  const icons: Record<string, string> = {
    success: 'i-carbon-checkmark-outline',
    error: 'i-carbon-close-outline',
    info: 'i-carbon-information',
    warning: 'i-carbon-warning',
    white: '',
  }

  return icons[type]
}
</script>

<template>
  <NotificationGroup group="notifications">
    <div
      class="absolute right-0 top-0 z-100 my-6 w-100vw flex items-start justify-end px-4 md:w-600px"
    >
      <div class="max-w-md w-full">
        <Notification
          v-slot="{ notifications: alerts, close, hovering }"
          enter="transform ease-out duration-300 transition"
          enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
          enter-to="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-500"
          leave-from="opacity-100"
          leave-to="opacity-0"
          move="transition duration-500"
          move-delay="delay-300"
        >
          <div
            v-for="alert in alerts"
            :key="alert.id"
            class="mx-auto mt-4 max-w-md w-full flex overflow-hidden rounded-lg bg-white drop-shadow-[0_0_25px_rgba(0,0,0,.2)]"
            @mouseover="hovering(alert.id, true)"
            @mouseleave="hovering(alert.id, false)"
          >
            <div
              class="w-1/10 flex items-center justify-center"
              :class="getBackgroundColor(alert.type)"
            >
              <div
                h-6 w-6 rounded-full text-white
                :class="getIcon(alert.type)"
              />
            </div>

            <div class="w-9/10 px-4 py-2 -mx-3">
              <div class="mx-3">
                <span
                  font-semibold
                  :class="getTextColor(alert.type)"
                >
                  {{ alert.title }}
                </span>
                <p class="text-sm text-gray-600">
                  {{ alert.text }}
                </p>
              </div>
            </div>

            <div class="mx-4 flex items-center justify-center">
              <button @click="close(alert.id)">
                <span class="sr-only">Close</span>
                <ShadowedSvgIcon icon="xmark" />
              </button>
            </div>
          </div>
        </Notification>
      </div>
    </div>
  </NotificationGroup>
</template>
