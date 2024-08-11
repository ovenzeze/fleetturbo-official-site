<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div
    v-if="proofs.length"
    class="max-w-3xl mx-auto mt-8 px-4"
  >
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      <div
        v-for="(proof, index) in proofs"
        :key="index"
        class="aspect-square"
      >
        <img
          :src="`https://api.fleetturbo.com${proof.url}`"
          :alt="`Proof ${index + 1}`"
          class="w-full h-full object-cover rounded-lg shadow-sm cursor-pointer"
          @click="openFullscreen(index)"
        >
      </div>
    </div>
  </div>

  <!-- Fullscreen Modal -->
  // eslint-disable-next-line vue/no-multiple-template-root
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
import { ref } from 'vue'

const props = defineProps({
  proofs: {
    type: Array,
    default: () => []
  }
})

const fullscreenImage = ref(null)

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
