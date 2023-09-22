<template>
  <div class="overflow-hidden rounded-lg bg-white" @click="$emit('abrirModal', resultado)">

    <div class="h-6 flex justify-end">
      <p class="text-red-600 mr-2">X</p>
    </div>

    <div class="flex h-28">
      <div class="flex  w-6/12">
        <p class="font-bold text-lg ml-4">{{elemento.titulo}}</p>
      </div>

      <div class="flex  w-6/12 pl-4">
        <div class="w-3/4 ">
          <p class="font-bold">Base Contable</p>
          <p class="font-bold">Base SAT</p>
        </div>
        <div class="w-1/4 mr-2">
          <p class="text-right">{{ elemento['BASE-CONTABLE'] }}</p>
          <p class="text-right">{{ elemento['BASE-SAT'] }}</p>
          <p class="text-right">{{ resultado }}</p>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";



const resultado = ref(0);
const baseContable = ref(0)
const baseSat = ref(0)

const onClick = () =>{
  console.log("Me hiciste click");
}

const props = defineProps({
    elemento: {
      typeof: Object
    }
  });

onMounted (() => {

  console.log("EL ELEMENTO ES:")
  baseContable.value = props.elemento['BASE-CONTABLE'];
  baseSat.value = props.elemento[['BASE-SAT']];
  console.log(props.elemento)
  console.log("La base contable es: "  +  props.elemento['BASE-CONTABLE'])
  resultado.value = Math.abs(baseContable.value - baseSat.value);
}) 
</script>

