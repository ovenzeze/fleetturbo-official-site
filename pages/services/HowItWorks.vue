<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue';

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
let intervalId: number | NodeJS.Timeout | null = null;
const containerRef = ref<HTMLElement | null>(null);

const cardWidth = 320; // Width of each card in pixels
const cardSpacing = 40; // Spacing between cards
const visibleCards = ref(3); // Number of cards visible at once, will be updated based on container width
const isTracking = ref(props.source === 'tracking');

const slidePosition = computed(() => {
  const totalWidth = props.howItWorks.steps.length * (cardWidth + cardSpacing) - cardSpacing;
  const containerWidth = containerRef.value ? containerRef.value.offsetWidth : 0;
  const maxSlide = Math.max(0, totalWidth - containerWidth);
  
  let position = activeStep.value * (cardWidth + cardSpacing);
  position = Math.min(position, maxSlide);
  
  return position;
});

const updateVisibleCards = () => {
  if (containerRef.value) {
    const containerWidth = containerRef.value.offsetWidth;
    visibleCards.value = Math.floor((containerWidth + cardSpacing) / (cardWidth + cardSpacing));
  }
};

const animationDuration = 3000; // 动画持续时间，与 setInterval 一致
const progress = ref(0);

const startAnimation = () => {
  intervalId = setInterval(() => {
    nextStep();
    progress.value = 0;
  }, animationDuration);
};

const stopAnimation = () => {
  if (intervalId) clearInterval(intervalId);
};

const animateProgress = () => {
  const startTime = Date.now();
  const animate = () => {
    const currentTime = Date.now();
    progress.value = ((currentTime - startTime) / animationDuration) * 100;
    if (progress.value < 100) {
      requestAnimationFrame(animate);
    }
  };
  requestAnimationFrame(animate);
};

watch(activeStep, () => {
  progress.value = 0;
  animateProgress();
});

const nextStep = () => {
  activeStep.value = (activeStep.value + 1) % props.howItWorks.steps.length;
};

const setActiveStep = (index: number) => {
  activeStep.value = index;
  stopAnimation();
  startAnimation();
  // 添加一个小延迟来重置动画类
  setTimeout(() => {
    const cards = document.querySelectorAll('[data-step]');
    cards.forEach((card, i) => {
      if (i === index) {
        card.classList.remove('animate-out', 'fade-out', 'zoom-out');
        card.classList.add('animate-in', 'fade-in', 'zoom-in');
      } else {
        card.classList.remove('animate-in', 'fade-in', 'zoom-in');
        card.classList.add('animate-out', 'fade-out', 'zoom-out');
      }
    });
  }, 50);
};

onMounted(() => {
  startAnimation();
  animateProgress();
  updateVisibleCards();
  window.addEventListener('resize', updateVisibleCards);
});

onBeforeUnmount(() => {
  stopAnimation();
  window.removeEventListener('resize', updateVisibleCards);
});
</script>

<template>
  <section class="py-16 prose max-w-screen-xl">
    <UBadge color="cyan" class="mb-4 mx-auto max-w-32 flex flex-row  items-center justify-center uppercase" v-if="!isTracking">
      <Icon name="ph:anchor-simple-duotone" class="w-4 h-4 inline-block mr-1" />How It Works</UBadge>
    <div class="text-center mb-16" v-if="!isTracking">
      <h1 class="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-text-primary animate-fade-in-down">
        {{ howItWorks.title }}
      </h1>
      <p class="text-lg md:text-xl text-text-secondary/50 max-w-3xl mx-auto text-wrap content-center capitalize animate-fade-in-up">
        {{ howItWorks.description }}
      </p>
    </div>

    <div class="container mx-auto px-4 overflow-hidden" ref="containerRef">
      <div class="relative w-full" style="height: 500px;">
        <div class="absolute left-0 flex transition-all duration-500 ease-in-out"
             :style="{ transform: `translateX(-${slidePosition}px)` }">
          <div v-for="(step, index) in howItWorks.steps" :key="index" 
               class="flex-shrink-0 w-80 transition-all duration-500 ease-in-out mr-8 last:mr-0"
               :class="[
                 activeStep === index ? 'animate-in fade-in zoom-in duration-300' : 'animate-out fade-out zoom-out duration-300',
                 'animate-fade-in-up'
               ]"
               :style="{ animationDelay: `${index * 150}ms` }"
               :data-step="index">
            <div class="flex flex-col items-center bg-surface dark:bg-surface/50 rounded-lg p-6 h-full">
              <div class="flex items-center justify-center w-28 h-28 rounded-full transition-all duration-500 ease-in-out mb-2"
                   :class="activeStep === index ? 'bg-gradient-to-r from-fuchsia-600 via-sky-800 to-cyan-900 text-white' : ' dark:bg-gray-700/10 text-red-500/20 dark:text-gray-400 brightness-50'">
                <Icon :name="step.mainIcon" class="w-16 h-16" />
              </div>
              <h3 class="text-2xl font-semibold pb-14 text-center transition-all duration-500 ease-in-out "
                  :class="activeStep === index ? 'bg-gradient-to-r from-fuchsia-600 via-sky-900 to-cyan-900 bg-clip-text text-transparent font-bold text-center text-3xl md:text-5xl leading-relaxed' : 'bg-gradient-to-r from-fuchsia-200 via-sky-300 to-cyan-400 bg-clip-text text-transparent font-bold text-center text-3xl md:text-5xl leading-relaxed'">
                {{ step.title }}
              </h3>
              <div class="flex flex-row items-center justify-between gap-4 mb-4">
                <div v-for="subIcon in step.subIcons" :key="subIcon.label" 
                     class="flex flex-col items-center animate-fade-in duration-500 px-2" :class="activeStep === index ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-400'">
                  <Icon :name="subIcon.icon" class="w-9 h-9 mb-2 " />
                  <span class="text-sm text-gray-600 dark:text-gray-300 capitalize">{{ subIcon.label }}</span>
                </div>
              </div>
              <p class="text-sm font-normal text-center transition-all duration-500 ease-in-out mb-6 capitalize"
                 :class="activeStep === index ? 'text-gray-800 dark:text-gray-300' : 'text-gray-600 dark:text-gray-500'">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="flex justify-center mt-8 space-x-4" v-if="!isTracking">
        <button v-for="(step, index) in howItWorks.steps" :key="index"
                @click="setActiveStep(index)"
                class="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out relative overflow-hidden group"
                :class="activeStep === index ? 'bg-gradient-to-br from-fuchsia-500 via-sky-600 to-cyan-700' : 'bg-gray-900/10'">
          <Icon :name="step.mainIcon" 
                class="w-8 h-8 transition-all duration-300 ease-in-out z-10"
                :class="activeStep === index ? 'text-white' : 'text-gray-400'" />
          <svg v-if="activeStep === index" class="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="4" />
            <circle cx="50" cy="50" r="48" fill="none" stroke="white" stroke-width="4" 
                    stroke-dasharray="301.59" :stroke-dashoffset="301.59 - (301.59 * progress / 100)" 
                    transform="rotate(-90 50 50)" />
          </svg>
        </button>
      </div>

      <div class="text-center mt-32 mb-20" v-if="!isTracking">
        <UButton 
          color="gray"
          variant="solid"
          size="lg"
          class="font-bold px-6 py-5 rounded-full"
        >
          <Icon name="ph:circles-three-plus-bold" class="w-5 h-6 bg-gradient-fire" />
          <span class="ml-0 text-gradient bg-gradient-fire text-lg">Get Started with FleetTurbo</span>
        </UButton>
      </div>
    </div>
  </section>
</template>


<style lang="postcss" scoped>
  .prose {
    @apply max-w-none;
  }

  .prose p {
    @apply mb-4;
  }

  .prose h2 {
    @apply text-3xl font-bold mb-4;
  }

  .prose h3 {
    @apply text-2xl font-semibold mb-2;
  }

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.bg-gradient-to-br {
  background-size: 200% 200%;
  animation: gradient 15s ease infinite;
}

.container {
  overflow: hidden;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out forwards;
}

.animate-fade-in-down {
  animation: fadeInDown 0.5s ease-out forwards;
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .container {
    overflow-x: auto;
  }

  .relative {
    width: max-content;
  }
}

circle {
  transition: stroke-dashoffset 0.1s linear;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

button svg {
  animation: rotate 20s linear infinite;
}

@keyframes zoomInOut {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.animate-zoom-in-out {
  animation: zoomInOut 0.5s ease-in-out;
}
</style>