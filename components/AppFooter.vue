<script setup lang="ts">
const links = [
  {
    title: 'Address',
    description: '1619 S 9TH ST,\nALHAMBRA CA 91803'
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
  }]
</script>

<template>
  <UFooter class="background prose max-w-screen-xl">
    <template #top>
      <footer class="py-2 ">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            <div
              v-for="(module, index) in links"
              :key="index"
              class="rounded-lg px-1 transition-all duration-300"
            >
              <h3 class="text-sm font-semibold text-gray-900 dark:text-gray-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 mb-2 text-center md:text-left">
                {{ module.title }}
              </h3>
              <p class="text-sm text-text-secondary/80 text-center md:text-left line-clamp-3 leading-relaxed content-center h-20 text-wrap whitespace-pre-line">
                {{ module.description }}
              </p>
            </div>
          </div>
        </div>
      </footer>

      <!-- <UFooterColumns :links="links"> -->
      <!-- <template #right>
          <form @submit.prevent="onSubmit">
            <UFormGroup
              label="Subscribe to our newsletter"
              :ui="{ container: 'mt-3' }"
            >
              <UInput
                v-model="email"
                type="email"
                placeholder="Enter your email"
                :ui="{ icon: { trailing: { pointer: '' } } }"
                required
                size="xl"
                autocomplete="off"
                class="max-w-sm"
              >
                <template #trailing>
                  <UButton
                    type="submit"
                    size="xs"
                    :label="loading ? 'Subscribing' : 'Subscribe'"
                    :loading="loading"
                  />
                </template>
              </UInput>
            </UFormGroup>
          </form>
        </template> -->
      <!-- </UFooterColumns> -->
    </template>

    <template #center>
      <div style="padding: 2px; font-size: 12px; color: #666666; text-align: center;" class="prose">
        <p style="text-transform: uppercase; text-align: center; margin: 0 auto; max-width: 100%;">
          Copyright © FleetTurbo {{ new Date().getFullYear() }}. A LuLuGo Tech Company.<br>
          All rights reserved.
        </p>
      </div>
    </template>

    <template #right>
      <UColorModeButton size="sm" class="text-text-secondary/80 z-10" />

      <!-- <UButton
        to="https://github.com/nuxt-ui-pro/landing"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        color="gray"
        variant="ghost"
      /> -->
    </template>
  </UFooter>
</template>
