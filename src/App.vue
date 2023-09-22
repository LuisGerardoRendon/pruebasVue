<script setup>

import { computed, onMounted, ref, watch } from "vue";

import Navbar from "./components/Navbar.vue";
import PublicisCard from "./components/PublicisCard.vue";
import 'kuantik-fe-components/library/style.css'
import {getData} from "./components/Respuesta.js"
import {Modal} from "kuantik-fe-components"


  const data = ref()
  const mostrarModal= ref(false)

  const elementos = computed(() =>{
    if(!data.value) return []
    console.log(data.value)
    return Object.entries(data.value["GRUPOS-BASE"]).map(  ([key, value]) =>{
        return {
          titulo: key,
          ...value
        }
    })
  }) 

  


  watch(elementos, () =>{
    console.log(elementos);
  })

  const abrirModal = () =>{
    mostrarModal.value = true;
    
  }
  const cerrarModal = () => {
    mostrarModal.value = false;
  }


  onMounted(async () => {
    //logica para traer toda la informacipon y cargarla en pantalla

    data.value = await getData();

  });

</script>

<template>
  <Navbar></Navbar>
  <button @click="abrirModal">Abrir Modal</button>

  <Modal 
    :modelValue="mostrarModal" 
    title="HOLAAAA"
    size="lg"
    title-class="h1"
    @update:model-value="cerrarModal"
    >
    

   
    <template #default>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
        </template>
  </Modal>

  <div class="grid grid-cols-4 gap-4 m-9">
    <PublicisCard v-for="(elemento) of elementos" 
    :key="elemento.key"
    :elemento="elemento"
    @abrirModal="abrirModal"
    >
    </PublicisCard>
  </div>



</template>
