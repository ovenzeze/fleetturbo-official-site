<template>
  <section class="pricing-section min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 overflow-hidden">
    <div class="container mx-auto px-4 py-12">
      <h2
        class="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800 dark:text-white transform transition-all duration-700 ease-out"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-10 opacity-0': !isVisible }"
      >
        Simple Pricing & Transparency
      </h2>
      <p
        class="text-xl text-center mb-12 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transform transition-all duration-700 ease-out"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-10 opacity-0': !isVisible }"
        :style="{ transitionDelay: '100ms' }"
      >
        We believe in straightforward pricing without hidden costs. Our transparent fee structure ensures you always know what you're paying for.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(feature, index) in pricingFeatures"
          :key="index"
          class="pricing-card bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-out transform"
          :class="{
            'translate-y-0 opacity-100': isVisible,
            'translate-y-20 opacity-0': !isVisible,
            'hover:shadow-2xl hover:-translate-y-2': isVisible
          }"
          :style="{ transitionDelay: `${index * 100 + 200}ms` }"
        >
          <div class="p-6">
            <div class="w-16 h-16 mx-auto mb-4 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center">
              <Icon :name="feature.icon" class="text-3xl text-primary-600 dark:text-primary-300" />
            </div>
            <h3 class="text-2xl font-semibold mb-3 text-center text-gray-800 dark:text-white">{{ feature.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300 text-center">{{ feature.description }}</p>
          </div>
        </div>
      </div>

      <div
        class="mt-16 text-center transform transition-all duration-700 ease-out"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-10 opacity-0': !isVisible }"
        :style="{ transitionDelay: '800ms' }"
      >
        <h3 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Want to see how much you can save?</h3>
        <UButton
          color="primary"
          size="xl"
          class="font-bold px-8 py-4 text-lg"
          @click="showPricingCalculator = true"
        >
          Try Our Pricing Calculator
        </UButton>
      </div>
    </div>

    <!-- Pricing Calculator Modal -->
    <UModal v-model="showPricingCalculator">
      <div class="p-6">
        <h3 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Pricing Calculator</h3>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Package Weight (kg)</label>
          <UInput v-model="packageWeight" type="number" placeholder="Enter weight" />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Destination</label>
          <USelect v-model="destination" :options="destinationOptions" />
        </div>
        <div class="mb-6">
          <UButton color="primary" class="w-full" @click="calculatePrice">Calculate Price</UButton>
        </div>
        <div v-if="calculatedPrice" class="text-center">
          <p class="text-xl font-bold text-gray-800 dark:text-white">Estimated Price: ${{ calculatedPrice.toFixed(2) }}</p>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">Save up to 40% compared to standard rates!</p>
        </div>
      </div>
    </UModal>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const pricingFeatures = [
  {
    icon: 'ph:currency-circle-dollar',
    title: 'No Minimum Requirement',
    description: 'Start shipping with us regardless of your volume. We cater to businesses of all sizes.'
  },
  {
    icon: 'ph:tag',
    title: 'Simple Flat Fee Structure',
    description: 'Our straightforward pricing means no surprises on your bill. Pay only for what you use.'
  },
  {
    icon: 'ph:gas-pump',
    title: 'No Fuel Surcharge',
    description: 'We absorb fuel price fluctuations, so your shipping costs remain stable and predictable.'
  },
  {
    icon: 'ph:repeat',
    title: 'Three Delivery Attempts',
    description: 'We go the extra mile with three delivery attempts included in our standard service.'
  },
  {
    icon: 'ph:piggy-bank',
    title: 'Up to 40% Savings',
    description: 'Our efficient operations allow us to offer competitive rates, saving you up to 40% on shipping.'
  },
  {
    icon: 'ph:star',
    title: 'Annual Credit Bonus',
    description: 'Earn credits for your loyalty and consistent business. The more you ship, the more you save.'
  }
]

const isVisible = ref(false)
const showPricingCalculator = ref(false)
const packageWeight = ref(0)
const destination = ref('')
const calculatedPrice = ref(0)

const destinationOptions = [
  { label: 'Domestic', value: 'domestic' },
  { label: 'International', value: 'international' }
]

const calculatePrice = () => {
  // This is a simplified calculation for demonstration purposes
  const baseRate = destination.value === 'domestic' ? 5 : 15
  const weightRate = 0.5
  calculatedPrice.value = baseRate + (packageWeight.value * weightRate)
}

const checkVisibility = () => {
  const element = document.querySelector('.pricing-section')
  if (element) {
    const rect = element.getBoundingClientRect()
    const windowHeight = window.innerHeight || document.documentElement.clientHeight
    isVisible.value = rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2
  }
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
.pricing-card {
  transition: all 0.3s ease;
}

@media (prefers-reduced-motion: reduce) {
  .pricing-card, h2, p {
    transition: none !important;
    transform: none !important;
  }
}
</style>
