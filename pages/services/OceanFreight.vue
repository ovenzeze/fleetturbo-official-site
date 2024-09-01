<template>
  <section class="ocean-freight-section">
    <div class="container mx-auto px-4 py-12"
         :class="{ 'opacity-0 translate-y-10': !isVisible, 'opacity-100 translate-y-0': isVisible }"
         style="transition: all 0.7s ease-out;">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Ocean Freight Services</h2>
      <!-- 其他内容 -->
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const checkVisibility = () => {
  const element = document.querySelector('.ocean-freight-section')
  if (element) {
    const rect = element.getBoundingClientRect()
    const windowHeight = window.innerHeight || document.documentElement.clientHeight
    isVisible.value = rect.top <= windowHeight / 2 && rect.bottom >= 0
  }
}

onMounted(() => {
  checkVisibility()
  window.addEventListener('scroll', checkVisibility)
  window.addEventListener('resize', checkVisibility)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkVisibility)
  window.removeEventListener('resize', checkVisibility)
})
</script>
