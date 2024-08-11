<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div
    v-if="proofs.length"
    class="mx-auto mt-8 w-full min-w-[370px] rounded-lg max-h-[300px] overflow-scroll dark:brightness-50"
  >
    <UCarousel
      v-slot="{ item }"
      arrows
      :items="carouselList"
      :ui="{
        item: 'basis-full',
        indicators: {
          wrapper: 'relative bottom-0 mt-4'
        }
      }"
    >
      <img
        :src="item"
        class="w-[100%] h-[100%] object-contain rounded-lg cursor-pointer max-h-[300px]"
        draggable="false"
      >
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

// function openFullscreen(index) {
//   fullscreenImage.value = props.proofs[index]
// }

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
