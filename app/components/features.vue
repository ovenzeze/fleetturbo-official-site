<template>
  <section class="py-16 px-4 bg-gray-50 dark:bg-gray-900">
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

      <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10 mx-auto cursor-pointer justify-center">
        <div
          v-for="(item, index) in features.items"
          :key="index"
          class="feature-card max-w-[380px] min-w-[350px] bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg  hover:z-50 relative overflow-hidden mx-auto"
        >
          <!-- 流动光晕效果的边框 -->
          <div class="glowing-border absolute inset-0 rounded-lg border border-transparent"></div>

          <div class="flex flex-row justify-center items-center mb-4 py-2">
            <Icon
              :name="item.icon.name"
              :size="item.icon.size"
              :style="{ backgroundColor: item.icon.color }"
              class="bg-gray-100 dark:bg-gray-700 p-2 rounded-full"
            />
            <h4 class="feature-title text-base font-semibold text-gray-800 dark:text-gray-300 ml-2 transition-all duration-300">
              {{ item.title }}
            </h4>
          </div>
          <p class="feature-description text-sm text-center text-zinc-500 dark:text-gray-300 antialiased leading-relaxed transition-all duration-300">
            {{ item.description }}
          </p>
        </div>
      </div>
  </section>
</template>

<style scoped>
.glowing-border {
  position: relative;
  z-index: 1;
}

.glowing-border::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, rgba(0, 255, 255, 0.5), rgba(255, 0, 255, 0.5), rgba(255, 255, 0, 0.5));
  z-index: -1;
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.glowing-border:hover::before {
  opacity: 1;
  animation: glow 5s linear infinite;
}

@keyframes glow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.feature-card:hover .feature-title {
  color: #1e3a8a; /* 更改为你喜欢的颜色 */
  transform: translateY(-2px);
}

.feature-card:hover .feature-description {
  color: #1e40af; /* 更改为你喜欢的颜色 */
  transform: translateY(-2px);
}
</style>

<script setup>
const { data: page } = await useAsyncData('features', () => queryContent('/').findOne())
const { features } = page.value
</script>
