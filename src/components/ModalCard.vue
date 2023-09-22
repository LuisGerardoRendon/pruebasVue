<template>
  <div v-if="mostrarModal" class="modal">
    <div class="modal-contenido">
      <!-- Contenido del modal aquí -->
      <button @click="cerrarModal">Cerrar</button>
    </div>
  </div>
</template>

<script setup>

    const mostrarModal =  ref(false);


    const abrirModal = () => {
      this.mostrarModal = true;
    }

    cerrarModal = () => {
      this.mostrarModal = false;
    }

</script>
