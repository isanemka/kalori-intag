<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-bold">Logga dina måltider</h1>

    <!-- Formulär för att lägga in mat -->
    <UCard>
      <template #header>
        <h2 class="text-lg font-semibold">Lägg till en måltid</h2>
      </template>

      <form @submit.prevent="addMeal" class="space-y-4">
        <UInput v-model="mealName" placeholder="Måltidens namn" required />
        <UInput v-model.number="calories" type="number" placeholder="Kalorier" required />
        <UButton type="submit" color="primary">Lägg till</UButton>
      </form>
    </UCard>

    <!-- Lista över inlagda måltider -->
    <UCard v-if="meals.length > 0">
      <template #header>
        <h2 class="text-lg font-semibold">Dina måltider</h2>
      </template>
      <ul>
        <li v-for="meal in meals" :key="meal.name" class="flex justify-between border-b py-2">
          <span>{{ meal.name }}</span>
          <span class="text-gray-500">{{ meal.calories }} kcal</span>
        </li>
      </ul>
    </UCard>
  </div>
</template>

<script setup>
import { ref } from "vue";

const mealName = ref("");
const calories = ref("");
const meals = ref([]);

const addMeal = () => {
  if (mealName.value && calories.value) {
    meals.value.push({ name: mealName.value, calories: Number(calories.value) });
    mealName.value = "";
    calories.value = "";
  }
};
</script>