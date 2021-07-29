<template lang="pug">
img.element-plus-logo(alt="Vue logo" src="./assets/logo.png")
el-tabs(v-model="activeName" @tab-click="handleClick")
  el-tab-pane(label="Template" name="template")
    HelloTemplate(msg="Hello Vue 3.0 + Vite + Element Plus + Vue Template")
  el-tab-pane(label="JSX" name="jsx")
    HelloJsx(msg="Hello Vue 3.0 + Vite + Element Plus + JSX")
</template>

<script setup lang="ts">
import { ref } from 'vue'
/* eslint-disable @typescript-eslint/no-unused-vars */
import HelloTemplate from '@/components/HelloTemplate.vue'
import HelloJsx from '@/components/HelloJsx'
/* eslint-enable @typescript-eslint/no-unused-vars */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const activeName = ref('template')

// tab: Tab, from 'element-plus/es/el-tabs/src/tabs.vue'
// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unused-vars
const handleClick = (tab: any, tabName: string, ev: Event) => {
  console.log(tab, tabName, ev)
}
</script>

<style lang="scss">
#app {
  margin-top: 60px;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.element-plus-logo {
  width: 50%;
}
</style>
