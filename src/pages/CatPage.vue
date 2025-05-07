<template>
  <CatProfile :id="catId" />
</template>

<script setup lang="ts">
import CatProfile from '../components/CatProfile.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const catId = route.params.id as string
</script>
