<script setup lang="ts">
import { usePageWording } from '../../../composables/pageWording';
import ServiceBanner from './serviceBanner.vue';
import ServiceList from './ServiceList.vue';
import PackageHandling from './PackageHandling.vue';
import PlatformIntegration from './PlatformIntegration.vue';
import MerchantFeatures from './MerchantFeatures.vue';
import HowItWorks from './HowItWorks.vue';
import PackageTracking from './PackageTracking.vue';

const { services } = usePageWording();
</script>

<template>
  <div class="container mx-auto px-4 py-4 background text-primary">
    <AppHeader />
    <ServiceBanner :banner="services.banner" />
    <ServiceList :services="services.ourServices" />
    <PackageHandling :parcelDimensions="services.parcelDimensions" />
    <PlatformIntegration :integrations="services.effortlessAPIIntegrations" />
    <MerchantFeatures :merchant="services.merchantCenterBackend" />
    <HowItWorks :howItWorks="services.howItWorks" />
    <!-- <PackageTracking :tracking="services.packageTracking" /> -->
  </div>
</template>