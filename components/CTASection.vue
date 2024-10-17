<!-- CTASection.vue -->
<template>
  <section class="cta-section min-h-screen flex items-center justify-center  text-white transition-colors duration-300 overflow-hidden bg-gradient-sunset">
    <div class="container mx-auto px-4 py-12 relative">
      <!-- Background decorative elements -->
      <div class="absolute inset-0 overflow-hidden opacity-20 w-[100vw] h-[70vh]">
        <div v-for="i in 5" :key="i"
             class="absolute bg-white rounded-full"
             :style="{
               width: `${Math.random() * 300 + 50}px`,
               height: `${Math.random() * 300 + 50}px`,
               top: `${Math.random() * 100}%`,
               left: `${Math.random() * 100}%`,
               animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`,
               animationDelay: `${Math.random() * 2}s`
             }"
        ></div>
      </div>

      <div class="relative z-10">
        <h2
          class="text-4xl md:text-6xl font-bold text-center mb-6 transform transition-all duration-700 ease-out delay-100 text-gradient bg-gradient-forest leading-snug tracking-wide"
          :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-10 opacity-0': !isVisible }"
        >
          Ready to <br /> Revolutionize Your Logistics?
        </h2>
        <p
          class="text-xl md:text-xl text-center mb-20 max-w-3xl mx-auto transform transition-all duration-700 ease-out delay-100 leading-relaxed tracking-wide text-gradient bg-gradient-zinc"
          :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-10 opacity-0': !isVisible }"
        >
          Join thousands of businesses that have transformed their shipping process with FleetTurbo. Start your journey towards efficient, cost-effective logistics today.
        </p>

        <div
          class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 transform transition-all duration-700 ease-out delay-200"
          :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-10 opacity-0': !isVisible }"
        >
          <UButton
            color="white"
            size="xl"
            class="font-bold px-8 py-4 text-lg"
            @click="showDemoModal = true"
          >
            Request a Demo
          </UButton>
          <UButton
            color="white"
            variant="outline"
            size="xl"
            class="font-bold px-8 py-4 text-lg"
            @click="showContactModal = true"
          >
            Contact Sales
          </UButton>
        </div>

        <!-- <div
          class="mt-16 text-center transform transition-all duration-700 ease-out delay-300"
          :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-10 opacity-0': !isVisible }"
        >
          <p class="text-lg mb-4">Trusted by industry leaders</p>
          <div class="flex flex-wrap justify-center items-center gap-8">
            <img v-for="(logo, index) in trustLogos" :key="index" :src="logo" :alt="`Trusted company ${index + 1}`" class="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity duration-300">
          </div>
        </div> -->
      </div>
    </div>

    <!-- Demo Request Modal -->
    <UModal v-model="showDemoModal">
      <div class="p-6">
        <h3 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Request a Demo</h3>
        <form @submit.prevent="submitDemoRequest" class="space-y-4">
          <UInput v-model="demoForm.name" label="Full Name" required />
          <UInput v-model="demoForm.email" label="Email" type="email" required />
          <UInput v-model="demoForm.company" label="Company Name" required />
          <UTextarea v-model="demoForm.message" label="Message" rows="4" />
          <UButton type="submit" color="primary" class="w-full">Submit Request</UButton>
        </form>
      </div>
    </UModal>

    <!-- Contact Sales Modal -->
    <UModal v-model="showContactModal">
      <div class="p-6">
        <h3 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Contact Sales</h3>
        <p class="mb-4 text-gray-600 dark:text-gray-300">Our sales team is ready to help you find the perfect solution for your business.</p>
        <div class="space-y-4">
          <div>
            <strong>Email:</strong>
            <a href="mailto:sales@fleetturbo.com" class="text-primary-600 dark:text-primary-400 hover:underline">sales@fleetturbo.com</a>
          </div>
          <div>
            <strong>Phone:</strong> +1 (800) 987-6543
          </div>
          <div>
            <strong>Hours:</strong> Monday - Friday, 9am - 6pm EST
          </div>
        </div>
      </div>
    </UModal>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const showDemoModal = ref(false)
const showContactModal = ref(false)

const demoForm = ref({
  name: '',
  email: '',
  company: '',
  message: ''
})

const trustLogos = [
  '/path-to-logo1.png',
  '/path-to-logo2.png',
  '/path-to-logo3.png',
  '/path-to-logo4.png',
  '/path-to-logo5.png'
]

const checkVisibility = () => {
  const element = document.querySelector('.cta-section')
  if (element) {
    const rect = element.getBoundingClientRect()
    const windowHeight = window.innerHeight || document.documentElement.clientHeight
    isVisible.value = rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2
  }
}

const submitDemoRequest = () => {
  // Here you would typically send the form data to your backend
  console.log('Demo request submitted:', demoForm.value)
  // Reset form and close modal
  demoForm.value = { name: '', email: '', company: '', message: '' }
  showDemoModal.value = false
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
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@media (prefers-reduced-motion: reduce) {
  .cta-section * {
    animation: none !important;
    transition: none !important;
  }
}
</style>
