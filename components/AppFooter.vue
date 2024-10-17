<script setup lang="ts">
const links = [
  {
    title: 'Address',
    description: '1619 S 9TH ST, ALHAMBRA' + '\n' + 'CA 91803, USA'
  },
  {
    title: 'Customer Service',
    description: 'customer@fleetturbo.com'
  },
  {
    title: 'Business Cooperation',
    description: 'cooperation@fleetturbo.com'
  },
  {
    title: 'Be a part of our team',
    description: 'recruitement@fleetturbo.com'
  }
]

const legalLinks = [
  { title: 'Privacy Policy', href: '/privacy' },
  { title: 'Terms of Service', href: '/terms' }
]
</script>

<template>
  <UFooter class="dark:bg-gray-900">
    <template #top>
      <footer class="py-2">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            <div
              v-for="(module, index) in links"
              :key="index"
              class="rounded-lg px-1 transition-all duration-300"
            >
              <h3 class="text-xs font-semibold text-gray-900 dark:text-gray-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 mb-2 text-center md:text-left">
                {{ module.title }}
              </h3>
              <p class="text-xs text-gray-600 dark:text-gray-500 text-center md:text-left line-clamp-2">
                {{ module.description }}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </template>

    <template #center>
      <div class="text-center text-xs text-gray-600 dark:text-gray-400">
        <p class="uppercase mb-2">
          Copyright © FleetTurbo {{ new Date().getFullYear() }}. A LuLuGo Tech Company.<br>
          All rights reserved.
        </p>
        <div class="flex justify-center space-x-4 mt-2">
          <NuxtLink
            v-for="link in legalLinks"
            :key="link.title"
            :to="link.href"
            class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            {{ link.title }}
          </NuxtLink>
        </div>
      </div>
    </template>

    <template #right>
      <UColorModeButton size="sm" />
    </template>
  </UFooter>
</template>

<style scoped>
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
