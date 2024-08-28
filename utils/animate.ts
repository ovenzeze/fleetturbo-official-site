
export function useIntersectionObserver(options = {}) {
  const isIntersecting = ref(false)
  const target = ref(null)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
      isIntersecting.value = entry.isIntersecting
    }, options)

    if (target.value) {
      observer.observe(target.value)
    }
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return { isIntersecting, target }
}


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('intersect', {
    mounted(el, binding) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          binding.value()
          observer.unobserve(el)
        }
      }, { threshold: 0.1 })
      observer.observe(el)
    }
  })
})