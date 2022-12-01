// 动态的context
import React from "react"
const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
}

// 创建一个Context对象，当React渲染了订阅了这个Context对象的组件，这个组件会从组件树中离自身最近的那个匹配的Provider读取当前的context的值
// 参数是默认值，仅在未匹配到Provider时才会生效，若value的值是undefined，默认值同样不生效
const ThemeContext = React.createContext(themes.dark)
// 打开react devtools时，展示的节点名称ThemeContext => MyThemeContext
ThemeContext.displayName = 'MyThemeContext'

class ThemedButton extends React.Component {
  // 对于启用了public class fields，可以使用类属性
  // 该属性，可以赋值为由React.createContext()创建的Context对象
  // 定义了该属性之后，可以在任意生命周期和render中使用this.context获取最近的Context的值
  static contextType = ThemeContext
  render() {
    let props = this.props
    let theme = this.context
    return (
      // 将父组件上所有的props都作为他自己的props
      <button {...props} style={{ backgroundColor: theme.background }} />
    )
  }
}

// 该属性，可以赋值为由React.createContext()创建的Context对象
// 定义了该属性之后，可以在任意生命周期和render中使用this.context获取最近的Context的值
// ThemedButton.contextType = ThemeContext

function Toolbar (props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      切换主题
    </ThemedButton>
  )
}

export default class ChangeTheme extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: themes.light
    }

    this.toggleTheme = () => {
      // 函数式设置state
      this.setState(state => ({
        theme: state.theme === themes.light ? themes.dark : themes.light
      }))
      console.log(this.state.theme)
    }
  }

  render () {
    return (
      <div>
        {/* 给themecontext设置值，下级组件只要定义了contextType为ThemeContext，就能通过this.context获取该值 */}
        {/* context的传值，放在state中更好，不然会存在一些异常 */}
        {/* 
          Provider接收一个value属性，传递给下级组件
          多个Provider可以嵌套使用，里面的会覆盖外面的
          当传递对象给value时，可能会导致一些问题，除非是将对象设置到state中，然后将state的该对象传给value
        */}
        <ThemeContext.Provider value={this.state.theme}>
          {/* 将方法作为props传递给toolbar组件 */}
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <section>
          <div style={{ backgroundColor: this.state.theme.background, height: '100px', margin: '10px 0' }} />
        </section>
      </div>
    )
  }
}