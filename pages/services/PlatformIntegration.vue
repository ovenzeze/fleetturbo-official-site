<script setup lang="ts">
import { ref } from '#imports'

const integrations = ref({
  title: "Seamless Sales Integrations",
  description: "One-click native integrations with Salesforce, HubSpot, Salesloft, Outreach, Pipedrive, Dynamics, and more. Plus over 6,000+ Apps, CRMs, & automation tools with Zapier.",
  supportedPlatforms: [
    { name: "Pipedrive", icon: "pipe", color: "#1a7b84" },
    { name: "Salesforce", icon: "cloud", color: "#00a1e0" },
    { name: "HubSpot", icon: "circles-three-plus", color: "#ff7a59" },
    { name: "Dynamics365", icon: "microsoft-outlook-logo", color: "#0078d4" },
    { name: "Zapier", icon: "puzzle-piece", color: "#ff4a00" },
    { name: "Slack", icon: "slack-logo", color: "#4a154b" },
    { name: "LinkedIn", icon: "linkedin-logo", color: "#0a66c2" },
    { name: "Gmail", icon: "google-logo", color: "#ea4335" }
  ]
})

const isHovered = ref(false)
</script>

<template>
  <section class="container mx-auto px-4 py-10">
    <div class="text-center mb-20">
      <UBadge color="rose" class="mb-4"> <Icon name="ph:rocket-launch" class="w-4 h-4 inline-block mr-1" /> INTEGRATIONS</UBadge>
      <h1 class="text-3xl md:text-4xl lg:text-6xl font-bold mb-10 text-text-primary">
        {{ integrations.title }}
      </h1>
      <p class="text-base md:text-lg text-text-secondary/50 max-w-3xl mx-auto">
        {{ integrations.description }}
      </p>
    </div>

    <div class="relative integration-container" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
      <!-- Central logo -->
      <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <div class=" rounded-full p-4">
          <img src="/images/logo-icon-only-transparent.png" alt="Seamless.AI Logo" class="w-10 h-10 md:w-16 md:h-16" />
        </div>
      </div>

      <!-- Integration icons -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-20 md:mb-96">
        <div v-for="(platform, index) in integrations.supportedPlatforms.slice(0, 4)" :key="`top-${index}`" 
             class="flex flex-col items-center transform transition-all duration-300 hover:scale-110 integration-item">
          <Icon :name="`ph:${platform.icon}`" 
                :class="`w-12 h-12 md:w-16 md:h-16 transition-colors duration-300 ${isHovered ? 'brightness-100' : 'brightness-75'}`"
                :style="{ color: platform.color }" />
          <span class="mt-2 text-sm text-gray-600 dark:text-gray-300">{{ platform.name }}</span>
        </div>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div v-for="(platform, index) in integrations.supportedPlatforms.slice(4)" :key="`bottom-${index}`" 
             class="flex flex-col items-center transform transition-all duration-300 hover:scale-110 integration-item">
          <Icon :name="`ph:${platform.icon}`" 
                :class="`w-12 h-12 md:w-16 md:h-16 transition-colors duration-300 ${isHovered ? 'brightness-100' : 'brightness-75'}`"
                :style="{ color: platform.color }" />
          <span class="mt-2 text-sm text-gray-600 dark:text-gray-300">{{ platform.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.integration-container {
  --connection-color: var(--color-border);
}

.integration-item {
  position: relative;
}

.integration-item::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 50%;
  border: 2px solid var(--connection-color);
  border-width: 0 0 2px 2px;
  transform: translate(-50%, -50%) rotate(45deg);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.integration-container:hover .integration-item::before {
  opacity: 1;
}

.integration-item:nth-child(1)::before,
.integration-item:nth-child(2)::before {
  border-width: 0 0 2px 0;
  transform: translate(-50%, -50%) rotate(0deg);
}

.integration-item:nth-child(4)::before,
.integration-item:nth-child(8)::before {
  border-width: 0 2px 0 0;
  transform: translate(-50%, -50%) rotate(0deg);
}

.integration-item:nth-child(5)::before,
.integration-item:nth-child(6)::before {
  border-width: 2px 0 0 0;
  transform: translate(-50%, -50%) rotate(0deg);
}

.integration-item:nth-child(7)::before,
.integration-item:nth-child(8)::before {
  top: 0;
  border-width: 2px 0 0 2px;
  transform: translate(-50%, 0) rotate(45deg);
  transform-origin: top left;
}
</style>