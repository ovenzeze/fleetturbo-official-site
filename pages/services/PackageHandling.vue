<script setup lang="ts">
const packageSizes = [
  { name: 'Small', dimensions: '30 x 25 x 10 cm', weight: 'Up to 2 kg' },
  { name: 'Medium', dimensions: '50 x 40 x 20 cm', weight: 'Up to 5 kg' },
  { name: 'Large', dimensions: '70 x 60 x 30 cm', weight: 'Up to 10 kg' },
  { name: 'Extra Large', dimensions: '100 x 80 x 40 cm', weight: 'Up to 20 kg' },
];

defineProps<{
  parcelDimensions: {
    title: string;
    description: string;
  };
}>();
</script>

<template>
  <section class="mb-16">
        <div class="text-center mb-24">
      <!-- <UBadge color="primary" class="mb-4"> <Icon name="ph:rocket-launch" class="w-4 h-4 inline-block mr-1" /></UBadge> -->
      <h1 class="text-3xl md:text-4xl lg:text-6xl font-bold mb-10 text-text-primary">
        {{ parcelDimensions.title }}
      </h1>
      <p class="text-base md:text-lg max-w-3xl mx-auto gradient-text">
        {{ parcelDimensions.description }}
      </p>
    </div>

    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div v-for="size in packageSizes" :key="size.name"
          class="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 border border-primary/10 shadow-sm rounded-xl">
          <div class="inline-flex justify-center items-center">
            <span class="size-2 inline-block bg-primary rounded-full me-2"></span>
            <span class="text-xs font-semibold uppercase text-secondary">{{ size.name }} Package</span>
          </div>
          <div class="text-center">
            <Icon :name="`i-ph-package${size.name === 'Medium' ? '-light' : size.name === 'Large' || size.name === 'Extra Large' ? '-bold' : ''}`" class="h-16 w-16 mx-auto text-primary" />
          </div>
          <dl class="flex flex-col items-center divide-y divide-primary/20 pt-6">
            <dt class="pb-6 w-full text-center">
                <span class="block text-sm font-semibold text-secondary/50">Dimensions</span>
                <span class="block text-sm text-secondary">{{ size.dimensions }}</span>
            </dt>
            <dd class="pt-6 w-full text-center">
              <span class="block text-sm font-semibold text-secondary/50">Weight</span>
              <span class="block text-sm text-secondary">{{ size.weight }}</span>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>