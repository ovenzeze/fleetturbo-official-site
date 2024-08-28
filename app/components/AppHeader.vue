<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()

const links = computed(() => [
  {
    label: 'Features',
    to: '#features',
    icon: 'i-ph-cube-transparent',
    active: activeHeadings.value.includes('features') && !activeHeadings.value.includes('services'),
  },
  {
    label: 'Services',
    to: '#services',
    icon: 'i-ph-credit-card',
    active:
      activeHeadings.value.includes('services') && !activeHeadings.value.includes('testimonials'),
  },
  {
    label: 'Testimonials',
    to: '#testimonials',
    icon: 'i-ph-graduation-cap',
    active: activeHeadings.value.includes('testimonials'),
  },
  {
    label: 'FAQ',
    to: '#faq',
    icon: 'i-ph-question',
    active: activeHeadings.value.includes('faq') && !activeHeadings.value.includes('testimonials'),
  },
])

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#features'),
    document.querySelector('#services'),
    document.querySelector('#testimonials'),
    document.querySelector('#faq'),
  ])
})
</script>

<template>
  <header class="animate-fade-in-down animate-duration-1000 animate-delay-300">
    <UHeader :links="links" class="dark:bg-gray-900" :ui="{ wapper: 'mb-0' }">
      <template #logo>
        <NuxtImg
          src="/images/logo-horizon-full-transparent.png"
          alt="Fleet Turbo"
          width="120"
          class="md:ml-10 filter dark:brightness-200 brightness-25"
        />
      </template>
    </UHeader>
  </header>
</template>
