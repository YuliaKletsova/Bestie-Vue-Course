## Задачка 3

Отлично идем, давай теперь повеселимся. Кажется страница котика слишком пустая. Давай это исправим, заюзаем моковый API `https://api.thecatapi.com/v1/breeds`, тебе не нужно никаких авторизаций. Не забудь что API не связаны друг с другом, поэтому из массива пород, который ты получишь можешь рандомно выбрать любую и отрисовать.

Для удобства в папке components есть BreedInfo, это готовый компонент его надо импортировать и заиспользовать.

Для начала создадим переменную для породы. Мы хотим не только название, но и небольшое описание и страну происхождения.

У меня получилось так, но ты можешь поменять дизайн, кстати найди нужные стили для этого, они уже в коде есть!
![alt text](image-3.png)

<details>
  <summary>Не подсматривай решение!</summary>

объявление переменной

```ts
const breed = ref<{
  name: string
  description: string
  origin: string
} | null>(null)
```

Это код получения данных

```ts
try {
  const breedRes = await fetch('https://api.thecatapi.com/v1/breeds')
  const breedList = await breedRes.json()
  breed.value = breedList[Math.floor(Math.random() * breedList.length)]
} catch {
  breed.value = null
}
```

Осталось импортировать и отрисовать компонент, расположи его пряд под тегом n-page-header

```ts
import BreedInfo from './BreedInfo.vue'
```

```html
<BreedInfo v-if="breed" :breed="breed" />
```

</details>
