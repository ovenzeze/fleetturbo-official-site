<template>
  <UButton
    color="gray"
    variant="ghost"
    class="w-full dark:border-gray-700 py-4 border-b border-gray-200 dark:text-gray-900 tracking-wide"
    :ui="{ rounded: 'rounded-none' }"
    :loading="loading"
  >
    <!-- <template #leading>
      <div class="w-6 h-6 rounded-full flex items-center justify-center">
        <UIcon
          :name="item.icon"
          class="w-6 h-6 dark:text-gray-900"
        />
      </div>
    </template> -->
    <span class="truncate text-sm font-medium  bg-gradient-to-r from-gray-700 via-zinc-700 to-gray-700  dark:text-gray-500 bg-clip-text text-transparent">{{ item.label }}</span>
    <template #trailing>
      <Icon
        name="i-heroicons-chevron-right-20-solid"
        class="w-5 h-5 ms-auto transform transition-transform duration-200 mr-0 dark:bg-gray-500"
        :class="[open && 'rotate-90']"
      />
    </template>
  </UButton>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  },
  open: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
})
</script>
