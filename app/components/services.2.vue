<template>
  <section class="py-12 px-4 sm:px-6 lg:px-6">
    <div class="max-w-full mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-sm md:text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
          <Icon name="ph:lightning-bold" class="inline-block mr-2"/> <!-- 添加PH图标 -->
          {{ page.services.headline }}
        </h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          {{ page.services.title }}
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
          {{ page.services.description }}
        </p>
      </div>
      <div class="carousel-container overflow-hidden relative">
        <div
          class="carousel flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }"
        >
          <div
            v-for="(service, index) in page.services.plans"
            :key="index"
            class="carousel-item flex-shrink-0 w-full md:w-1/3"
            @click="goToSlide(index)"
          >
            <div class="service-card max-w-[380px] bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 relative mx-auto">
              <div class="glowing-border absolute inset-0 rounded-lg border border-transparent"></div>
              <img :src="service.image" :alt="service.title" class="w-full h-48 object-cover dark:brightness-50">
              <div class="p-6">
                <div class="flex flex-row items-center mb-4 content-center justify-center">
                  <Icon :name="getIconName(service.title)" class="service-icon text-xl text-gray-900 dark:text-blue-400 transition-all duration-300" />
                  <h3 class="service-title text-base font-medium text-gray-900 dark:text-gray-100 ml-2 transition-all duration-300">
                    {{ service.title }}
                  </h3>
                </div>
                <p class="service-description antialiased text-center text-sm text-gray-500 dark:text-gray-400 transition-all duration-300">
                  Tailored solutions for {{ service.title.toLowerCase() }} to optimize delivery processes and enhance customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

// 从 services.vue 中导入 getIconName 函数
const getIconName = (title) => {
  switch (title) {
    case "Local retail businesses":
      return "ph:storefront";
    case "E-commerce platforms":
      return "ph:shopping-cart";
    case "Wholesale distributors":
      return "ph:truck";
    case "Government & Organizations":
      return "ph:buildings";
    case "3PL & Logistics providers":
      return "ph:package";
    case "Healthcare & Pharmaceuticals":
      return "ph:heartbeat";
    default:
      return "ph:default";
  }
}

// 获取服务数据
const { data: page } = await useAsyncData('services', () => queryContent('/').findOne())

const currentIndex = ref(0)
const visibleCards = ref(process.client ? (window.innerWidth >= 768 ? 3 : 2) : 2)

const updateVisibleCards = () => {
  visibleCards.value = window.innerWidth >= 768 ? 3 : 2
}

const goToSlide = (index) => {
  currentIndex.value = index
}

if (process.client) {
  onMounted(() => {
    window.addEventListener('resize', updateVisibleCards)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateVisibleCards)
  })
}
</script>

<style scoped>
.carousel-container {
  width: 100%;
  position: relative;
}

.carousel-item {
  transition: transform 0.5s ease-in-out;
}
</style>
