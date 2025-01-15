<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
    <UContainer>
      <UToggle v-model="isDarkMode" />
    </UContainer>
    <UContainer class="py-6">
      <slot />
    </UContainer>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useColorMode } from "@vueuse/core";

const mode = useColorMode();
const isDarkMode = ref(mode.value === "dark");

watch(isDarkMode, (newValue) => {
  mode.value = newValue ? "dark" : "light";
});
</script>