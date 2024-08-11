<template>
  <UContainer class="w-full h-full flex flex-col space-y-4 justify-center items-center pt-20 md:w-10/12 max-w-[1000px]">
    <QueryInput
      :initial-tracking-number="trackingNumber"
      @search="handleSearch"
    />
    <UDivider v-if="shipmentData.length" />

    <div
      v-if="shipmentData.length"
      class="w-full md:flex md:space-x-4"
    >
      <!-- Right column for md and above -->
      <div class="md:w-3/5 mt-4 md:mt-0">
        <UAccordion
          :items="[accordionItems[1]]"
          :ui="accordionStyle"
          :default-open="!isFetching ? [0] : []"
        >
          <template #default="{ item, open }">
            <UButton
              color="gray"
              variant="ghost"
              class="dark:border-gray-700 py-3"
              :ui="{ rounded: 'rounded-none' }"
              :loading="isFetching"
            >
              <template #leading>
                <div class="w-6 h-6 rounded-full flex items-center justify-center text-gray-900">
                  <UIcon
                    :name="item.icon"
                    class="w-6 h-6 text-gray-900"
                  />
                </div>
              </template>
              <span class="truncate text-gray-900">{{ item.label }}</span>
              <template #trailing>
                <UIcon
                  v-if="!isFetching"
                  name="i-heroicons-chevron-right-20-solid"
                  class="w-5 h-5 ms-auto transform transition-transform duration-200 mr-4"
                  :class="[open && 'rotate-90']"
                />
              </template>
            </UButton>
          </template>
          <template #tracking-timeline>
            <TrackingTimeline
              :logistics-data="shipmentData"
              :proofs="proofs"
            />
          </template>
        </UAccordion>
      </div>
      <!-- Left column for md and above -->
      <div class="md:w-2/5 space-y-4">
        <UAccordion
          :items="[accordionItems[0], accordionItems[2]]"
          :ui="accordionStyle"
          :default-open="!isFetching ? [0, 1] : []"
        >
          <template #default="{ item, open }">
            <UButton
              color="gray"
              variant="ghost"
              class="dark:border-gray-700 py-3"
              :ui="{ rounded: 'rounded-none' }"
              :loading="isFetching"
            >
              <template #leading>
                <div class="w-6 h-6 rounded-full flex items-center justify-center">
                  <UIcon
                    :name="item.icon"
                    class="w-6 h-6 dark:text-gray-900"
                  />
                </div>
              </template>
              <span class="truncate">{{ item.label }}</span>
              <template #trailing>
                <UIcon
                  v-if="!isFetching"
                  name="i-heroicons-chevron-right-20-solid"
                  class="w-5 h-5 ms-auto transform transition-transform duration-200 mr-4"
                  :class="[open && 'rotate-90']"
                />
              </template>
            </UButton>
          </template>
          <template #shipment-info>
            <ShipmentInfo
              :info="shipmentData"
              :tracking-no="trackingNumber"
            />
          </template>
          <template #proof-images>
            <ProofImages :proofs="deliveryProofs" />
          </template>
        </UAccordion>
      </div>
    </div>
  </UContainer>
</template>

<script setup>
import QueryInput from './queryInput.vue'
import ShipmentInfo from './shipmentInfo.vue'
import TrackingTimeline from './timeline.vue'
import ProofImages from './proofImages.vue'

const route = useRoute()
const trackingNumber = ref(route.query.s || '')
const shipmentData = ref([])
const deliveryProofs = ref([])
const isFetching = ref(false)

const accordionItems = computed(() => [
  {
    label: 'Shipment Status',
    icon: 'i-heroicons-information-circle',
    slot: 'shipment-info'
  },
  {
    label: 'Tracking Timeline',
    icon: 'i-heroicons-clock',
    slot: 'tracking-timeline'
  },
  {
    label: 'Proof of Delivery',
    icon: 'i-heroicons-camera',
    slot: 'proof-images'
  }
])

async function fetchData() {
  isFetching.value = true
  try {
    const { data = [], proofs = [], result } = await $fetch(
      `https://api.fleetturbo.com/api/v1/tracking/${trackingNumber.value}`,
      { method: 'GET' }
    )
    console.log('result', result, 'data:', data, 'proofs:', proofs)
    shipmentData.value = data
    deliveryProofs.value = proofs
  } catch (error) {
    console.error('Error fetching data:', error)
  } finally {
    isFetching.value = false
  }
}

function handleSearch(number) {
  trackingNumber.value = number
  navigateTo({ query: { s: number } })
  fetchData()
}

onMounted(() => {
  if (trackingNumber.value) fetchData()
})
</script>
