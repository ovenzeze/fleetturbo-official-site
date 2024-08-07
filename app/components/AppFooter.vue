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
  }]
</script>

<template>
  <UFooter>
    <template #top>
      <UPageGrid :ui="{ wrapper: 'grid grid-cols-2 xl:grid-cols-4 gap-8' }">
        <UPageCard
          v-for="(module, index) in links"
          :key="index"
          v-bind="module"
          target="_blank"
        >
          <template #description>
            <span class="line-clamp-2">{{ module.description }}</span>
          </template>
        </UPageCard>
      </UPageGrid>

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
      <p class="text-gray-500 dark:text-gray-400 text-sm text-center">
        Copyright © FleetTurbo {{ new Date().getFullYear() }}. A LuLuGo Tech Company. All rights reserved.
      </p>
    </template>

    <template #right>
      <UColorModeButton size="sm" />

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
