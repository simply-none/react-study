import { Link } from 'react-router-dom'
import React from 'react'

function FancyBorder (props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  )
}

function Dialog (props) {
  return (
    <>
      <FancyBorder color='blue'>
        <h1 className='Dialog-title'>
          {props.title}
        </h1>
        <p className='Dialog-message'>
          {props.message}
        </p>
        {props.children}
      </FancyBorder>
    </>
  )
}

export default class SignDialog extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
    this.state = {
      login: ''
    }
  }

  handleChange (e) {
    this.setState({
      login: e.target.value
    })
  }

  handleSignup () {
    alert('登录成功')
  }

  render () {
    return (
      <>
        <Dialog title="火星探索项目" message="开始">
          <input value={this.state.login} onChange={this.handleChange} />
          <button onClick={this.handleSignup}>登录</button>
        </Dialog>
        <Link to="/">跳转到Home</Link>
      </>
    )
  }
}
