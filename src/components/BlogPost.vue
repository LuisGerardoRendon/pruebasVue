<script setup>
import { defineEmits } from "vue";

const props = defineProps(["title", "lorem", "label1", "label2", "label3"]);
const emit = defineEmits(["cambiarFavorito"]);

//emit('cambiarFavorito', title)
</script>

<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img
      class="w-full"
      src="src\assets\img\cold.jpg"
      alt="Sunset in the mountains"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <p class="text-gray-700 text-base">{{ lorem }}</p>
    </div>

    <div class="flex flex-col items-center mb-3">
      <button
        @click="$emit('cambiarFavorito', title)"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-6 rounded"
      >
        Favorite
      </button>
    </div>
  </div>
</template>
