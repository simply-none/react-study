// 多个动态的context
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

const ThemeContext = React.createContext(themes.dark)
const UserContext = React.createContext({
  name: 'Guest'
})

function ThemedButton() {
  return (
    // 通过ThemeContext.Consumer获取context
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <div style={{ color: theme.foreground, backgroundColor: theme.background }}>
          <button onClick={toggleTheme}>
            切换主题
          </button>
          <hr />
          <UserContext.Consumer>
            {({ user, toggleUser }) => (
              <button onClick={toggleUser}>
                {user === 'Guest' ? '登录' : '你好' + user + '，欢迎使用'}
              </button>
            )}
          </UserContext.Consumer>
        </div>
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
      user: 'Guest',
      toggleUser: this.toggleUser,
      // 这里若想使用this.toggleTheme，必须先在它上面定义this.toggleTheme
      toggleTheme: this.toggleTheme,
    }
  }

  toggleUser = () => {
    this.setState({
      user: this.state.user === 'Jade Qiu' ? 'Guest' : 'Jade Qiu',
    })
  }

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
          {/* 将方法作为props传递给toolbar组件 */}
          <UserContext.Provider value={this.state}>
            <Toolbar />
          </UserContext.Provider>
        </ThemeContext.Provider>
        <section>
          <div style={{ backgroundColor: this.state.theme.background, height: '100px', margin: '10px 0' }} />
        </section>
      </div>
    )
  }
}
