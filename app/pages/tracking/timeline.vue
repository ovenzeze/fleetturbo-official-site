<template>
  <div class=" mx-auto px-5 py-6 w-full max-w-[460px]">
    <ul class="relative border-l border-gray-200 dark:border-gray-700">
      <li
        v-for="(item, index) in logisticsData"
        :key="index"
        class="mb-10 ml-6"
      >
        <span
          class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3"
          :class="getStatusColor(item.tracking_event_status_id)"
        >
          <UIcon
            :name="getStatusIcon(item.tracking_event_status_id)"
            class="w-3 h-3 text-white"
          />
        </span>
        <div class="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600">
          <div class="flex justify-between items-center mb-1">
            <time class="mb-1 text-sm font-normal text-gray-400 dark:text-gray-500">
              {{ formatDateTime(item.timestamp) }}
            </time>
            <span
              class="mb-1 text-xs font-medium uppercase"
              :class="getStatusTextColor(item.tracking_event_status_id)"
            >
              {{ getStatusLabel(item.tracking_event_status_id) }}
            </span>
          </div>
          <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase">
            {{ item.description }}
          </h3>
          <p class="mb-2 text-sm font-normal text-gray-500 dark:text-gray-400">
            {{ item.details }}
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            Updated at: {{ formatDateTime(item.updated_at) }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  logisticsData: {
    type: Array,
    required: true
  }
})

const statusConfig = {
  500: { color: 'bg-green-500', textColor: 'text-green-600', icon: 'i-heroicons-check-circle', label: 'Delivered' },
  450: { color: 'bg-blue-500', textColor: 'text-blue-600', icon: 'i-heroicons-truck', label: 'Out for Delivery' },
  400: { color: 'bg-yellow-500', textColor: 'text-yellow-600', icon: 'i-heroicons-clock', label: 'Processing' },
  402: { color: 'bg-yellow-500', textColor: 'text-yellow-600', icon: 'i-heroicons-clock', label: 'Updating Soon' },
  100: { color: 'bg-purple-500', textColor: 'text-purple-600', icon: 'i-heroicons-document-text', label: 'Submitted' }
}

const getStatusColor = statusId => statusConfig[statusId]?.color || 'bg-gray-500'
const getStatusTextColor = statusId => statusConfig[statusId]?.textColor || 'text-gray-600'
const getStatusIcon = statusId => statusConfig[statusId]?.icon || 'i-heroicons-question-mark-circle'
const getStatusLabel = statusId => statusConfig[statusId]?.label || 'Unknown Status'

const formatDateTime = (timestamp) => {
  const isTimestamp = typeof timestamp === 'number' && timestamp > 0
  return new Date(isTimestamp ? timestamp * 1000 : timestamp).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  })
}
</script>
