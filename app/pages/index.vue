<script setup lang="ts">
const { data: page } = await useAsyncData('index', () =>
  queryContent('/').findOne()
)

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
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
</script>

<template>
  <div class="w-full mx-auto leading-relaxed dark:bg-gray-900 md:px-[6%] lg:px-[15%]">
    <LandingPage />
    <Features id="features" />
    <Services id="services" />
    <!-- <Services2 id="services" /> -->
    <Testimonial
      :title="page.testimonials.title"
      :description="page.testimonials.description"
      :items="page.testimonials.items"
    />
  </div>
</template>

<style scoped>
.hover\:text-transparent:hover {
  color: transparent;
}
.bg-clip-text {
  background-clip: text;
}
</style>
