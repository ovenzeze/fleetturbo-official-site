<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne()
)

useSeoMeta({
  title: page.value?.title,
  ogTitle: page.value?.title,
  description: page.value?.description,
  ogDescription: page.value?.description
})

function getCategoryClass(category: string): string {
  switch (category) {
    case 'business':
      return 'text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300'
    case 'technology':
      return 'text-green-600 dark:text-green-400 hover:text-green-500 dark:hover:text-green-300'
    case 'health':
      return 'text-red-600 dark:text-red-400 hover:text-red-500 dark:hover:text-red-300'
    case 'education':
      return 'text-yellow-600 dark:text-yellow-400 hover:text-yellow-500 dark:hover:text-yellow-300'
    default:
      return 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100'
  }
}

const isLoaded = ref(false)

onMounted(() => {
  nextTick(() => {
    isLoaded.value = true
  })
})
</script>

<template>
  <div class="w-full mx-auto leading-relaxed max-w-screen-xl hidescrollbar">
    <Landing :class="{ 'animate-fade-in-up animate-delay-300': isLoaded }" />
    <Features id="features" />
    <Services id="services" />
    <Testimonial
      :title="page.testimonials.title"
      :description="page.testimonials.description"
      :items="page.testimonials.items"
      id="testimonials"
    />
    <!-- 如果有任何图标，更新它们 -->
    <i class="i-ph-star" /> <!-- 示例：星星图标 -->
    <i class="i-ph-info" /> <!-- 示例：信息图标 -->
  </div>
</template>

<style scoped>
.hover\:text-transparent:hover {
  color: transparent;
}
.bg-clip-text {
  background-clip: text;
}

.animate-fade-in-down {
  animation: fade-in-down 1s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out;
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-delay-300 {
  animation-delay: 0.3s;
}

.animate-delay-500 {
  animation-delay: 0.5s;
}

.animate-delay-700 {
  animation-delay: 0.7s;
}

.animate-delay-900 {
  animation-delay: 0.9s;
}

@keyframes fade-in-down {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .animate-fade-in-down,
  .animate-fade-in-up,
  .animate-fade-in {
    animation: none;
  }
}
</style>
