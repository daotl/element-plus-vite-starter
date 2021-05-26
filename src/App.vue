<template>
  <img alt="Vue logo" class="element-plus-logo" src="./assets/logo.png" />
  <HelloTemplate msg="Hello Vue 3.0 + Element Plus + Vite + Vue Template" />
  <HelloJsx msg="Hello Vue 3.0 + Element Plus + Vite + JSX" />
</template>

<script setup>
/* eslint-disable @typescript-eslint/no-unused-vars */
import HelloTemplate from '@/components/HelloTemplate.vue'
import HelloJsx from '@/components/HelloJsx.vue'
/* eslint-enable @typescript-eslint/no-unused-vars */
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  text-align: center;
}

.element-plus-logo {
  width: 50%;
}
</style>
