<script setup lang="ts">
defineProps<{
  services: {
    title: string
    description: string
    coverageAreas: string[]
  }
}>()
</script>

<template>
  <section class="mb-16 prose max-w-screen-xl">
    <div class="text-center mb-10">
      <UBadge color="black" class="mb-6"
        ><Icon name="i-ph-package" class="w-4 h-4 inline-block mr-1" /> OUR SERVICES</UBadge
      >
      <h1 class="text-3xl md:text-3xl lg:text-5xl font-bold mb-10 text-text-primary/80 capitalize">
        {{ services.title }}
      </h1>
      <p class="text-lg md:text-xl max-w-3xl mx-auto mt-10 bg-gradient-to-br from-zinc-700 via-gray-500 to-zinc-500 text-transparent bg-clip-text">
        {{ services?.description }}
      </p>
    </div>

    <div class="max-w-[60rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div
          v-for="area in services.coverageAreas"
          :key="area"
          class="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-surface border border-primary/10 shadow-sm rounded-xl transition-all duration-300 ease-in-out hover:shadow-md"
        >
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