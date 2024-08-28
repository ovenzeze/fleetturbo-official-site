<script setup lang="ts">
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  ogImage: 'https://fleetturbo.com/images/logo-horizon-full-transparent.png',
  twitterImage: 'https://fleetturbo.com/images/logo-horizon-full-transparent.png',
  twitterCard: 'summary_large_image',
  title: 'FleetTurbo - Final Mile Delivery Solutions',
  description: 'Fueled by Foresight, Turbocharged by Technology! Get fast delivery of anything, anywhere in the US with the best technology, drivers, and customer experience in the industry.',
  ogTitle: 'FleetTurbo - Final Mile Delivery Solutions',
  ogDescription: 'Get fast delivery of anything, anywhere in the US with the best technology, drivers, and customer experience in the industry.',
  twitterTitle: 'FleetTurbo - Final Mile Delivery Solutions',
  twitterDescription: 'Fueled by Foresight, Turbocharged by Technology! Fast delivery across the US.'
})

</script>

<template>
  <div class="dark:bg-gray-900 w-full hidescrollbar">
    <NuxtLayout>
      <UMain>
        <NuxtPage />
      </UMain>
      <AppFooter />
      <UNotifications :ui="{ position: 'top-center', duration: 3000 }" />
    </NuxtLayout>
  </div>
</template>

<style>
:root {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  font-feature-settings: normal;
  font-variation-settings: normal;
  -webkit-tap-highlight-color: transparent;
  font-family: 'Crimson Text', 'Noto Sans SC', Inter, system-ui, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
}

html, body::-webkit-scrollbar-track,
.noscrollbar::-webkit-scrollbar-track {
  border-radius: 9999px;
  background-color: #f3f4f6;
}

html, body::-webkit-scrollbar-thumb,
.noscrollbar::-webkit-scrollbar-thumb {
  border-radius: 9999px;
  background-color: #f3f4f6;
}

.noscrollbar::-webkit-scrollbar {
  width: 0.125rem;
  height: 0.125rem;
}

.hidescrollbar::-webkit-scrollbar {
  width: 0;
  height: 0;
}

@media (prefers-reduced-motion: no-preference) {
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
