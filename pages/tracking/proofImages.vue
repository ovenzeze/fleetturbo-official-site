<template>
  <div>
    <div
      v-if="proofs.length"
      class="mt-6 md:mt-16 w-full min-w-[370px] rounded-lg max-h-[500px] overflow-hidden dark:brightness-50 mx-auto"
    >
      <UCarousel
        :items="carouselList"
        :ui="{
      item: 'basis-full',
      container: 'rounded-lg max-h-[400px] overflow-hidden',
      indicators: {
        wrapper: 'relative bottom-0 mt-4'
      }
    }"
        indicators
      >
        <template #default="{ item, index }">
          <img
            :src="item"
            class="w-full h-full object-contain rounded-lg cursor-pointer max-h-[270px]"
            draggable="false"
            @click="openFullscreen(index)"
          >
        </template>
        <template #indicator="{ onClick, page, active }">
          <UButton
            :label="String(page)"
            :variant="active ? 'outline' : 'solid'"
            size="2xs"
            class="rounded-full min-w-6 justify-center bg-sky-900/10"
            @click="onClick(page)"
          />
        </template>
      </UCarousel>
    </div>

    <!-- Fullscreen Modal -->
    <Teleport to="body">
      <div
        v-if="fullscreenImage"
        class="fixed inset-0 bg-black bg-opacity-90 z-[99] flex items-center justify-center"
      >
        <div class="relative w-full h-full flex items-center justify-center">
          <img
            :src="`https://api.fleetturbo.com${fullscreenImage.url}`"
            :alt="`Fullscreen Proof`"
            class="max-w-full max-h-full object-contain"
          >
          <div class="absolute top-4 right-4 flex space-x-2">
            <UButton
              color="gray"
              variant="solid"
              @click="downloadImage"
            >
              <UIcon
                name="i-heroicons-arrow-down-tray"
                class="w-5 h-5 mr-2"
              />
              Download
            </UButton>
            <UButton
              color="gray"
              variant="solid"
              @click="closeFullscreen"
            >
              <UIcon
                name="i-heroicons-x-mark"
                class="w-5 h-5"
              />
            </UButton>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
const props = defineProps({
  proofs: {
    type: Array,
    default: () => []
  }
})

const fullscreenImage = ref(null)
const carouselList = computed(() =>
  props.proofs.map(proof => `https://api.fleetturbo.com${proof.url}`)
)

// 打开全屏图片
function openFullscreen(index) {
  fullscreenImage.value = props.proofs[index]
}

function closeFullscreen() {
  fullscreenImage.value = null
}

function downloadImage() {
  if (fullscreenImage.value) {
    const link = document.createElement('a')
    link.href = `https://api.fleetturbo.com${fullscreenImage.value.url}`
    link.download = `proof_${Date.now()}.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}
</script>
