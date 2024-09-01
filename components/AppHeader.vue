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
    label: 'Why FleetTurbo',
    to: '/why-fleetturbo',
    icon: 'ph:question',
    active: curPath.value === '/why-fleetturbo',
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
    <div class="max-w-4xl mx-auto px-4 sm:px-0">
      <div class="bg-surface rounded-full shadow-lg px-6 py-1 border border-opacity-50 border-border" :class="isMenuOpen ? 'rounded-b-none' : ''">
        <div class="flex flex-row justify-between items-center transition-all duration-300 ease-in" :class="isMenuOpen ? 'py-4 px-6' : 'px-3 py-2'">
          <div class="flex-shrink-0">
            <NuxtLink to="/">
              <NuxtImg
                src="/images/logo-horizon-full-transparent.png"
                alt="Fleet Turbo"
                width="120"
                class="filter dark:opacity-50 brightness-100 dark:invert scale-75"
              />
            </NuxtLink>
          </div>
          <nav class="hidden md:block">
            <ul class="flex items-center justify-center space-x-3 leading-relaxed transition-all duration-300 ease-in-out" :class="isMenuOpen ? 'py-4 px-6' : 'px-3 py-2'">
              <li v-for="link in links" :key="link.to">
                <NuxtLink
                  :to="link.to"
                  :class="[
                    link.active
                      ? 'background text-text-primary shadow-lg flex-shrink-0'
                      : 'text-text-secondary/50',
                    'px-2 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex flex-row items-center justify-center'
                  ]"
                >
                  <Icon :name="link.icon" class="mr-1 w-4 h-4" />
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
          <div class="md:hidden flex items-center justify-center">
            <Icon
              :name="isMenuOpen ? 'i-ph-x' : 'i-ph-list'"
              class="w-6 h-5 cursor-pointer"
              @click="toggleMenu"
            />
          </div>
        </div>
      </div>
    </div>
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div v-if="isMenuOpen" class="md:hidden max-w-3xl mx-auto px-4 sm:px-6">
        <nav class="bg-surface dark:bg-surface/50 rounded-b-lg shadow-md">
          <ul class="px-2 pt-2 pb-3 space-y-3 pl-14 md:pl-0" :class="isMenuOpen ? 'pl-14' : 'pl-3'">
            <li v-for="link in links" :key="link.to">
              <NuxtLink
                :to="link.to"
                :class="[
                  link.active
                    ? 'background text-text-primary'
                    : 'text-text-secondary hover:bg-secondary/10',
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center underline underline-offset-4 decoration-text-secondary/50 decoration-2'
                ]"
                @click="toggleMenu"
              >
                <!-- <Icon :name="link.icon" class="mr-2 w-4 h-4" /> -->
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </transition>
  </header>
</template>
