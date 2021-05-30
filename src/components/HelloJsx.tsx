import { defineComponent, ref, toRefs } from 'vue'
import { css } from '@linaria/core'

export default defineComponent({
  name: 'HelloJsx',
  props: {
    msg: {
      type: String,
      default: 'Hello, JSX!',
    },
  },

  setup(props) {
    const { msg } = toRefs(props)

    const count = ref(0)
    const addCount = () => count.value++

    return () => (
      <>
        <h1 class={h1}>{msg.value}</h1>

        <el-button icon="el-icon-success" type="primary" onClick={addCount}>
          count is: {count.value}
        </el-button>

        <p>
          Edit
          <code>components/HelloJsx.vue</code> to test hot module replacement.
        </p>
      </>
    )
  },
})

const h1 = css`
  color: red;
`
