## Задачка 4

Кажется домашняя страница немного скучная, довай добавим приколюх.Давай создадим компонент в папке components (для него не забудь использовать базовый тултип из нашей библиотеки компонентов) и назовем его например MeowTooltip.vue. Дизайн и текст придумай сама, развлекайся!

#### Что-то типо такого

![alt text](../assets/tooltips.gif)

> ⚠️ **Подсказка**: по сути тебе придется убрать строку `<img :src="src" alt="Cat" class="cat-tile-image" />` и заменить ее на твой компонент. А сам тег перенести внутрь копонента тултипа.

<details>
  <summary>Не подсматривай решение!</summary>

```ts
<template>
  <n-tooltip trigger="hover" :show-arrow="false" overflow="true">
    <template #trigger>
      <img :src="src" alt="Cat" class="cat-tile-image" />
    </template>
    Meow!
  </n-tooltip>
</template>

<script setup lang="ts">
defineProps<{ src: string }>()
</script>

<style scoped>
.cat-tile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  aspect-ratio: 1 / 1;
}
</style>
```

</details>
