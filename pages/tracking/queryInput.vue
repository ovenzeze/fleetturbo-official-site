<script setup>
import { isValidTrackingNo } from '~~/utils/common'

// eslint-disable-next-line vue/require-prop-types
const props = defineProps(['initialTrackingNumber'])
const emit = defineEmits(['search'])
const loading = ref(false)
const toast = useToast()
const tracking_no = ref(props.initialTrackingNumber || '')
const isValid = computed(() => isValidTrackingNo(tracking_no.value))

async function openTracking() {
  if (!isValid.value) {
    toast.add({
      title: 'Invalid Tracking No, Please Try Again',
      icon: 'i-heroicons-exclamation-triangle',
      color: 'red'
    })
    return
  }

  loading.value = true

  // 判断当前是否在tracking页面
  const route = useRoute()
  const isTrackingPage = route.path === '/tracking'

  if (isTrackingPage) {
    // 如果在tracking页面，直接触发搜索
    emit('search', tracking_no.value)

  } else {
    // 如果不在tracking页面，跳转到tracking页面
    await navigateTo(`/tracking?s=${tracking_no.value}`)
  }

  loading.value = false
}
onMounted(() => {
  setTimeout(() => {
    if (!tracking_no.value) return
    if (!isValid.value) {
    toast.add({
      title: 'Invalid Tracking No, Please Try Again',
      icon: 'i-heroicons-exclamation-triangle',
      color: 'red'
    })
  } else {
      emit('search', tracking_no.value)
    }
  }, 100)
})
</script>

<template>
  <div class="w-full flex flex-col md:flex-row justify-center items-center gap-y-4">
    <div class="flex-1 flex justify-center">
      <div class="w-full md:max-w-[490px] p-2 rounded-full bg-teal-500/10 flex flex-row justify-between items-center">
        <div class="min-w-0 shrink w-60">
          <input
            v-model="tracking_no"
            aria-label="Tracking No."
            class="block w-full p-3 text-gray-600 bg-transparent border border-transparent appearance-none rounded-xl focus:ring-0 focus:ring-offset-0  focus:outline-none  placeholder:text-gray-900/30 dark:placeholder:text-text-primary/30 sm:text-sm placeholder:text-xs md:placeholder:text-sm"
            placeholder="FleetTurbo Tracking No."
            required
          >
        </div>
        <div
          class="min-w-[90px] md:min-w-[180px] flex gap-1 md:gap-3 items-center justify-center cursor-pointer text-white text-xs md:text-sm bg-gradient-to-r from-gray-800 to-black px-2 md:px-4 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200"
          @click="openTracking"
        >
          <UIcon
            name="i-heroicons-rocket-launch"
            class="w-4 h-4 md:w-5 md:h-5"
          />
          <span class="hidden md:block">
            Track My Package
          </span>
          <span class="block md:hidden">
            Track
          </span>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center w-[150px]">
      <NuxtLink
        to="http://www.17track.net/?utm_medium=logistics&utm_source=flletturbo"
        target="_blank"
        class="group transition-all duration-300 ease-in-out"
      >
        <div class="p-1 flex flex-col items-center space-y-1 cursor-pointer opacity-100 hover:opacity-100 transition-opacity duration-300">
          <div class="text-xs text-gray-500 mb-2 uppercase font-semibold group-hover:text-gray-700 transition-colors duration-300">
            also available on
          </div>
          <div class="w-16 flex justify-center items-center opacity-90 group-hover:opacity-100 transition-opacity duration-300">
            <svg
              viewBox="0 0 296 48"
              xmlns="http://www.w3.org/2000/svg"
              alt="17track logo"
              class="w-full h-auto"
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
          <div class="pt-1 h-4 font-bold text-[10px] text-center relative z-10 bg-gradient-to-r from-gray-400 via-stone-500 to-fuchsia-700 bg-clip-text text-transparent uppercase opacity-80 group-hover:opacity-100 group-hover:from-gray-300 group-hover:via-stone-400 group-hover:to-fuchsia-800 transition-all duration-300">
            Tracking Supported
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
