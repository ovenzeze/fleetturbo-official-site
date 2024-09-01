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
  <div class="min-h-screen bg-background w-full content-center">
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
  <UNotifications />
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

body {
  @apply overflow-x-hidden bg-white dark:bg-gray-900;
  overscroll-behavior-y: none;
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

/* CSS */
.button-78 {
  align-items: center;
  appearance: none;
  background-clip: padding-box;
  background-color: initial;
  background-image: none;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  flex-direction: row;
  flex-shrink: 0;
  font-family: Eina01,sans-serif;
  font-size: 16px;
  font-weight: 800;
  justify-content: center;
  line-height: 24px;
  margin: 0;
  min-height: 64px;
  outline: none;
  overflow: visible;
  padding: 19px 26px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: auto;
  word-break: keep-all;
  z-index: 0;
}

@media (min-width: 768px) {
  .button-78 {
    padding: 19px 32px;
  }
}

.button-78:before,
.button-78:after {
  border-radius: 80px;
}

.button-78:before {
  background-image: linear-gradient(92.83deg, #ff7426 0, #f93a13 100%);
  content: "";
  display: block;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -2;
}

.button-78:after {
  background-color: initial;
  background-image: linear-gradient(#541a0f 0, #0c0d0d 100%);
  bottom: 4px;
  content: "";
  display: block;
  left: 4px;
  overflow: hidden;
  position: absolute;
  right: 4px;
  top: 4px;
  transition: all 100ms ease-out;
  z-index: -1;
}

.button-78:hover:not(:disabled):before {
  background: linear-gradient(92.83deg, rgb(255, 116, 38) 0%, rgb(249, 58, 19) 100%);
}

.button-78:hover:not(:disabled):after {
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  transition-timing-function: ease-in;
  opacity: 0;
}

.button-78:active:not(:disabled) {
  color: #ccc;
}

.button-78:active:not(:disabled):before {
  background-image: linear-gradient(0deg, rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), linear-gradient(92.83deg, #ff7426 0, #f93a13 100%);
}

.button-78:active:not(:disabled):after {
  background-image: linear-gradient(#541a0f 0, #0c0d0d 100%);
  bottom: 4px;
  left: 4px;
  right: 4px;
  top: 4px;
}

.button-78:disabled {
  cursor: default;
  opacity: .24;
}
</style>
