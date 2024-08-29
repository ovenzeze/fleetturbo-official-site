<script setup lang="ts">
const props = defineProps<{
  merchant: {
    title: string;
    features: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
}>();
</script>

<template>
  <section class="py-20 background mb-20 porse max-w-screen-xl">
        <div class="text-center mb-32">
      <UBadge color="cyan" class="mb-4 mx-auto max-w-32 flex flex-row  items-center justify-center content-center uppercase">
        <Icon name="ph:head-circuit" class="w-4 h-4 inline-block mr-1" />Tech Support</UBadge>
      <h1 class="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-text-primary">
        {{ merchant.title }}
      </h1>
      <p class="text-lg md:text-xl text-text-secondary/50 max-w-3xl mx-auto">
        {{ merchant?.description }}
      </p>
    </div>
    <div class="container mx-auto px-4">
    
      <div class="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        <div v-for="(feature, index) in merchant.features" :key="index" 
             class=" flex flex-col  pt-6 justify-between  rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-zoom-in-out bg-surface/80 opacity-90">
          <div class="p-6 flex flex-col justify-between h-full">
            <div class="flex items-center justify-center w-16 h-16 bg-gradient-forest  rounded-full mb-6 mx-auto">
              <Icon :name="feature.icon" class=" w-8 h-8 text-text-primary/50" />
            </div>
            <h3 class="text-xl font-semibold text-center mb-4 text-gradient bg-gradient-ocean">
              {{ feature.title }}
            </h3>
            <p class="flex-1 text-text-secondary text-center text-wrap content-center text-gradient bg-gradient-ocean bg-opacity-10">
              {{ feature.description }}
            </p>
          </div>
          <div class="bg-gradient-to-br from-primary via-secondary to-accent h-2 mt-10 "></div>
        </div>
      </div>
      
      <!-- <div class="text-center mt-12">
        <UButton 
          color="primary"
          variant="solid"
          size="lg"
          class="font-semibold"
        >
          Explore Merchant Center
        </UButton>
      </div> -->
    </div>
  </section>
</template>

<style scoped>
@keyframes gradient {
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

.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradient 15s ease infinite;
}
</style>