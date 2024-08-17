<template>
  <section class="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 uppercase mb-4">{{ title }}</h2>
      <p class="text-lg text-gray-600 dark:text-gray-400">{{ description }}</p>
    </div>
    <div
      id="testimonials"
      class="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-mt-[calc(var(--header-height)+140px+128px+96px)] justify-center items-center dark:brightness-75"
    >
      <div
        v-for="(testimonial, index) in items"
        :key="index"
        class="cursor-pointer break-inside-avoid w-full max-w-xs md:max-w-md p-6  dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105 hover:border-blue-500 dark:hover:border-blue-400 mx-auto mb-4 md:mb-0 group"
      >
        <div class="flex flex-col items-center mb-6">
          <div class="font-semibold text-base text-gray-800 dark:text-gray-200 text-center flex items-center">
            {{ testimonial.author.name }}</div>
        </div>
        <blockquote class="relative">
          <Icon
            name="ph:quotes"
            class="absolute top-0 left-0 w-8 h-8 text-blue-500 dark:text-blue-400 opacity-50 transform -translate-x-4 -translate-y-4"
          />
          <p class="text-sm font-medium text-gray-700 dark:text-gray-200 mb-4 italic px-4 text-center">
            {{ testimonial.quote }}
          </p>
          <Icon
            name="ph:quotes"
            class="absolute bottom-0 right-0 w-8 h-8 text-blue-500 dark:text-blue-400 opacity-20 transform translate-x-4 translate-y-4 rotate-180"
          />
        </blockquote>
        <footer class="mt-4 w-full">
          <div class="w-full text-sm text-gray-400 dark:text-gray-400 text-center flex flex-row  justify-center items-center">
            <Icon
              :name="getIconByCategory(testimonial.category)"
              :style="{ color: 'rgb(156 163 175)' }"
              class="w-4 h-4 text-gray-600 dark:text-gray-300  mr-1 transition-transform duration-300 group-hover:rotate-12"
            />
            {{ testimonial.author.description }}
          </div>
        </footer>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

defineProps<{
  title: string;
  description: string;
  items: Array<{
    author: {
      name: string;
      description: string;
    };
    category: string;
    quote: string;
  }>;
}>();

function getIconByCategory(category: string): string {
  switch (category) {
    case 'business':
      return 'ph:briefcase-bold';
    case 'technology':
      return 'ph:device-mobile-bold';
    case 'health':
      return 'ph:heartbeat-bold';
    case 'education':
      return 'ph:book-open-bold';
    default:
      return 'ph:star-bold';
  }
}
</script>
