<template>
  <section class="py-12 px-4 sm:px-6 lg:px-6 mx-auto">
    <div class="max-w-full mx-auto">
      <div class="text-center mb-12 animate-fade-in animate-duration-1000">
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
      <div class="grid gap-6 gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center">
        <div
          v-for="(service, index) in page.services.plans"
          :key="index"
          class="service-card max-w-[370px] min-w-[350px] hover:shadow-lg hover:z-50 mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xs overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 relative animate-fade-in-left animate-duration-1000"
          :class="`animate-delay-${(index + 1) * 200}`"
        >
          <div class="glowing-border absolute inset-0 rounded-lg border border-transparent"></div>
          <img :src="service.image" :alt="service.title" class="w-full h-48 object-cover dark:brightness-50">
          <div class="p-6">
            <div class="flex flex-row items-center mb-4 justify-center">
              <Icon :name="getIconName(service.title)" class="service-icon text-base text-gray-900 dark:text-blue-400 transition-all duration-300" />
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
</script>

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

.service-card:hover .service-title {
  color: #1e3a8a; /* 更改为你喜欢的颜色 */
  transform: translateY(-2px);
}

.service-card:hover .service-description {
  color: #1e40af; /* 更改为你喜欢的颜色 */
  transform: translateY(-2px);
}


.service-card:hover .service-icon {
  color: #1e40af; /* 更改为你喜欢的颜色 */
  transform: translateY(-2px);
}

/* 深色模式下的 hover 颜色 */
.dark .service-card:hover .service-title {
  color: #93c5fd; /* Tailwind 的蓝色 */
}

.dark .service-card:hover .service-description {
  color: #bfdbfe; /* Tailwind 的淡蓝色 */
}
</style>
