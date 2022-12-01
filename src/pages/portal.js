// 传送门功能
import React from 'react'
import ReactDOM from 'react-dom'
// 导入css
import './portal.css'

function ModalWrapper() {
  return <div className="modal-wrapper"></div>
}

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.modalWrapper = document.querySelector('.modal-wrapper')
    this.el = document.createElement('div')
  }

  componentDidMount() {
    this.modalWrapper.appendChild(this.el)
  }

  componentWillUnmount() {
    this.modalWrapper.removeChild(this.el)
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}

export default class HasPortal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      count: 0,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    })
  }

  showPortal = (show) => {
    this.setState((state) => ({
      show: show,
    }))
  }

  render() {
    const modal = this.state.show ? (
      <Modal>
        <div className="modal-inner">
          这个是在modal内部
          <button onClick={() => this.showPortal(false)}>关闭portal</button>
        </div>
      </Modal>
    ) : null
    return (
      <>
        <div className="normal-content">
          这是正常的内容
          <button onClick={() => this.showPortal(true)}>打开portal</button>
          {/* 这里能够监听到portal点击事件，而不是在modal-wrapper组件上监听
          实际上，portal不管嵌入到哪个dom上，那个dom都不能监听portal的事件，只有代码上实际存放的portal的父组件上才能够监听到 */}
          <div onClick={this.handleClick}>
            <div>当前打开portal的次数：{this.state.count}</div>
            {modal}
          </div>
        </div>
        <ModalWrapper />
      </>
    )
  }
}
