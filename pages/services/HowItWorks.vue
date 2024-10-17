<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue';
import { useWindowSize } from '@vueuse/core';

const props = defineProps<{
  howItWorks: {
    title: string;
    description: string;
    steps: Array<{
      stepNumber: number;
      title: string;
      mainIcon: string;
      subIcons: Array<{ icon: string; label: string }>;
      description: string;
    }>;
  };
  source: {
    type: String,
    default: 'services',
    required: false
  }
}>();

const activeStep = ref(0);
const isTracking = ref(props.source === 'tracking');
const { width } = useWindowSize();
const progress = ref(0);

const cardMinWidth = 340; // 卡片最小宽度
const visibleCards = computed(() => {
  return Math.max(1, Math.min(3, Math.floor(width.value / cardMinWidth)));
});

const centerOffset = computed(() => {
  return (visibleCards.value - 1) / 2;
});

const nextStep = () => {
  activeStep.value = (activeStep.value + 1) % props.howItWorks.steps.length;
};

const isMobile = computed(() => {
  return width.value < 768;
});

// 自动切换
let intervalId: number;

const startAutoSwitch = () => {
  intervalId = setInterval(() => {
    nextStep();
  }, 1000 * 20); // 每20秒切换一次
};

const updateProgress = () => {
  progress.value = (progress.value + 1) % 100;
  if (progress.value === 0) {
    nextStep();
  }
  requestAnimationFrame(updateProgress);
};

onMounted(() => {
  if (!isTracking.value) {
    startAutoSwitch();
    updateProgress();
  }
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});

// 监听窗口大小变化，重置 activeStep
watch(visibleCards, () => {
  activeStep.value = 0;
});
</script>

<template>
  <section class="py-16 prose max-w-screen-xl">
    <UBadge v-if="!isTracking" color="cyan"
      class="mb-4 mx-auto max-w-32 flex flex-row items-center justify-center uppercase">
      <Icon name="ph:anchor-simple-duotone" class="w-4 h-4 inline-block mr-1" />How It Works
    </UBadge>
    <div class="text-center mb-16">
      <h1 class="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-text-primary animate-fade-in-down">
        {{ howItWorks.title }}
      </h1>
      <p
        class="text-lg md:text-xl text-text-secondary/50 max-w-3xl mx-auto text-wrap content-center capitalize animate-fade-in-up">
        {{ howItWorks.description }}
      </p>
    </div>

    <div class="relative overflow-hidden">
      <div class="flex transition-transform duration-1000 ease-in-out mx-auto"
        :style="{ transform: `translateX(${(visibleCards.value / 2 - activeStep - 0.5) * 100}%)` }">
        <div v-for="(step, index) in howItWorks.steps" :key="index"
          class="flex-shrink-0 px-4 transition-all duration-500 max-w-[340px]"
          :style="{ width: `${100 / visibleCards}%` }"
          :class="[
            Math.abs(index - activeStep) <= centerOffset ? 'opacity-100' : 'opacity-50',
            index === activeStep ? 'scale-100' : 'scale-90',
          ]">
          <div class="bg-surface/10 dark:bg-surface-dark rounded-lg p-6 h-full flex flex-col items-center justify-center">
            <div class="flex flex-row items-center justify-center w-28 h-28 rounded-full mb-2"
              :class="index === activeStep ? 'bg-gradient-to-r from-fuchsia-600 via-sky-800 to-cyan-900 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-400'">
              <Icon :name="step.mainIcon" class="w-16 h-16" />
            </div>
            <h3 class="text-2xl font-semibold mb-8 text-center"
              :class="index === activeStep ? 'text-primary' : 'text-gray-600 dark:text-gray-400'">
              {{ step.title }}
            </h3>
            <div class="flex justify-center mb-6">
              <div v-for="subIcon in step.subIcons" :key="subIcon.label" class="flex flex-col items-center mx-2" :class="index === activeStep ? 'text-text-primary' : 'text-gray-600 dark:text-gray-400'">
                <Icon :name="subIcon.icon" class="w-9 h-9 mb-2" />
                <span class="text-sm text-gray-600 dark:text-gray-400">{{ subIcon.label }}</span>
              </div>
            </div>
            <p class="text-sm text-center">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-8 space-x-8 w-full">
      <button v-for="(step, index) in howItWorks.steps" :key="index"
        class="w-8 h-8 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out relative overflow-hidden group"
        :class="activeStep === index ? 'bg-gradient-to-br from-fuchsia-500 via-sky-600 to-cyan-700' : 'bg-gray-900/10'"
        :aria-label="`Step ${step.stepNumber}`" :aria-current="activeStep === index"
        @click="activeStep = index">
        <Icon :name="step.mainIcon" class="w-4 h-4 md:w-8 md:h-8 transition-all duration-300 ease-in-out z-10"
          :class="activeStep === index ? 'text-white' : 'text-gray-400'" />
        <svg class="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="4" />
          <circle cx="50" cy="50" r="48" fill="none" :stroke="activeStep === index ? 'white' : 'rgba(255,255,255,0.2)'" stroke-width="4" stroke-dasharray="301.59"
            :stroke-dashoffset="301.59 - (activeStep === index ? progress * 3.0159 : 0)" transform="rotate(-90 50 50)" />
        </svg>
      </button>
    </div>

    <div v-if="!isTracking" class="flex flex-row justify-center items-center mt-40">
      <UButton color="gray" variant="solid" size="lg" class="font-bold px-4 md:px-8 py-3 md:py-5 rounded-full animate-fade-in-down max-w-[280px] md:max-w-[400px]">
        <Icon name="ph:phone-call-bold" class="w-5 h-6 bg-gradient-fire" />
        <span class="ml-0 text-gradient bg-gradient-fire text-base md:text-lg">Get Started with FleetTurbo</span>
      </UButton>
    </div>
  </section>
</template>

<style scoped>
.prose {
  max-width: none;
}
</style>
