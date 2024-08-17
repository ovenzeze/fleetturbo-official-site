<template>
  <UContainer class="w-full min-h-screen flex flex-col space-y-4 justify-start items-center pt-5 md:px-0 max-w-[1000px] pb-10">
    <NuxtImg
        src="/images/logo-horizon-full-transparent.png"
        alt="Fleet Turbo"
        width="120"
        class="filter dark:brightness-200 brightness-25 mb-6"
      />
    <QueryInput :initialTrackingNumber="urlTrackingNo" @search="handleSearch" />

    <UDivider v-if="shipHistory.length" />

    <!-- 加载动画 -->
    <div v-if="isFetching" class="w-full flex justify-center items-center py-12">
      <UIcon name="i-heroicons-arrow-path" class="w-12 h-12 animate-spin text-primary" />
    </div>

    <!-- 初始状态提示 -->
    <div v-else-if="!shipHistory.length && !isFetching && isInitialized" class="w-full flex flex-row items-center  justify-center pt-48 animate-pulse">
      <UIcon name="i-heroicons-truck" class="w-5 h-5 text-gray-400 mr-2" />
      <p class="text-sm text-gray-500 uppercase">Enter a tracking number to start</p>
    </div>

    <div v-else-if="shipHistory.length" class="w-full">
      <ShipmentInfo :info="shipmentInfo" class="mx-auto mb-6 mt-6 md:hidden" />
      <div class="w-full flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 justify-center md:justify-between items-start md:px-10">
        <div class="w-full md:w-4/6">
          <TrackingTimeline :logistics-data="shipHistory.slice().reverse()" />
        </div>
        <div class="w-full md:w-2/6">
          <ShipmentInfo :info="shipmentInfo" class="min-w-[380px] mx-auto mb-2 mt-6 hidden md:block" />
          <ProofImages :proofs="deliveryProofs" />
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import QueryInput from './queryInput.vue'
import ShipmentInfo from './shipmentInfo.vue'
import ProofImages from './proofImages.vue'
import TrackingTimeline from './timeline.vue'
import { isValidTrackingNo } from '~~/utils/common'

const toast = useToast()
const route = useRoute()
const urlTrackingNo = ref(route.query.s as string || '')
const shipHistory = ref([])
const deliveryProofs = ref([])
const isFetching = ref(false)
const isInitialized = ref(false)

const shipmentInfo = computed(() => ({
  history: shipHistory.value,
  proofs: deliveryProofs.value,
  trackingNo: urlTrackingNo.value,
  statusId: shipHistory.value.length ? shipHistory.value[0].tracking_event_status_id : 0,
  carrier: shipHistory.value.length ? shipHistory.value[0].carrier_name : '',
  lastUpdateDate: shipHistory.value.length ? shipHistory.value[0].updated_at : '',
  deliveryTime: shipHistory.value.length ? shipHistory.value[0].timestamp : '',
  shipDate: shipHistory.value.length ? shipHistory.value.at(-1).timestamp : '',
  deliveryAddress: null,
  senderName: null,
  eta: null
}))

async function fetchData(trackingNo: string) {

  isFetching.value = true
  try {
    const response = await $fetch(`https://api.fleetturbo.com/api/v1/tracking/${trackingNo}`, { method: 'GET' })
    const { data = [], proofs = [] } = response as { data: any[], proofs: any[] }
    shipHistory.value = data
    deliveryProofs.value = proofs
  } catch (error) {
    console.error('Error fetching data:', error)
    toast.add({
      title: 'Error',
      description: 'Failed to fetch tracking information. Please try again.',
      icon: 'i-heroicons-exclamation-circle',
      color: 'red'
    })
  } finally {
    isFetching.value = false
  }
}

// 更新 queryInput 组件的参数
const handleSearch = (s: string) => {
  console.log('handleSearch', s)
  fetchData(s)
}

</script>
