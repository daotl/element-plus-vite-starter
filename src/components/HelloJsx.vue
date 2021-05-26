<script lang="tsx">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'HelloJsx',

  props: {
    msg: {
      type: String,
      default: 'Hello, JSX!',
    },
  },
  setup(props) {
    const count = ref(0)
    const addCount = () => count.value++

    return { count, addCount }
  },

  render() {
    return (
      <>
        <h1>{this.msg}</h1>

        <el-button
          icon="el-icon-success"
          type="primary"
          onClick={this.addCount}
        >
          count is: {this.count}
        </el-button>

        <p>
          Edit
          <code>components/HelloJsx.vue</code> to test hot module replacement.
        </p>
      </>
    )
  },
})
</script>

<style scoped lang="scss">
h1 {
  color: red;
}
</style>
