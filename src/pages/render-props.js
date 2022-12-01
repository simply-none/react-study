// 使用render-props构建一个随鼠标移动获取物体位置的组件
import React from 'react'
import PropTypes from 'prop-types'

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse
    console.log(this.props.mouse, this.props)
    return (
      <img
        src="https://img0.baidu.com/it/u=3269422069,1239134731&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1669741200&t=12e460e1449403b649088b7d5fc86e32"
        style={{ position: 'absolute', left: mouse.x, top: mouse.y, height: '100px', width: '100px' }}
        alt="cat"
      />
    )
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.state = {
      x: 0,
      y: 0,
    }
  }

  handleMouseMove(e) {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    })
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {/* 根据传过来的render props动态渲染内容 */}
        {this.props.render(this.state)}
      </div>
    )
  }
}

// 由于render可以是任意名字，当将render命名为children时，必须声明children是一个函数类型：
Mouse.propTypes = {
  render: PropTypes.func.isRequired
}

// export default
class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>移动鼠标</h1>
        <Mouse render={(mouse) => <Cat mouse={mouse} />} />
      </div>
    )
  }
}

export { MouseTracker }

// 导出函数也可以换成一个HOC组件
function withMouse(Component) {
  return class extends React.Component {
    render () {
      // 这里的props：即使用导入当前文件的组件传入的，在route文件内
      return <Mouse render={(mouse) => <Component {...this.props} mouse={mouse} />} />
    }
  }
}

export default withMouse(Cat)
