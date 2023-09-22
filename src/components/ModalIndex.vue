<template>
    <div :style="{ zIndex: zIndex }" class="modal" v-if="mostrarModal">
      <div class="modal-contenido">
        <!-- Contenido del modal aquí -->
        <button @click="cerrarModal">Cerrar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        mostrarModal: false,
        zIndex: 1000 // Valor inicial de zIndex (ajústalo según tus necesidades)
      };
    },
    methods: {
      abrirModal() {
        this.mostrarModal = true;
        this.zIndex += 1; // Aumentar zIndex al abrir el modal
      },
      cerrarModal() {
        this.mostrarModal = false;
      }
    }
  };
  </script>
  
  <style>
  /* Estilos CSS para el modal */
  </style>
  