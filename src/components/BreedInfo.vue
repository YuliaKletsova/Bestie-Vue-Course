<template>
  <div class="breed-info">
    <h2 class="breed-title">🐾 {{ breed.name }}</h2>
    <p>{{ breed.description }}</p>
    <p><strong>Origin:</strong> {{ breed.origin }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  breed: {
    name: string
    description: string
    origin: string
  }
}>()
</script>

<style scoped>
.breed-info {
  margin-top: 24px;
  background: #f8f8f8;
  padding: 16px;
  border-radius: 12px;
}

.breed-title {
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 600;
}
</style>
