<template>
  <UContainer
    class="w-full min-h-screen flex flex-col space-y-4 justify-start items-center pt-5 px-4 md:px-0 max-w-[1000px] pb-10"
  >
    <QueryInput
      :initial-tracking-number="trackingNumber"
      @search="(tracking_no) => handleSearch(tracking_no)"
    />
    <UDivider v-if="shipHistory.length" />

    <div
      v-if="shipHistory.length"
      class="w-full space-y-4"
    >
      <ShipmentInfo
        :info="shipmentInfo"
        class="w-full min-w-[370px] mb-6 mt-6 md:hidden"
      />
      <!-- Responsive layout for Timeline and Proof -->
      <div
        class="w-full flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 justify-between items-start px-10 gap-x-4"
      >
        <!-- Timeline (wider on large screens) -->
        <div class="w-full md:w-4/6">
          <!-- <UAccordion
            :items="[timelineItem]"
            :ui="accordionStyle"
            :default-open="!isFetching ? [0] : [0, 1]"
          >
            <template #default="{ item, open }">
              <AccordionButton
                :item="item"
                :open="open"
                :loading="isFetching"
              />
            </template>
            <template #tracking-timeline>
            </template>
          </UAccordion> -->
          <TrackingTimeline
            :logistics-data="shipHistory.slice().reverse()"
          />
        </div>

        <!-- Proof (narrower on large screens) -->
        <div class="w-full md:w-2/6">
          <!-- ShipmentInfo always visible at the top -->
          <ShipmentInfo
            :info="shipmentInfo"
            class="w-full min-w-[370px] mb-6 mt-6 hidden md:block"
          />
          <UAccordion
            :items="[proofItem]"
            :ui="accordionStyle"
            class="w-full min-w-[370px]"
            :default-open="!isFetching ? [0] : [0, 1]"
          >
            <template #default="{ item, open }">
              <AccordionButton
                :item="item"
                :open="open"
                :loading="isFetching"
              />
            </template>
            <template #proof-images>
              <ProofImages :proofs="deliveryProofs" />
            </template>
          </UAccordion>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import QueryInput from './queryInput.vue'
import ShipmentInfo from './shipmentInfo.vue'
import TrackingTimeline from './timeline.vue'
import ProofImages from './proofImages.vue'
import AccordionButton from './accordionButton.vue'
import { isValidTrackingNo } from '~~/utils/common'
const toast = useToast()
const route = useRoute()
const trackingNumber = ref(route.query.s || '')
const shipHistory = ref([])
const deliveryProofs = ref([])
const isFetching = ref(false)

const timelineItem = computed(() => ({
  label: 'Tracking Timeline',
  icon: 'i-heroicons-clock',
  slot: 'tracking-timeline'
}))

const proofItem = computed(() => ({
  label: 'Proof of Delivery',
  icon: 'i-heroicons-camera',
  slot: 'proof-images'
}))

const shipmentInfo = computed(() => ({
  history: shipHistory.value,
  proofs: deliveryProofs.value,
  trackingNo: trackingNumber.value,
  statusId: shipHistory.value.length ? shipHistory.value[0].tracking_event_status_id : 0,
  carrier: shipHistory.value.length ? shipHistory.value[0].carrier_name : '',
  lastUpdateDate: shipHistory.value.length ? shipHistory.value[0].updated_at : '',
  deliveryTime: shipHistory.value.length ? shipHistory.value[0].timestamp : '',
  shipDate: shipHistory.value.length ? shipHistory.value.at(-1).timestamp : '',
  deliveryAddress: null,
  senderName: null,
  eta: null
}))
const accordionStyle = {
  wrapper: 'dark:border-gray-700 rounded-lg overflow-hidden w-full border broder-gray-200',
  item: {
    base: 'border-b border-gray-200 dark:border-gray-700 last:border-none',
    trigger: 'w-full',
    content: 'p-4'
  }
}

async function fetchData() {
  isFetching.value = true
  try {
    const {
      data = [],
      proofs = [],
      result = false
    } = await $fetch(
      `https://api.fleetturbo.com/api/v1/tracking/${trackingNumber.value}`,
      { method: 'GET' }
    )
    console.log('result', result, 'data:', data, 'proofs:', proofs)
    shipHistory.value = data
    deliveryProofs.value = proofs
  } catch (error) {
    console.error('Error fetching data:', error)
  } finally {
    isFetching.value = false
  }
}

function handleSearch(s) {
  console.log('[handleSearch]:', s)
  trackingNumber.value = s
  navigateTo({ query: { s } })
  fetchData()
}

const isValidTrackingNumber = computed(() => (isValidTrackingNo(trackingNumber.value)))

onMounted(() => {
  if (isValidTrackingNumber.value) fetchData()
  else toast.add({
    title: 'Invalid Tracking Number',
    description: 'Invalid tracking number format. Please check your delivery details and try again.',
    status: 'error',
    duration: 3000
  })
})
</script>
