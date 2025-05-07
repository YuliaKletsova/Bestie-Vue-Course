<template>
  <n-page-header>
    <template #title>
      <h1 class="gallery-title">Cat Gallery</h1>
    </template>

    <div class="gallery">
      <div v-for="i in 100" :key="i" class="gallery-item" @click="goToCat(i)">
        <img :src="`https://cataas.com/cat?unique=${i}`" alt="Cat" />
      </div>
    </div>
  </n-page-header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goToCat(id: number) {
  router.push(`/cat/${id}`)
}
</script>

<style scoped>
.gallery-title {
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  margin: 12px 0 24px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 12px;
  padding: 16px;
}

.gallery-item {
  cursor: pointer;
  overflow: hidden;
  border-radius: 12px;
  transition: transform 0.2s ease;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  aspect-ratio: 1 / 1;
}

.gallery-item:hover {
  transform: scale(1.05);
}
</style>
