<template>
  <UCard
    :class="['max-w-md mx-auto', status.borderColor]"
    class="border-l-4 dark:brightness-75"
    :ui="{ padding: 'p-2', footer: { padding: 'p-1', base: 'border-t border-gray-900 ' } }"
  >
    <div class="flex items-center justify-between mb-4 ">
      <div class="flex flex-row justify-center items-center">
        <Icon
          :name="status.icon"
          :class="`${status.color} status-card-icon `"
        />
        <h3 class="text-sm font-medium uppercase">
          {{ status.label }}
        </h3>
      </div>
      <span class="text-xs text-gray-900/30 uppercase dark:text-gray-500">Status</span>
    </div>

    <div class="space-y-3">
      <div class="flex items-center justify-between">
        <div class="flex flex-row justify-center items-center">
          <Icon
            name="i-heroicons-truck"
            color="red"
            :class="`${status.color}-500 status-card-icon`"
          />
          <span class="text-sm font-medium">{{ info.trackingNo }}</span>
        </div>
        <span class="text-xs text-gray-900/30 uppercase dark:text-gray-500">Tracking No.</span>
      </div>

      <div
        v-for="field in status.fields"
        :key="field.key"
        class="flex items-center justify-between"
      >
        <div class="flex flex-row justify-center items-center">
          <Icon
            :name="field.icon"
            :class="`status-card-icon`"
          />
          <span class="text-sm font-medium">
            {{ getFieldValue(field.key) }}
          </span>
        </div>
        <span class="text-xs text-gray-900/30 dark:text-gray-500 uppercase">{{ field.label }}</span>
      </div>
    </div>

    <template #footer>
      <div class="flex items-center justify-center w-full h-8 leading-8 font-bold text-center md:text-2xl relative z-10 bg-gradient-to-r from-gray-200 via-zinc-200 to-gray-50-800 bg-clip-text text-transparent">
        <Icon
          name="heroicons:shield-check"
          style="color: rgb(17 24 39 / 0.3);"
          class="w-4 h-4 mr-1 bg-gradient-to-r from-gray-500 via-zinc-500 to-gray-50-800"
        />
        <span class="text-xs text-gray-900/30 uppercase">Proundly Shiped By FleetTurbo</span>
      </div>
    </template>
  </UCard>
</template>

<script setup>
import { format } from 'date-fns'

const statusConfig = {
  500: {
    color: 'emerald',
    borderColor: 'border-emerald-500',
    icon: 'i-ph-check-circle',
    label: 'Delivered',
    fields: [
      { key: 'deliveryTime', label: 'Delivery Time', icon: 'i-ph-clock' },
      { key: 'proofOfDelivery', label: 'Proof of Delivery', icon: 'i-ph-clipboard-text' }
    ]
  },
  450: {
    color: 'sky',
    borderColor: 'border-sky-500',
    icon: 'i-ph-truck',
    label: 'Out for Delivery',
    fields: [
      { key: 'estimatedDeliveryDate', label: 'Estimated Delivery Date', icon: 'i-ph-calendar' },
      { key: 'lastKnownLocation', label: 'Last Known Location', icon: 'i-ph-map-pin' }
    ]
  },
  400: {
    color: 'amber',
    borderColor: 'border-amber-500',
    icon: 'i-ph-arrows-clockwise',
    label: 'In Transit',
    fields: [
      { key: 'currentStatus', label: 'Current Status', icon: 'i-ph-info' },
      { key: 'estimatedArrivalDate', label: 'Estimated Arrival Date', icon: 'i-ph-calendar' }
    ]
  },
  402: {
    color: 'orange',
    borderColor: 'border-orange-500',
    icon: 'i-ph-hourglass',
    label: 'Pending Update',
    fields: [
      { key: 'lastScan', label: 'Last Scan', icon: 'i-ph-scan' },
      { key: 'nextExpectedUpdate', label: 'Next Expected Update', icon: 'i-ph-calendar' }
    ]
  },
  100: {
    color: 'indigo',
    borderColor: 'border-indigo-500',
    icon: 'i-ph-package',
    label: 'Shipment Received',
    fields: [
      { key: 'orderDate', label: 'Order Date', icon: 'i-ph-calendar' }
    ]
  }
}

const defaultStatus = {
  color: 'slate',
  borderColor: 'border-slate-300',
  icon: 'i-ph-question',
  label: 'Status Unavailable',
  fields: [
    { key: 'lastUpdate', label: 'Last Update', icon: 'i-ph-info' }
  ]
}

const props = defineProps({
  info: {
    type: Object,
    required: true,
    default: () => ({})
  }
})

const statusId = computed(() => (props['info'].statusId))
const status = computed(() => statusConfig[statusId.value] || defaultStatus)

const formatDateTime = (timestamp) => {
  if (!timestamp) return 'N/A'
  const date = new Date(typeof timestamp === 'number' ? timestamp * 1000 : timestamp)
  return format(date, 'MMM d, yyyy hh:mm a')
}

const getFieldValue = (key) => {
  const value = props.info[key]
  if (key.toLowerCase().includes('date') || key.toLowerCase().includes('time')) {
    return formatDateTime(value)
  }
  if (key === 'proofOfDelivery') {
    return 'Picture Of Delivery'
  }
  return value || 'Not Available'
}
</script>

<style lang="scss">
.status-card-icon {
  width: 1.25rem; /* Equivalent to w-5 in Tailwind */
  height: 1.25rem; /* Equivalent to h-5 in Tailwind */
  margin-right: 0.75rem; /* Equivalent to mr-3 in Tailwind */
}
</style>

