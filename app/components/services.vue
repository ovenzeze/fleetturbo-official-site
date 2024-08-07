<template>
  <section class="py-12 px-4 sm:px-6 lg:px-6 ">
    <div class="max-w-full mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-sm md:text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
          {{ page.services.headline }}
        </h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          {{ page.services.title }}
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
          {{ page.services.description }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-auto md:py-6 cursor-pointer">
        <div
          v-for="(service, index) in page.services.plans"
          :key="index"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 text-left"
        >
          <img
            :src="service.image"
            :alt="service.title"
            class="w-full h-48 object-cover dark:brightness-50"
          >
          <div class="p-6">
            <div class="flex items-center mb-4">
              <i :class="[service.icon, 'text-2xl text-blue-600 dark:text-blue-400']" />
              <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100 ml-2">
                {{ service.title }}
              </h3>
            </div>
            <p class="text-base text-gray-300 dark:text-gray-400">
              Tailored solutions for {{ service.title.toLowerCase() }} to optimize delivery processes and enhance customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: page } = await useAsyncData('services', () => queryContent('/').findOne())
</script>
