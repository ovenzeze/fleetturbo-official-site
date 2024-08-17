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

function getIconByCategory(category: string): string {
  switch (category) {
    case 'business':
      return 'ph:briefcase-bold'
    case 'technology':
      return 'ph:device-mobile-bold'
    case 'health':
      return 'ph:heartbeat-bold'
    case 'education':
      return 'ph:book-open-bold'
    default:
      return 'ph:star-bold'
  }
}

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
    <section class="my-12">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-semibold text-gray-800 dark:text-gray-200">{{ page.testimonials.title }}</h2>
        <p class="text-lg text-gray-600 dark:text-gray-400">{{ page.testimonials.description }}</p>
      </div>
      <div
        id="testimonials"
        class="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-mt-[calc(var(--header-height)+140px+128px+96px)] justify-center items-center dark:brightness-75"
      >
        <div
          v-for="(testimonial, index) in page.testimonials.items"
          :key="index"
          class=" cursor-pointer break-inside-avoid w-full max-w-xs md:max-w-md p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:scale-105 hover:border-blue-500 dark:hover:border-blue-400 mx-auto mb-4 md:mb-0"
        >
          <div class="flex items-center mb-2">
            <div class="text-base font-semibold pl-1 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">
              {{ testimonial.author.name }}
            </div>
          </div>
          <div class="text-sm  flex flex-row items-center mb-2 text-gray-600 dark:text-gray-300 transition-colors duration-300 hover:text-gray-800 dark:hover:text-gray-100">
                        <!-- 图标显示在企业类型前面 -->
                        <Icon
              :name="getIconByCategory(testimonial.category)"
              :class="['mr-1']"
            />
            {{ testimonial.author.description }}
          </div>
          <p class="text-sm leading-relaxed text-gray-800 dark:text-gray-200 transition-colors duration-300 hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 dark:hover:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-green-400">
            {{ testimonial.quote }}
          </p>
        </div>
      </div>
    </section>
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
