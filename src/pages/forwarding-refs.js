import React from 'react'

class FancyButton extends React.Component {
  constructor(props) {
    super(props)
    this.focus = this.focus.bind(this)
    this.inputRef = React.createRef()
    this.state = {
      ls: Date.now()
    }
    this.handleClick = (e) => {
      console.log(e)
    }
    console.log('初始化')
  }

  focus(e) {
    console.log(this.props, e, this.inputRef)
    this.inputRef.current.focus()
  }

  render() {
    return (
      <div>
        <input ref={this.inputRef} value={this.state.ls} onChange={this.handleClick}/>
        <button className="funcybutton" onClick={this.focus}>
          点击
        </button>
      </div>
    )
  }
}
FancyButton.displayName = '测试数据'

function logProps(Component) {
  class LogProps extends React.Component {
    constructor(props) {
      super(props)
      console.log(this.props)
    }

    componentDidUpdate(prevProps) {
      console.log(prevProps, this.props)
    }

    render () {
      // 4. 解析传过来的props，将ref值赋值给Component组件
      // 这时ref.current指向的就是这个组件实例，可以调用实例属性和方法
      const { forwardRef, ...rest } = this.props
      // 这里的组件必须是类组件或者dom元素，否则不能获取到refs
      return <Component ref={forwardRef} {...rest} />
    }
  }

  // 2. forwardRef获取传递给他的ref，并将其转发到渲染的dom中
  function forwardRefFn(props, ref) {
    return (
      <>
        <LogProps forwardRef={ref} {...props} />
      </>
    )
  }

  // 开发者工具展示的名称
  const name = Component.displayName || Component.name
  forwardRefFn.displayName = 'logProps.' + name

  // 1. forwardRef获取传递给他的props和ref，并将其转发到渲染的dom中
  return React.forwardRef(forwardRefFn)
}

class Ex extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
    this.state = {
      int: ''
    }
    this.LogPropss = logProps(FancyButton)
  }

  getRef = (e) => {
    console.log(e, this.ref)
    this.setState({
      int: Date.now()
    })
    this.ref.current.focus()
  }

  render () {
    // 0.1.引入高级组件，若在此处引用，则每次都会重新创建一个LogProps组件，若想此次引用的实例相同，不应该在render内部引用
    // const LogPropss = logProps(FancyButton)

    // 0.1.正确的引用方式，这样永远都是这个实例对象
    const LogPropss = this.LogPropss
    return (
      <>
        {/* 5. 通过ref获取组件实例，调用该组件实例的方法 */}
        <button onClick={this.getRef}>获取ref</button>
        {/* 0.2. 这里的属性name和ref都会被React.forwardRef接收，同时这里可以直接使用ref，会被其第二个参数接收这个ref */}
        <LogPropss name="jade" val={this.state.int} ref={this.ref} />
      </>
    )
  }
}

export default Ex
