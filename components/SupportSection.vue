<!-- SupportSection.vue -->
<template>
  <section class="support-section min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 transition-colors duration-300 overflow-hidden">
    <div class="container mx-auto px-4 py-12">
      <h2
        class="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800 dark:text-white transform transition-all duration-700 ease-out"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-10 opacity-0': !isVisible }"
      >
        Customer Support
      </h2>
      <p
        class="text-xl text-center mb-12 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transform transition-all duration-700 ease-out delay-100"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-10 opacity-0': !isVisible }"
      >
        At FleetTurbo, we're committed to providing exceptional support. Our dedicated team is here to assist you every step of the way.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(support, index) in supportOptions"
          :key="index"
          class="support-card bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-out transform"
          :class="{
            'translate-y-0 opacity-100': isVisible,
            'translate-y-20 opacity-0': !isVisible,
            'hover:shadow-2xl hover:-translate-y-2': isVisible
          }"
          :style="{ transitionDelay: `${index * 100 + 200}ms` }"
        >
          <div class="p-6">
            <div class="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-700 rounded-full flex items-center justify-center">
              <Icon :name="support.icon" class="text-3xl text-blue-600 dark:text-blue-300" />
            </div>
            <h3 class="text-2xl font-semibold mb-3 text-center text-gray-800 dark:text-white">{{ support.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300 text-center mb-4">{{ support.description }}</p>
            <div class="text-center">
              <UButton
                color="primary"
                variant="soft"
                class="mt-2"
                @click="contactSupport(support)"
              >
                Contact {{ support.title }}
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Support Contact Modal -->
    <UModal v-model="showContactModal">
      <div v-if="selectedSupport" class="p-6">
        <h3 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Contact {{ selectedSupport.title }}</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">{{ selectedSupport.contactInfo }}</p>
        <div class="flex justify-end">
          <UButton color="primary" @click="showContactModal = false">
            Close
          </UButton>
        </div>
      </div>
    </UModal>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const supportOptions = [
  {
    title: '24/7 Support',
    description: 'Our support team is available round the clock to assist you with any queries or issues.',
    icon: 'ph:clock',
    contactInfo: 'Call us anytime at +1 (800) 123-4567 or email support@fleetturbo.com'
  },
  {
    title: 'Live Chat',
    description: 'Get instant answers to your questions through our live chat service on our website.',
    icon: 'ph:chat-circle-text',
    contactInfo: 'Visit our website and click on the chat icon in the bottom right corner to start a conversation.'
  },
  {
    title: 'Email Support',
    description: 'Send us an email for non-urgent inquiries. We aim to respond within 24 hours.',
    icon: 'ph:envelope',
    contactInfo: 'Email us at support@fleetturbo.com'
  }
]

const isVisible = ref(false)
const showContactModal = ref(false)
const selectedSupport = ref(null)

const checkVisibility = () => {
  const element = document.querySelector('.support-section')
  if (element) {
    const rect = element.getBoundingClientRect()
    const windowHeight = window.innerHeight || document.documentElement.clientHeight
    isVisible.value = rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2
  }
}

const contactSupport = (support) => {
  selectedSupport.value = support
  showContactModal.value = true
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
.support-card {
  transition: all 0.3s ease;
}

@media (prefers-reduced-motion: reduce) {
  .support-card, h2, p {
    transition: none;
  }
  .support-card:hover {
    transform: none;
  }
}
</style>
