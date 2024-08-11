<template>
  <UCard>
    <!-- <template #header>
      <h3 class="text-lg font-bold">
        Package Details
      </h3>
    </template>
    <UTable
      :columns="columns"
      :rows="formattedDetails"
    /> -->
  </UCard>
</template>

<script setup>
const props = defineProps(['details'])

const columns = [
  { key: 'property', label: 'Property' },
  { key: 'value', label: 'Value' }
]

const formattedDetails = computed(() => [
  { property: 'Weight', value: props.details.weight },
  { property: 'Dimensions', value: props.details.dimensions },
  { property: 'Shipping Method', value: props.details.shippingMethod }
])
</script>
