<script setup lang="ts">
  import Parent from "./components/Parent.vue";
</script>

<template>
  <main class="content">
      <Parent />
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
