<template>
  <div class="mx-auto px-6 max-w-[420px]">
    <div
      class="p-4 bg-white rounded-lg shadow-sm dark:bg-gray-800 border-gray-300 border-l-4 scale-90"
      :class="[getBorderColor(currentStatusId)]"
    >
      <h3 class="text-base text-gray-900 dark:text-white mb-3 flex items-center">
        <UIcon
          :name="getStatusIcon(currentStatusId)"
          class="w-6 h-6 mr-2"
          :class="getStatusColor(currentStatusId)"
        />
        {{ getStatusLabel(currentStatusId) }}
      </h3>
      <div class="space-y-3">
        <div class="flex items-center">
          <UIcon
            name="i-heroicons-truck"
            :class="getStatusColor(currentStatusId)"
            class="w-6 h-6 mr-3 text-gray-500 dark:text-gray-400"
          />
          <span class="text-base  text-gray-700 dark:text-gray-300">
            <span class="">{{ trackingNumber }}</span>
          </span>
        </div>
        <div class="flex items-center">
          <UIcon
            name="i-heroicons-clock"
            :class="getStatusColor(currentStatusId)"
            class="w-6 h-6 mr-3 text-gray-500 dark:text-gray-400"
          />
          <span class="text-base  text-gray-700 dark:text-gray-300">
            <span class="">{{ formatDateTime(lastUpdated) }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  info: {
    type: Array,
    default: () => []
  },
  trackingNo: {
    type: String,
    default: 'unknown'
  }
})

const statusConfig = {
  500: { color: 'text-green-500', borderColor: 'border-green-500', icon: 'i-heroicons-check-circle', label: 'Delivered' },
  450: { color: 'text-blue-500', borderColor: 'border-blue-500', icon: 'i-heroicons-truck', label: 'Out for Delivery' },
  400: { color: 'text-yellow-500', borderColor: 'border-yellow-500', icon: 'i-heroicons-clock', label: 'Processing' },
  402: { color: 'text-yellow-500', borderColor: 'border-yellow-500', icon: 'i-heroicons-clock', label: 'Updating Soon' },
  100: { color: 'text-purple-500', borderColor: 'border-purple-500', icon: 'i-heroicons-document-text', label: 'Submitted' }
}

const trackingNumber = computed(() => props.trackingNo)
const lastUpdated = computed(() => {
  const date = props.info?.[0]?.updated_at
  return date ? formatDateTime(date) : 'No data available'
})
const currentStatusId = computed(() => props.info?.[0]?.tracking_event_status_id || 0)

const getStatusColor = statusId => statusConfig[statusId]?.color || 'text-gray-500'
const getBorderColor = statusId => statusConfig[statusId]?.borderColor || 'border-l-gray-300'
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
