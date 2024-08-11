<template>
  <div class="px-5 py-6 w-full max-w-[460px] min-w-[400px] mx-auto">
    <ul class="relative border-l border-gray-200 dark:border-gray-800">
      <li
        v-for="(item, index) in logisticsData"
        :key="index"
        class="mb-10 ml-6"
      >
        <span
          class="absolute flex items-center justify-center w-7 h-8 -left-3.5 rounded-full bg-gray-100 dark:bg-gray-900 transition-colors duration-300 ease-in-out"
        >
          <Icon
            :name="getStatusIcon(item.tracking_event_status_id)"
            class="w-6 h-6 transition-colors duration-300 ease-in-out  brightness-50"
            :style="{ color: getStatusColor(item.tracking_event_status_id) }"
          />
        </span>
        <div class="p-4 bg-white rounded-lg border border-gray-200 dark:bg-gray-900 dark:border-gray-800 transition-all duration-300 ease-in-out hover:shadow-md">
          <div class="flex justify-between items-center mb-1">
            <time class="mb-1 text-sm font-normal text-gray-400 dark:text-gray-500">
              {{ formatDateTime(item.timestamp) }}
            </time>
            <span
              class="mb-1 text-xs font-medium uppercase transition-colors duration-300 ease-in-out dark:brightness-75"
              :class="getStatusTextColor(item.tracking_event_status_id)"
            >
              {{ getStatusLabel(item.tracking_event_status_id) }}
            </span>
          </div>
          <h3 class="text-sm font-semibold text-gray-900 dark:text-blue-200 uppercase dark:brightness-50">
            {{ item.description }}
          </h3>
          <p class="mb-2 text-sm font-normal text-gray-500 dark:text-gray-400">
            {{ item.details }}
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-400 uppercase">
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
  500: { color: '#22c55e', textColor: '#16a34a', darkTextColor: '#4ade80', icon: 'ph:package', label: 'Delivered' },
  450: { color: '#3b82f6', textColor: '#2563eb', darkTextColor: '#60a5fa', icon: 'i-ph-truck', label: 'Out for Delivery' },
  400: { color: '#eab308', textColor: '#ca8a04', darkTextColor: '#facc15', icon: 'i-ph:package', label: 'Processing' },
  402: { color: '#eab308', textColor: '#ca8a04', darkTextColor: '#facc15', icon: 'ph:clock', label: 'Updating Soon' },
  100: { color: '#a855f7', textColor: '#9333ea', darkTextColor: '#c084fc', icon: 'ph:clipboard-text', label: 'Submitted' }
}

const defaultStatus = { color: '#6b7280', textColor: '#4b5563', darkTextColor: '#9ca3af', icon: 'ph:question', label: 'Unknown Status' }

const getStatusColor = statusId => statusConfig[statusId]?.color || defaultStatus.color
const getStatusTextColor = statusId => statusConfig[statusId]?.textColor || defaultStatus.textColor
const getStatusIcon = statusId => statusConfig[statusId]?.icon || defaultStatus.icon
// const getStatusIconColor = (statusId) => {
//   const color = statusConfig[statusId]?.textColor || defaultStatus.textColor
//   return color.split(' ')[0].replace('text-', '')
// }
const getStatusLabel = statusId => statusConfig[statusId]?.label || defaultStatus.label

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

<style scoped>
.border-l::before {
  content: '';
  position: absolute;
  top: 0;
  left: -1px;
  width: 2px;
  height: 0;
  background: #6b72807b;
  animation: flow 2s ease-out forwards;
}

@keyframes flow {
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
}
</style>
