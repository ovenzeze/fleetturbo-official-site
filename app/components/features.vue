<template>
  <section class="py-16 px-4 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-sm md:text-base font-bold text-gray-900 dark:text-gray-100 mb-4 tracking-widest uppercase">
          {{ features.headline }}
        </h2>
        <h3 class="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          {{ features.title }}
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {{ features.description }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mx-auto">
        <div
          v-for="(item, index) in features.items"
          :key="index"
          class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <div class="flex flex-row justify-center items-center mb-4 py-2">
            <Icon
              :name="item.icon.name"
              :size="item.icon.size"
              :style="{ backgroundColor: item.icon.color }"
              class="bg-gray-100 dark:bg-gray-700 p-2 rounded-full"
            />
            <h4 class="text-xl font-semibold text-gray-800 dark:text-gray-300 ml-3 uppercase">
              {{ item.title }}
            </h4>
          </div>
          <p class="text-gray-600 dark:text-gray-300 text-sm">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: page } = await useAsyncData('features', () => queryContent('/').findOne())
const { features } = page.value
</script>

<style scoped>
/* 如果需要额外的样式，可以在这里添加 */
</style>
