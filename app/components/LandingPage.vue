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
            <!-- <div class="bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100 h-screen flex flex-col items-center justify-center"> -->
            <p
              id="typewriter"
              ref="typewriter"
              class="w-full h-8 leading-8 font-bold text-center md:text-2xl relative z-10 bg-gradient-to-r from-gray-300 via-stone-400 to-fuchsia-800 bg-clip-text text-transparent"
            >
              <!-- {{ page.hero.title }} -->
            </p>
            <p
              id="slogan"
              class="mt-10 pb-2 w-full md:w-10/12 bg-gradient-to-r from-fuchsia-300 via-sky-500 to-cyan-800 bg-clip-text text-transparent font-bold text-center text-3xl md:text-5xl leading-relaxed leading-7"
            >
              {{ page.hero.headline.label }}
            </p>
            <p
              class="w-full md:w-6/12 bg-gradient-to-br from-gray-300 via-stone-500 to-sky-700 bg-clip-text text-transparent leading-7 font-bold text-center md:text-2xl"
            >
              {{ page.hero.description }}
            </p>
            <!-- </div> -->

            <ULandingLogos
              :title="customers.title"
              :ui="{ images: 'mt-8 justify-center md:justify-around' }"
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

            <div class="pb-24 mx-auto mt-12 hidden">
              <div
                class="grid w-full grid-cols-2 gap-6 mx-auto lg:grid-cols-6 md:grid-cols-3"
              >
                <div>
                  <figure class="relative max-w-md mx-auto lg:mx-0">
                    <div>
                      <figcaption class="mt-2 text-sm">
                        <div class="flex flex-col items-center">
                          <div>
                            <img
                              alt=""
                              class="inline-block w-16 h-16 rounded-full"
                              src="https://pbs.twimg.com/profile_images/1605606433722081282/r4ECyqWZ_400x400.jpg"
                            >
                          </div>
                          <div class="mt-3">
                            <p class="font-semibold text-[#141521]">
                              Dagobert Renouf
                            </p>
                            <p class="mt-6">
                              <span
                                class="px-4 py-2 text-pink-500 rounded-full bg-pink-50"
                              >Startups</span>
                            </p>
                          </div>
                        </div>
                      </figcaption>
                    </div>
                  </figure>
                </div>
                <div>
                  <figure class="relative max-w-md mx-auto lg:mx-0">
                    <div>
                      <figcaption class="mt-2 text-sm">
                        <div class="flex flex-col items-center">
                          <div>
                            <img
                              alt=""
                              class="inline-block w-16 h-16 border-2 border-black rounded-full"
                              src="https://pbs.twimg.com/profile_images/1484538965109907461/VaQu5_PI_400x400.jpg"
                            >
                          </div>
                          <div class="mt-3">
                            <p class="font-semibold text-[#141521]">
                              Easlo
                            </p>
                            <p class="mt-6">
                              <span
                                class="px-4 py-2 text-indigo-600 rounded-full bg-indigo-50"
                              >Notion</span>
                            </p>
                          </div>
                        </div>
                      </figcaption>
                    </div>
                  </figure>
                </div>
                <div>
                  <figure class="relative max-w-md mx-auto lg:mx-0">
                    <div>
                      <figcaption class="mt-2 text-sm">
                        <div class="flex flex-col items-center">
                          <div>
                            <img
                              alt=""
                              class="inline-block w-16 h-16 border-2 border-black rounded-full"
                              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                            >
                          </div>
                          <div class="mt-3">
                            <p class="font-semibold text-[#141521]">
                              Mike
                            </p>
                            <p class="mt-6">
                              <span
                                class="px-4 py-2 text-indigo-600 rounded-full bg-indigo-50"
                              >Astro</span>
                            </p>
                          </div>
                        </div>
                      </figcaption>
                    </div>
                  </figure>
                </div>
                <div>
                  <figure class="relative max-w-md mx-auto lg:mx-0">
                    <div>
                      <figcaption class="mt-2 text-sm">
                        <div class="flex flex-col items-center">
                          <div>
                            <img
                              alt=""
                              class="inline-block w-16 h-16 border-2 border-black rounded-full"
                              src="https://pbs.twimg.com/profile_images/1476118697970483201/aUu84NTv_400x400.jpg"
                            >
                          </div>
                          <div class="mt-3">
                            <p class="font-semibold text-[#141521]">
                              Luca Restagnano
                            </p>
                            <p class="mt-6">
                              <span
                                class="px-4 py-2 text-blue-500 rounded-full bg-blue-50"
                              >Indie hacking</span>
                            </p>
                          </div>
                        </div>
                      </figcaption>
                    </div>
                  </figure>
                </div>
                <div>
                  <figure class="relative max-w-md mx-auto lg:mx-0">
                    <div>
                      <figcaption class="mt-2 text-sm">
                        <div class="flex flex-col items-center">
                          <div>
                            <img
                              alt=""
                              class="inline-block w-16 h-16 border-2 border-black rounded-full"
                              src="https://pbs.twimg.com/profile_images/1543202856559321088/zAA7wfm9_400x400.jpg"
                            >
                          </div>
                          <div class="mt-3">
                            <p class="font-semibold text-[#141521]">
                              Ivan Karabadzhak
                            </p>
                            <p class="mt-6">
                              <span
                                class="px-4 py-2 text-orange-600 rounded-full bg-orange-50"
                              >Freelancer</span>
                            </p>
                          </div>
                        </div>
                      </figcaption>
                    </div>
                  </figure>
                </div>
                <div>
                  <figure class="relative max-w-md mx-auto lg:mx-0">
                    <div>
                      <figcaption class="mt-2 text-sm">
                        <div class="flex flex-col items-center">
                          <div>
                            <img
                              alt=""
                              class="inline-block w-16 h-16 border-2 border-black rounded-full"
                              src="https://pbs.twimg.com/profile_images/1382124861862998016/BiLzL4HY_400x400.jpg"
                            >
                          </div>
                          <div class="mt-3">
                            <p class="font-semibold text-[#141521]">
                              Christine Trac
                            </p>
                            <p class="mt-6">
                              <span
                                class="px-4 py-2 text-teal-500 rounded-full bg-teal-50"
                              >Writing</span>
                            </p>
                          </div>
                        </div>
                      </figcaption>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
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
const typewriter = ref(null)
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
      rgba(255, 255, 255, 0.8) 50%,
      transparent 100%
    );
    animation: light-sweep 8s linear infinite;
  }

  #slogan span{
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(
      to right,
      #374151,
      #374151
    );
  }
</style>
