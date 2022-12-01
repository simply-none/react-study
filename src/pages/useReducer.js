import { useReducer } from "react"
const initialState = { count: 1 }

// useReducer是userState的替代方案
// 适用场景：state逻辑较复杂，且包含多个子元素时，或者下一个state依赖于之前的state
function reducer (state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

function Counter () {
  // 可以向子组件传递dispatch，比如结合context一起
  // 因为dispatch函数是稳定的，不会随着渲染变化而变化
  // useReducer的使用方式：
  // 1. const [state, dispatch] = useReducer(reducer: reducer函数, initialState: 初始的state对象/值)
  // 2. 惰性初始化： const [state, dispatch] = useReducer(reducer, initialArg: 初始state的函数的参数, init: 初始state的函数)
  const [count, dispatch] = useReducer(reducer, initialState)
  console.log(count, dispatch)

  return (
    <div>
      当前数量：{count.count}
      <hr />
      <button onClick={() => dispatch({ type: 'decrement' })} style={{ 'margin-right': '20px' }}>
        -
      </button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  )
}

export default Counter
