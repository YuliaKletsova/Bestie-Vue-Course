<template>
  <div class="cat-profile-wrapper">
    <n-spin :show="loading">
      <n-page-header :subtitle="catFact" @back="handleBack">
        <n-grid :cols="5" responsive="screen">
          <n-gi>
            <n-statistic label="Meows" :value="stats.meows" />
          </n-gi>
          <n-gi>
            <n-statistic label="Naps" :value="stats.naps" />
          </n-gi>
          <n-gi>
            <n-statistic label="Apologies" :value="stats.apologies" />
          </n-gi>
          <n-gi>
            <n-statistic label="Birds Chased" :value="stats.birds" />
          </n-gi>
          <n-gi>
            <n-statistic label="Hairballs" :value="stats.hairballs" />
          </n-gi>
        </n-grid>

        <template #title>
          <span>{{ catName }}</span>
        </template>

        <template #header>
          <n-breadcrumb>
            <n-breadcrumb-item>
              <RouterLink to="/">Gallery</RouterLink>
            </n-breadcrumb-item>
            <n-breadcrumb-item>{{ catName }}</n-breadcrumb-item>
          </n-breadcrumb>
        </template>

        <template #avatar>
          <n-avatar :src="catImage" round size="large" />
        </template>

        <template #footer> As of {{ date }} </template>
      </n-page-header>
    </n-spin>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useMessage } from 'naive-ui'

const props = defineProps<{ id: string }>()
const message = useMessage()
const catImage = ref('')
const catName = ref('')
const catFact = ref('')
const date = new Date().toLocaleDateString()
const loading = ref(true)

const stats = ref({
  meows: 0,
  naps: 0,
  apologies: 0,
  birds: 0,
  hairballs: 0,
})

// добавь переменную тут

function randomStat() {
  return Math.floor(Math.random() * 50)
}

async function fetchCat() {
  const storedNameKey = `cat-name-${props.id}`
  const cachedName = localStorage.getItem(storedNameKey)
  if (cachedName) {
    catName.value = cachedName
  }

  loading.value = true
  catImage.value = `https://cataas.com/cat?unique=${props.id}`

  try {
    const factRes = await fetch('https://catfact.ninja/fact')
    const factData = await factRes.json()
    catFact.value = factData.fact
  } catch {
    catFact.value = 'This cat keeps its secrets...'
  }

  try {
    const nameRes = await fetch('https://randomuser.me/api/')
    const nameData = await nameRes.json()
    const user = nameData.results[0]
    catName.value = user.name.first
    localStorage.setItem(storedNameKey, user.name.first)
  } catch {
    catName.value = 'Mysterio'
  }

  // запроси данные тут

  stats.value = {
    meows: randomStat(),
    naps: randomStat(),
    apologies: randomStat(),
    birds: randomStat(),
    hairballs: randomStat(),
  }

  loading.value = false
}

function handleBack() {
  message.info('[back]')
  window.history.back()
}

onMounted(fetchCat)
</script>

<style scoped>
.cat-profile-wrapper {
  padding: 16px;
  padding-left: max(16px, 5vw);
  padding-right: max(16px, 5vw);
  box-sizing: border-box;
}
</style>
