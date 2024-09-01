<template>
  <section class="services-section min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 overflow-hidden">
    <div class="container mx-auto px-4 py-12">
      <h2
        class="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800 dark:text-white transform transition-all duration-700 ease-out"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-10 opacity-0': !isVisible }"
      >
        Additional Services
      </h2>
      <p
        class="text-xl text-center mb-12 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transform transition-all duration-700 ease-out delay-100"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-10 opacity-0': !isVisible }"
      >
        FleetTurbo is not just a delivery solution provider; we are experts in your entire fulfillment chain.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="service-card bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-out transform"
          :class="{
            'translate-y-0 opacity-100': isVisible,
            'translate-y-20 opacity-0': !isVisible,
          }"
          :style="{ transitionDelay: `${index * 100 + 200}ms` }"
        >
          <div class="h-48 overflow-hidden">
            <img :src="service.image" :alt="service.title" class="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110">
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">{{ service.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ service.description }}</p>
            <UButton
              color="primary"
              variant="soft"
              class="w-full justify-center"
              @click="toggleServiceDetails(index)"
            >
              {{ service.expanded ? 'Show Less' : 'Learn More' }}
            </UButton>
          </div>
          <div
            v-show="service.expanded"
            class="p-6 bg-gray-100 dark:bg-gray-700 transition-all duration-500 ease-in-out"
            :class="{ 'max-h-[1000px] opacity-100': service.expanded, 'max-h-0 opacity-0': !service.expanded }"
          >
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ service.fullDescription }}</p>
            <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4">
              <li v-for="feature in service.features" :key="feature">{{ feature }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const services = ref([
  {
    title: 'Ocean Freight',
    description: 'Efficient container services for international shipping needs.',
    image: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    fullDescription: 'Our Ocean Freight service offers reliable and cost-effective solutions for your international shipping needs. We handle everything from single containers to full shiploads.',
    features: [
      'FCL (Full Container Load) and LCL (Less than Container Load) options',
      'Real-time tracking and visibility',
      'Customs clearance assistance',
      'Flexible scheduling and routing'
    ],
    expanded: false
  },
  {
    title: 'Air Freight',
    description: 'Fast and reliable cross-border parcels via air transportation.',
    image: 'https://images.unsplash.com/photo-1490291268787-39288ca029c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    fullDescription: 'When speed is of the essence, our Air Freight service ensures your parcels reach their destination quickly and securely, no matter where in the world they need to go.',
    features: [
      'Express and economy air freight options',
      'Door-to-door delivery service',
      'Handling of dangerous and perishable goods',
      'Advanced tracking and security measures'
    ],
    expanded: false
  },
  {
    title: 'Self Storage',
    description: 'Comprehensive storage solutions including receiving, storage, and outbound services.',
    image: 'https://www.storagesense.com/wp-content/uploads/11IMG_0089_b-min-1-2048x1365.jpg',
    fullDescription: 'Our Self Storage service offers flexible solutions for businesses of all sizes. From short-term storage to long-term warehousing, we\'ve got you covered.',
    features: [
      'Secure, climate-controlled storage facilities',
      'Inventory management systems',
      'Pick and pack services',
      'Bulk order and pallet outbound processing'
    ],
    expanded: false
  }
])

const isVisible = ref(false)

const checkVisibility = () => {
  const element = document.querySelector('.services-section')
  if (element) {
    const rect = element.getBoundingClientRect()
    const windowHeight = window.innerHeight || document.documentElement.clientHeight
    isVisible.value = rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2
  }
}

const toggleServiceDetails = (index) => {
  services.value[index].expanded = !services.value[index].expanded
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

<style scoped>
.service-card {
  transition: all 0.3s ease;
}

@media (prefers-reduced-motion: reduce) {
  .service-card, h2, p {
    transition: none;
  }
  .service-card:hover {
    transform: none;
  }
}
</style>
