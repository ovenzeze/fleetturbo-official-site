<template>
  <div class="w-full min-h-screen flex flex-col space-y-10 justify-start items-center md:px-0 pt-24 md:pt-20">
    <QueryInput
        :initialTrackingNumber="urlTrackingNo"
        @search="handleSearch"
        :class="[
          'w-full max-w-3xl transition-all duration-500 ease-in-out mt-12 px-6 mt-[10vh]',
          shipHistory.length || isFetching ? 'animate-slide-up' : ''
        ]"
      />
    <!-- <div :class="{' w-full flex flex-col justify-start items-center h-[600px]': !shipHistory.length && !isFetching}">
      <div v-if="!shipHistory.length && !isFetching" class="text-center mb-8 animate-fade-in">
        <HowItWorks :howItWorks="services.howItWorks" class="h-[600px] md:w-full px-[10vw] opacity-25" source="tracking"/>
      </div>
    </div> -->

    <UDivider v-if="shipHistory.length" />

    <!-- 加载动画 -->
    <div v-if="isFetching" class="w-full flex justify-center items-center py-12">
      <UIcon name="ph:circle-notch" class="w-12 h-12 animate-spin text-primary" />
    </div>

    <div v-if="shipHistory.length" class="w-full animate-fade-in">
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
  </div>
</template>

<script setup lang="ts">
import QueryInput from './queryInput.vue'
import ShipmentInfo from './shipmentInfo.vue'
import ProofImages from './proofImages.vue'
import TrackingTimeline from './timeline.vue'
import { isValidTrackingNo } from '~~/utils/common'
import HowItWorks from '../services/HowItWorks.vue'
import { usePageWording } from '../../composables/pageWording';

const toast = useToast()
const route = useRoute()
const urlTrackingNo = ref(route.query.s as string || '')
const shipHistory = ref([])
const deliveryProofs = ref([])
const isFetching = ref(false)

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

const { services } = usePageWording();

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

<style scoped>
.animate-slide-up {
  animation: slideUp 0.5s ease-out forwards;
}

@keyframes slideUp {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-20vh);
  }
}
</style>
