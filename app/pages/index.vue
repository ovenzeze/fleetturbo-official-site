<script setup lang="ts">
const { data: page } = await useAsyncData('index', () =>
  queryContent('/').findOne()
)

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

const links = [
  {
    label: 'Community',
    children: [
      {
        label: 'Nuxters',
        to: 'https://nuxters.nuxt.com',
        target: '_blank'
      },
      {
        label: 'Video Courses',
        to: 'https://masteringnuxt.com/nuxt3?ref=nuxt',
        target: '_blank'
      },
      {
        label: 'Nuxt on GitHub',
        to: 'https://github.com/nuxt',
        target: '_blank'
      }
    ]
  },
  {
    label: 'Solutions',
    children: [
      {
        label: 'Nuxt Content',
        to: 'https://content.nuxt.com/',
        target: '_blank'
      },
      {
        label: 'Nuxt DevTools',
        to: 'https://devtools.nuxt.com/',
        target: '_blank'
      },
      {
        label: 'Nuxt Image',
        to: 'https://image.nuxt.com/',
        target: '_blank'
      },
      {
        label: 'Nuxt UI',
        to: 'https://ui.nuxt.com/',
        target: '_blank'
      }
    ]
  },
  {
    label: 'Contact Us',
    children: [
      {
        label: 'General Inquiries',
        to: 'mailto:info@example.com'
      },
      {
        label: 'Business Cooperation',
        to: 'mailto:business@example.com'
      },
      {
        label: 'Support',
        to: 'mailto:support@example.com'
      },
      {
        label: 'Feedback & Suggestions',
        to: 'mailto:feedback@example.com'
      }
    ]
  }
]

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
</script>

<template>
  <div>
    <ULandingHero
      :description="page.hero.description"
      :links="page.hero.links"
      :ui="{ container: 'mt-0', title: 'text-3xl leading-relaxed' }"
    >
      <template #headline>
        <p class="bg-gradient-to-r from-gray-300 via-stone-400 to-fuchsia-800 bg-clip-text text-transparent leading-8 font-bold text-center md:text-2xl">
          {{ page.hero.title }}
        </p>
        <p class="bg-gradient-to-r from-fuchsia-400 to-cyan-500 bg-clip-text text-transparent font-bold text-center text-3xl md:text-6xl leading-relaxed">
          {{ page.hero.headline.label }}
        </p>
      </template>

      <!-- <ImagePlaceholder /> -->

      <ULandingLogos
        :title="customers.title"
        :ui="{ images: 'mt-8 justify-center md:justify-around' }"
        align="center"
      >
        <Img
          v-for="(image, index) in customers.items"
          :key="index"
          :src="image"
          :alt="`Customer brand ${index + 1}`"
          class="w-20 h-20 object-contain flex-shrink-0"
        />
      </ULandingLogos>
    </ULandingHero>

    <ULandingSection
      :title="page.features.title"
      :description="page.features.description"
    >
      <UPageGrid
        id="features"
        class="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
      >
        <ULandingCard
          v-for="(item, index) in page.features.items"
          :key="index"
          v-bind="item"
        />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection
      :title="page.services.title"
      :description="page.services.description"
      :headline="page.services.headline"
    >
      <UPageGrid
        id="services"
        class="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
      >
        <ULandingCard
          v-for="(plan, index) in page.services.plans"
          :key="index"
          :title="plan.title"
          :icon="plan.icon"
        />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection
      :headline="page.testimonials.headline"
      :title="page.testimonials.title"
      :description="page.testimonials.description"
    >
      <UPageColumns
        id="testimonials"
        class="xl:columns-4 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
      >
        <div
          v-for="(testimonial, index) in page.testimonials.items"
          :key="index"
          class="break-inside-avoid"
        >
          <ULandingTestimonial v-bind="testimonial" />
        </div>
      </UPageColumns>
    </ULandingSection>

    <ULandingSection>
      <div class="w-full sm:px-6 lg:px-8 mt-20 ">
        <div
          class="relative isolate overflow-hidden px-30 py-20 text-center "
        >
          <h2 class="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {{ page.cta.title }}
          </h2>

          <h3 class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-500">
            {{ page.cta.description }}
          </h3>

          <div class="mt-8 flex items-center justify-center gap-x-6">
            <a
              class="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              href="#"
            >
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>

          <!-- gradient svg -->
          <svg
            viewBox="0 0 1024 1024"
            class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[32rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fill-opacity="0.7"
            />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stop-color="#3b82f6" />
                <stop
                  offset="1"
                  stop-color="#1d4ed8"
                />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </ULandingSection>

    <ULandingSection
      id="faq"
      :title="page.faq.title"
      :description="page.faq.description"
      class="scroll-mt-[var(--header-height)]"
    >
      <ULandingFAQ
        multiple
        :items="page.faq.items"
        :ui="{
          button: {
            label: 'font-semibold',
            trailingIcon: {
              base: 'w-6 h-6'
            }
          }
        }"
        class="max-w-4xl mx-auto"
      />
    </ULandingSection>
  </div>
</template>
