<template>
  <UContainer
    class="w-full min-h-screen flex flex-col space-y-4 justify-start items-center pt-5 md:px-0 max-w-[1000px] pb-10"
  >
    <div class="w-full flex flex-col md:flex-row md:items-center md:space-x-4 justify-between">
      <div class="flex-1 flex items-center justify-center">
        <QueryInput
          :initial-tracking-number="trackingNumber"
          class="flex-1 bg-red-30"
          @search="(tracking_no) => handleSearch(tracking_no)"
        />
      </div>
      <div class="mt-6 md:mt-0 flex items-center md:items-start justify-center cursor-pointer w-full md:w-40">
        <NuxtLink
          to="http://www.17track.net/?utm_medium=logistics&utm_source=flletturbo"
          target="_blank"
        >
          <div class="p-1 transition duration-300 ease-in-out flex flex-col items-center space-y-1 cursor-pointer">
            <div class="text-xs text-gray-600 mb-1 uppercase">
              also available on:
            </div>
            <div class="w-20 flex justify-center items-center opacity-75">
              <svg
                viewBox="0 0 296 48"
                xmlns="http://www.w3.org/2000/svg"
                alt="17track logo"
              >
                <path
                  d="m11.92 12h-11.92l5.55-12h18.29v48h-11.92z"
                  fill="#ff8c00"
                />
                <path
                  d="m55.62 0h-27.81v12h22.26l-16.68 36h11.92l22.23-48z"
                  fill="#ff8c00"
                />
                <g fill="#003a9b">
                  <path
                    d="m155 16.86c0-4.87-1.47-8.68-4.35-11.5-3.34-3.36-8.52-5.36-16.02-5.36h-18.42a1 1 0 0 0 -1 1v46a1 1 0 0 0 1 1h9.93a1 1 0 0 0 1-1v-12.57h7.49a35.91 35.91 0 0 0 4.57-.28l3.57 12.85a1.39 1.39 0 0 0 1.23 1h10a.72.72 0 0 0 .73-1l-4.83-17.25c.24-.22.48-.44.71-.68 2.87-2.82 4.35-6.63 4.35-11.5v-.14c0-.07 0-.14 0-.21s0-.14 0-.21zm-27.74 7.21v-12.07h8.46c4.51 0 7.28 2 7.28 5.72v.68c0 3.49-2.66 5.68-7.29 5.68z"
                  />
                  <path
                    d="m204.35 47-12.75-46a1.39 1.39 0 0 0 -1.26-1h-17.13a1.39 1.39 0 0 0 -1.26 1l-12.76 46a.72.72 0 0 0 .73 1h9.93a1.39 1.39 0 0 0 1.26-1l1.95-7h17.42l1.95 7a1.39 1.39 0 0 0 1.26 1h9.93a.72.72 0 0 0 .73-1zm-28-19 5.12-18.51c.15-.53.39-.53.53 0l5.16 18.51z"
                  />
                  <path
                    d="m110.26 0h-35.54l-5.55 12h16.25v35a1 1 0 0 0 1 1h9.93a1 1 0 0 0 1-1v-35h12.91a1 1 0 0 0 1-1v-10a1 1 0 0 0 -1-1z"
                  />
                  <path
                    d="m281.27 48h14.73l-17.33-24 17.33-24h-14.78l-15 20.81v-19.81a1 1 0 0 0 -1-1h-9.93a1 1 0 0 0 -1 1v46a1 1 0 0 0 1 1h9.93a1 1 0 0 0 1-1v-5.74l5.1-7.07z"
                  />
                  <path d="m52.47 48h11.1v-23.96z" />
                  <path
                    d="m236.4 0h-17.88c-6.91 0-11.92 3.78-11.92 9v10.49 9.09 10.42c0 5.21 5 9 11.92 9h17.88c6.91 0 11.92-3.79 11.92-9v-10a1 1 0 0 0 -1-1h-9.92a1 1 0 0 0 -1 1v7h-15.89a2 2 0 0 1 -2-2v-6.1-7.8-6.1a2 2 0 0 1 2-2h15.89v7.1a1 1 0 0 0 1 1h9.93a1 1 0 0 0 1-1v-10.1c-.01-5.22-5.02-9-11.93-9z"
                  />
                  <path d="m234.42 36h2v-2a2 2 0 0 1 -2 2z" />
                  <path d="m236.4 12h-2a2 2 0 0 1 2 2z" />
                </g>
              </svg>
            </div>
            <div class="pt-1 h-6 font-bold text-xs text-center relative z-10 bg-gradient-to-r from-gray-300 via-stone-400 to-fuchsia-800 bg-clip-text text-transparent uppercase">
              Tracking Supported
            <!-- <Icon
              name="ph:arrow-square-out"
              class="w-6 h-6 text-gray-600 hover:text-gray-800 transition-colors"
            /> -->
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>

    <UDivider v-if="shipHistory.length" />

    <div
      v-if="shipHistory.length"
      class="w-full"
    >
      <ShipmentInfo
        :info="shipmentInfo"
        class="mx-auto mb-6 mt-6 md:hidden"
      />
      <div
        class="w-full flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 justify-center md:justify-between items-start md:px-10"
      >
        <div class="w-full md:w-4/6">
          <TrackingTimeline :logistics-data="shipHistory.slice().reverse()" />
        </div>
        <div class="w-full md:w-2/6">
          <ShipmentInfo
            :info="shipmentInfo"
            class="min-w-[380px] mx-auto mb-2 mt-6 hidden md:block"
          />

          <ProofImages :proofs="deliveryProofs" />
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
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
  statusId: shipHistory.value.length
    ? shipHistory.value[0].tracking_event_status_id
    : 0,
  carrier: shipHistory.value.length ? shipHistory.value[0].carrier_name : '',
  lastUpdateDate: shipHistory.value.length
    ? shipHistory.value[0].updated_at
    : '',
  deliveryTime: shipHistory.value.length ? shipHistory.value[0].timestamp : '',
  shipDate: shipHistory.value.length ? shipHistory.value.at(-1).timestamp : '',
  deliveryAddress: null,
  senderName: null,
  eta: null
}))

const accordionStyle = {
  wrapper:
    'dark:border-gray-700 rounded-lg overflow-hidden w-full border broder-gray-200',
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

const isValidTrackingNumber = computed(() =>
  isValidTrackingNo(trackingNumber.value)
)

onMounted(() => {
  // 如果有单号且单号无效，才提示用户
  if (trackingNumber.value && !isValidTrackingNumber.value) {
    toast.add({
      title: 'Invalid Tracking Number',
      description:
        'Invalid tracking number format. Please check your delivery details and try again.',
      icon: 'i-heroicons-exclamation-triangle',
      color: 'red',
    })
  } else if (isValidTrackingNumber.value) {
    fetchData()
  }
})

// 添加一个函数来处理17TRACK点击
function handle17TrackClick() {
  window.open('https://www.17track.net', '_blank')
}
</script>
