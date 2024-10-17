<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { usePageWording } from '../../composables/pageWording';
import ServiceBanner from './serviceBanner.vue';
import ServiceList from './ServiceList.vue';
import PackageHandling from './PackageHandling.vue';
import PlatformIntegration from './PlatformIntegration.vue';
import MerchantFeatures from './MerchantFeatures.vue';
import HowItWorks from './HowItWorks.vue';
import PackageTracking from './PackageTracking.vue';

const { services } = usePageWording();

const components = ref([
  { component: ServiceBanner, isVisible: true },
  { component: ServiceList, isVisible: false },
  { component: PackageHandling, isVisible: false },
  { component: PlatformIntegration, isVisible: false },
  { component: MerchantFeatures, isVisible: false },
  { component: HowItWorks, isVisible: false },
  { component: PackageTracking, isVisible: false },
]);

const checkVisibility = () => {
  components.value.forEach((item, index) => {
    const element = document.querySelector(`.component-${index}`)
    if (element) {
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight || document.documentElement.clientHeight
      item.isVisible = rect.top <= windowHeight / 2 && rect.bottom >= 0
    }
  })
}

onMounted(() => {
  checkVisibility()
  window.addEventListener('scroll', checkVisibility)
  window.addEventListener('resize', checkVisibility)
  setTimeout(() => {
    components[0].isVisible = true
  }, 1000)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkVisibility)
  window.removeEventListener('resize', checkVisibility)
})
</script>

<template>
  <div class="services-page flex flex-col gap-y-10 items-center justify-center">
    <ServiceBanner :is-visible="components[0].isVisible" :banner="services.banner" />
    <ServiceList :is-visible="components[1].isVisible" :services="services.ourServices" />
    <PackageHandling :is-visible="components[2].isVisible" :parcelDimensions="services.parcelDimensions" />
    <PlatformIntegration :is-visible="components[3].isVisible" :integration="services.effortlessAPIIntegrations" />
    <MerchantFeatures :is-visible="components[4].isVisible" :merchant="services.merchantCenterBackend" />
    <HowItWorks :is-visible="components[5].isVisible" :howItWorks="services.howItWorks" />
    <!-- <PackageTracking :is-visible="components[6].isVisible" :tracking="services.packageTracking" /> -->
  </div>
</template>
