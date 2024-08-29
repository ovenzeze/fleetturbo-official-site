<script setup lang="ts">
const props = defineProps<{
  banner: {
    title: string;
    subtitle: string;
    button: {
      text: string;
      icon?: string;
    };
  };
}>();
</script>

<template>
  <section class="mb-16 animate-fade-in-down animate-delay-300 mt-10">
    <div class="relative overflow-hidden rounded-lg bg-gradient-to-r p-8 md:p-16">
      <div class="absolute inset-0 bg-cover bg-center opacity-30 fliter bg-blend-color-dodge" style="background-image: url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=cover&w=1350&q=80');"></div>
      <div class="relative z-10 max-w-4xl mx-auto">
        <h1 class="text-xl md:text-6xl font-bold text-center mb-4 md:mb-6 text-gradient bg-gradient-fire dark:bg-gradient-forest ">{{ banner.title }}</h1>
        <p class="text-xl md:text-2xl text-center mb-6 md:mb-10  text-text-secondary/80">{{ banner.subtitle }}</p>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">

                  <UButton 
          color="gray"
          variant="solid"
          size="lg"
          class="font-bold px-6 py-5 rounded-full"
        >
          <Icon name="ph:phone-call-bold" class="w-5 h-6 bg-gradient-fire" />
          <span class="ml-0 text-gradient bg-gradient-fire text-lg">{{ banner.button.text }}</span>
        </UButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradient 1s ease infinite;
}

.dark .bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradient 5s ease infinite;
}
</style>