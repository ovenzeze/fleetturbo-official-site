<script setup lang="ts">
defineProps<{
  services: {
    title: string;
    description: string;
    coverageAreas: string[];
  };
}>();
</script>

<template>
  <section class="mb-16">
    <h2 class="text-3xl font-bold text-center mb-4  bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent w-full">{{ services.title }}</h2>
    <p class="text-lg text-center mb-8 max-w-3xl mx-auto text-secondary">{{ services.description }}</p>
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div v-for="area in services.coverageAreas" :key="area"
          class="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-surface border border-primary/10 shadow-sm rounded-xl transition-all duration-300 ease-in-out hover:shadow-md">
          <div class="inline-flex justify-center items-center">
            <span class="size-2 inline-block bg-primary rounded-full me-2"></span>
            <span class="text-xs font-semibold uppercase text-secondary">Coverage Area</span>
          </div>
          <div class="text-center">
            <h3 class="text-2xl sm:text-3xl font-semibold text-primary">
              {{ area }}
            </h3>
          </div>
          <dl class="flex justify-center items-center">
            <dt>
              <span class="block text-sm text-secondary">Efficient delivery</span>
            </dt>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>