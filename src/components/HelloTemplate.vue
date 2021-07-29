<template lang="pug">
h1 {{ msg }}

el-button(icon="el-icon-success" type="primary" @click="count++")
  | count is: {{ count }}

p.
  Edit #[code components/HelloTemplate.vue] to test hot module replacement.
</template>

<script setup="props" lang="ts">
import { defineProps, ref } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { msg = 'Hello, Template!' } = defineProps<{
  msg?: string
}>()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const count = ref(0)
</script>

<style scoped lang="scss">
h1 {
  color: #42b983;
}
</style>
