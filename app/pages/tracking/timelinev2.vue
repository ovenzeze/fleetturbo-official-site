<template>
  <div class="px-5 py-6 w-full max-w-[460px] min-w-[400px] mx-auto ">
    <ul class="relative">
      <li
        v-for="(item, index) in logisticsData"
        :key="index"
        class="mb-6 mt-4 relative"
      >
        <div class="flex items-start">
          <div class="relative mr-12">
            <span
              class="absolute flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 transition-colors duration-300 ease-in-out"
              :class="getStatusColor(item.tracking_event_status_id)"
            >
              <Icon
                :name="getStatusIcon(item.tracking_event_status_id)"
                class="w-5 h-5 transition-all duration-300 ease-in-out"
                :class="getStatusIconColor(item.tracking_event_status_id)"
              />
            </span>
          </div>
          <div class="flex-grow">
            <div class="flex justify-between items-center mb-1">
              <span
                class="text-sm font-medium uppercase transition-colors duration-300 ease-in-out"
                :class="getStatusTextColor(item.tracking_event_status_id)"
              >
                {{ getStatusLabel(item.tracking_event_status_id) }}
              </span>
              <span class="text-xs text-gray-400">
                {{ formatDateTime(item.timestamp) }}
              </span>
            </div>
            <h3 class="text-sm font-semibold text-gray-900 uppercase mb-1">
              {{ item.description }}
            </h3>
            <p class="text-sm font-normal text-gray-600 mb-1">
              {{ item.details }}
            </p>
            <p class="text-xs text-gray-400">
              Updated: {{ formatUpdatedDateTime(item.updated_at) }}
            </p>
          </div>
        </div>
        <div
          v-if="index < logisticsData.length - 1"
          class="absolute left-4 top-8 w-0.5 h-full bg-gray-200 transition-all duration-300 ease-in-out"
          :class="getStatusBgColor(item.tracking_event_status_id)"
        />
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
  500: { color: 'border-green-500', textColor: 'text-green-600', bgColor: 'bg-green-500', icon: 'ph:package-thin', label: 'Delivered' },
  450: { color: 'border-blue-500', textColor: 'text-blue-600', bgColor: 'bg-blue-500', icon: 'ph:truck-thin', label: 'Out for Delivery' },
  400: { color: 'border-yellow-500', textColor: 'text-yellow-600', bgColor: 'bg-yellow-500', icon: 'ph:package-thin', label: 'Processing' },
  402: { color: 'border-yellow-500', textColor: 'text-yellow-600', bgColor: 'bg-yellow-500', icon: 'ph:package-thin', label: 'Updating Soon' },
  100: { color: 'border-purple-500', textColor: 'text-purple-600', bgColor: 'bg-purple-500', icon: 'ph:clipboard-text-thin', label: 'Submitted' }
}

const defaultStatus = { color: 'border-gray-500', textColor: 'text-gray-600', bgColor: 'bg-gray-500', icon: 'ph:question-thin', label: 'Unknown Status' }

const getStatusColor = statusId => statusConfig[statusId]?.color || defaultStatus.color
const getStatusTextColor = statusId => statusConfig[statusId]?.textColor || defaultStatus.textColor
const getStatusBgColor = statusId => statusConfig[statusId]?.bgColor || defaultStatus.bgColor
const getStatusIcon = statusId => statusConfig[statusId]?.icon || defaultStatus.icon
const getStatusIconColor = (statusId) => {
  const color = statusConfig[statusId]?.textColor || defaultStatus.textColor
  return color.replace('text-', 'text-')
}
const getStatusLabel = statusId => statusConfig[statusId]?.label || defaultStatus.label

const formatDateTime = (timestamp) => {
  const isTimestamp = typeof timestamp === 'number' && timestamp > 0
  return new Date(isTimestamp ? timestamp * 1000 : timestamp).toLocaleString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).toUpperCase()
}

const formatUpdatedDateTime = (timestamp) => {
  const isTimestamp = typeof timestamp === 'number' && timestamp > 0
  return new Date(isTimestamp ? timestamp * 1000 : timestamp).toLocaleString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).toUpperCase()
}
</script>

<style scoped>
.bg-white span {
  transition: all 0.3s ease-in-out;
}

.bg-white:hover span {
  transform: scale(1.1);
}

[class^="ph-"]:before, [class*=" ph-"]:before {
  animation: iconPulse 2s infinite;
}

@keyframes iconPulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
