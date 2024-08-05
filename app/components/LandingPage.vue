<template>
  <section class="relative overflow-hidden">
    <!-- <svg
      class="absolute blur-3xl -right-96 -top-80"
      fill="none"
      viewBox="0 0 400 400"
      height="80%"
      width="80%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_10_20)">
        <g filter="url(#filter0_f_10_20)">
          <path
            d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z"
            fill="#03FFE0"
          />
          <path
            d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z"
            fill="#7C87F8"
          />
          <path
            d="M320 400H400V78.75L106.2 134.75L320 400Z"
            fill="#4C65E4"
          />
          <path
            d="M400 0H128.6L106.2 134.75L400 78.75V0Z"
            fill="#6551f3"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_10_20"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
          height="720.666"
          width="720.666"
          x="-160.333"
          y="-160.333"
        >
          <feFlood
            flood-opacity="0"
            result="BackgroundImageFix"
          />
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            mode="normal"
            result="shape"
          />
          <feGaussianBlur
            result="effect1_foregroundBlur_10_20"
            stdDeviation="80.1666"
          />
        </filter>
      </defs>
    </svg>
    <svg
      class="absolute blur-3xl -bottom-64 left-[-30rem]"
      fill="none"
      viewBox="0 0 400 400"
      height="60%"
      width="60%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_10_20)">
        <g filter="url(#filter0_f_10_20)">
          <path
            d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z"
            fill="#03FFE0"
          />
          <path
            d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z"
            fill="#7C87F8"
          />
          <path
            d="M320 400H400V78.75L106.2 134.75L320 400Z"
            fill="#4C65E4"
          />
          <path
            d="M400 0H128.6L106.2 134.75L400 78.75V0Z"
            fill="#6551f3"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_10_20"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
          height="720.666"
          width="720.666"
          x="-160.333"
          y="-160.333"
        >
          <feFlood
            flood-opacity="0"
            result="BackgroundImageFix"
          />
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            mode="normal"
            result="shape"
          />
          <feGaussianBlur
            result="effect1_foregroundBlur_10_20"
            stdDeviation="80.1666"
          />
        </filter>
      </defs>
    </svg> -->

    <section class="relative flex items-center justify-center overflow-hidden">
      <div
        class="relative items-center w-full px-5 py-12 mx-auto lg:px-16 lg:py-24 max-w-7xl md:px-12"
      >
        <div class="mx-auto text-center">
          <div
            class="text-center flex flex-col items-center justify-center space-y-4"
          >
            <p
              id="typewriter"
              ref="typewriter"
              class="w-full h-8 leading-8 font-bold text-center md:text-2xl relative z-10 bg-gradient-to-r from-gray-300 via-stone-400 to-fuchsia-800 bg-clip-text text-transparent"
            >
              <!-- {{ page.hero.title }} -->
            </p>
            <p
              id="slogan"
              class="mt-10 pb-2 w-full md:w-10/12 bg-gradient-to-r from-fuchsia-300 via-sky-500 to-cyan-800 bg-clip-text text-transparent font-bold text-center text-3xl md:text-5xl leading-relaxed"
            >
              {{ page.hero.headline.label }}
            </p>
            <p
              class="w-full md:w-6/12 pb-10 bg-gradient-to-br from-gray-300 via-stone-500 to-sky-700 bg-clip-text text-transparent leading-7 font-bold text-center md:text-2xl"
            >
              {{ page.hero.description }}
            </p>

            <div class="w-full md:max-w-[450px] p-2 rounded-full bg-teal-500/10 flex flex-row justify-center md:justify-between items-center">
              <div class="min-w-0 shrink w-60">
                <input
                  v-model="tracking_no"
                  aria-label="Tracking No."
                  class="block w-full p-3 text-black bg-transparent border border-transparent appearance-none rounded-xl focus:ring-0 focus:ring-offset-0  focus:outline-none  placeholder:text-gray-900/30 sm:text-sm"
                  placeholder="FleetTurbo Tracking No."
                  required
                >
              </div>
              <button
                class="button-17 bg-gary-900/10 py-2 px-4 rounded-full text-sm"
              >
                <UIcon
                  name="i-heroicons-rocket-launch"
                  class="w-5 h-5 mr-2 bg-blue-700 animate-pulse"
                />
                <span
                class="text-blue-700"
                  @click="openTracking"
                >Track My Package</span>
              </button>
            </div>
            <!-- <p class="mt-3 text-slate-500">
                Get notified when we launch!
              </p> -->

            <ULandingLogos
              :title="customers.title"
              :ui="{ images: 'mt-6 justify-center md:justify-around' }"
              align="center"
              class="pt-20 w-full"
            >
              <NuxtImg
                v-for="(image, index) in customers.items"
                :key="index"
                :src="image"
                :alt="`Customer brand ${index + 1}`"
                class="w-20 h-20 object-contain flex-shrink-0"
              />
            </ULandingLogos>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
const { data: page } = await useAsyncData('index', () =>
  queryContent('/').findOne()
)

const openTracking = () => navigateTo(tracking_link, { external: true })
const typewriter = ref(null)
const tracking_no = ref(null)
const tracking_link = computed(() => `https://tracking.fleetturbo.com/tracking/en/${tracking_no.value}`)
const customers = {
  title: 'We work with customers brands and startups',
  items: [
    'images/brands-jt.webp',
    'images/brands-piggy.png',
    'images/brands-speedx.png',
    'images/brands-uniuni.svg',
    'images/logo.png'
  ]
}

const text = 'Final Mile Delivery Solutions'
const speed = 60 // 每个字符的打字速度（毫秒）

function typeWriter(text, elementId, speed) {
  let i = 0
  const element = typewriter.value

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    } else {
      document.getElementById(elementId).classList.add('finished')
    }
  }

  type()
}

onMounted(() => {
  typeWriter(text, 'typewriter', speed)
})
</script>

<style>
  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes light-sweep {
    0% { left: -100%; }
    100% { left: 100%; }
  }

  #typewriter::after {
    content: '|';
    position: absolute;
    right: -10px;
    animation: blink 0.7s infinite;
  }

  #typewriter.finished::after {
    display: none;
  }

  #slogan {
  position: relative;
  overflow: hidden; /* 确保光照效果不会溢出 */
}

#slogan::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    to right,
    transparent,
    rgba(255, 255, 255, 0.1) 50%, /* 降低透明度 */
    transparent 100%
  );
  animation: light-sweep 8s linear infinite;
}

#slogan span {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(
    to right,
    #9ca3af, /* 使用更亮的颜色 */
    #d1d5db  /* 使用更亮的颜色 */
  );
}

@keyframes light-sweep {
  0% {
    left: -100%;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    left: 100%;
    opacity: 0;
  }
}

/* CSS */
.button-17 {
  align-items: center;
  appearance: none;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #3c4043;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  height: 45px;
  justify-content: center;
  letter-spacing: .1px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 14px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 200px;
  will-change: transform,opacity;
  z-index: 0;
}

.button-17:hover {
  background: #F6F9FE;
  color: #174ea6;
}

.button-17:active {
  box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
}

.button-17:focus {
  outline: none;
  border: 2px solid #4285f4;
}

.button-17:not(:disabled) {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}

.button-17:not(:disabled):hover {
  box-shadow: rgba(60, 64, 67, .3) 0 2px 3px 0, rgba(60, 64, 67, .15) 0 6px 10px 4px;
}

.button-17:not(:disabled):focus {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}

.button-17:not(:disabled):active {
  box-shadow: rgba(60, 64, 67, .3) 0 4px 4px 0, rgba(60, 64, 67, .15) 0 8px 12px 6px;
}

.button-17:disabled {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}
</style>
