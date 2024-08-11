<template>
  <div class="w-full md:max-w-[490px] p-2 rounded-full bg-teal-500/10 flex flex-row justify-center md:justify-between items-center">
    <div class="min-w-0 shrink w-60">
      <input
        v-model="tracking_no"
        aria-label="Tracking No."
        class="block w-full p-3 text-gray-800 bg-transparent border border-transparent appearance-none rounded-xl focus:ring-0 focus:ring-offset-0  focus:outline-none  placeholder:text-gray-900/30 sm:text-sm placeholder:text-xs md:placeholder:text-sm"
        placeholder="FleetTurbo Tracking No."
        required
        :disabled="String(tracking_no).length < 1"
      >
    </div>

    <div
      class="min-w-[180px] flex gap-3 items-center justify-center cursor-pointer text-white text-xs md:text-sm font-sans bg-gradient-to-r from-gray-800 to-black px-2 md:px-4 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
      @click="openTracking"
    >
      <UIcon
        name="i-heroicons-rocket-launch"
        class="w-5 h-5"
      />
      Track My Package
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line vue/require-prop-types
const props = defineProps(['initialTrackingNumber'])
const emit = defineEmits(['search'])
const loading = ref(false)

const tracking_no = ref(props.initialTrackingNumber || '')

async function openTracking() {
  loading.value = true
  emit('search', form.trackingNumber)
  loading.value = false
}
</script>
