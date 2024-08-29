<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'

const route = useRoute()

const curPath = computed(() => route.path)

const links = computed(() => [
  {
    label: 'Home',
    to: '/',
    icon: 'ph:house',
    active: curPath.value === '/',
  },
  {
    label: 'Features',
    to: '/#features',
    icon: 'ph:cube-transparent',
    active: curPath.value === '/' && route.hash === '#features',
  },
  {
    label: 'Testimonials',
    to: '/#testimonials',
    icon: 'ph:graduation-cap',
    active: curPath.value === '/' && route.hash === '#testimonials',
  },
  {
    label: 'Services',
    to: '/services',
    icon: 'ph:credit-card',
    active: curPath.value === '/services',
  },
  {
    label: 'Tracking',
    to: '/tracking',
    icon: 'ph:map-pin',
    active: curPath.value === '/tracking',
  }
])

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="animate-fade-in-down animate-duration-1000 animate-delay-300 fixed top-4 left-0 w-full z-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <div class="bg-surface/90 rounded-full shadow-lg px-8 py-1 border border-opacity-50 border-border ">
        <div class="flex flex-row justify-between items-center">
          <div class="flex-shrink-0">
            <NuxtLink to="/">
              <NuxtImg
                src="/images/logo-horizon-full-transparent.png"
                alt="Fleet Turbo"
                width="120"
                class="filter dark:opacity-50 brightness-25 dark:invert"
              />
            </NuxtLink>
          </div>
          <nav class="hidden md:block">
            <ul class="ml-10 flex items-center justify-center space-x-3 leading-relaxed">
              <li v-for="link in links" :key="link.to">
                <NuxtLink
                  :to="link.to"
                  :class="[
                    link.active
                      ? 'background text-text-primary/90 shadow-lg'
                      : 'text-text-secondary/50',
                    'px-3 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center'
                  ]"
                >
                  <Icon :name="link.icon" class="mr-1 w-5 h-5" />
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
          <div class="md:hidden">
            <button @click="toggleMenu" class="text-text-secondary dark:text-gray-300 hover:bg-secondary/10 dark:hover:bg-secondary/20 p-2 rounded-md">
              <Icon :name="isMenuOpen ? 'i-ph-x' : 'i-ph-list'" class="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isMenuOpen" class="md:hidden max-w-3xl mx-auto px-4 sm:px-6">
      <nav class="bg-surface dark:bg-surface/50 rounded-b-lg shadow-md mt-1">
        <ul class="px-2 pt-2 pb-3 space-y-1">
          <li v-for="link in links" :key="link.to">
            <NuxtLink
              :to="link.to"
              :class="[
                link.active
                  ? 'background text-text-primary'
                  : 'text-text-secondary hover:bg-secondary/10',
                'block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300'
              ]"
              @click="isMenuOpen = false"
            >
              <Icon :name="link.icon" class="mr-1 w-5 h-5" />
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
