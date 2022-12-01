// 动态的context
import React from 'react'
const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
}

// 在context定义一个函数，用于更新context上的theme
const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {}
})

function ThemedButton() {
  return (
    // 通过ThemeContext.Consumer获取context
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <button onClick={toggleTheme} style={{ backgroundColor: theme.background }}>
          切换主题
        </button>
      )}
    </ThemeContext.Consumer>
  )
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

export default class ChangeTheme extends React.Component {
  constructor(props) {
    super(props)
    

    this.toggleTheme = () => {
      // 函数式设置state
      this.setState((state) => ({
        theme: state.theme === themes.light ? themes.dark : themes.light,
      }))
      console.log(this.state.theme)
    }

    this.state = {
      theme: themes.light,
      // 这里若想使用this.toggleTheme，必须先在它上面定义this.toggleTheme
      toggleTheme: this.toggleTheme,
    }
  }

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
          {/* 将方法作为props传递给toolbar组件 */}
          <Toolbar />
        </ThemeContext.Provider>
        <section>
          <div style={{ backgroundColor: this.state.theme.background, height: '100px', margin: '10px 0' }} />
        </section>
      </div>
    )
  }
}
