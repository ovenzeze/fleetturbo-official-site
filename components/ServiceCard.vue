<template>
  <div>
    <i :class="icon" />
    <!-- 其他内容 -->
  </div>
</template>

<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    default: 'i-ph-gear' // 更新为适当的 PH 图标
  }
  // 其他属性
})
</script>