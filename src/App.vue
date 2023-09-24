<script setup lang="ts">
  import Component from './components/Component.vue'
</script>

<template>
  <main class="content">
      <Component />
  </main>
</template>

<style scoped>
  .content {
      width: 100%;
      height: 90vh;

      display: flex;
      justify-content: center;
      align-items: center;
  }
</style>
