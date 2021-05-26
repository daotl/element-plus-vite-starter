<template>
  <h1>{{ msg }}</h1>

  <el-button icon="el-icon-success" type="primary" @click="count++"
    >count is: {{ count }}</el-button
  >

  <p>
    Edit
    <code>components/HelloTemplate.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloTemplate',
  props: {
    msg: {
      type: String,
      default: 'Hello, Template!',
    },
  },
  data() {
    return {
      count: 0,
    }
  },
})
</script>

<style scoped lang="scss">
h1 {
  color: #42b983;
}
</style>
