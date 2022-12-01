import { Link } from 'react-router-dom'
import React  from 'react'
class JqForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      desc: '',
      hobby: '',
      sex: false,
      age: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(data = 'name', e) {
    console.log(e, data)
    // 阻止表单默认行为
    e.preventDefault()
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({
      [data]: value
    })
  }

  handleSubmit (e) {
    console.log(e)
    e.preventDefault()
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            姓名：
            <input name='name' value={this.state.name} onChange={(e) => this.handleChange(undefined, e)} />
          </label>
          <br />
          <label>
            在校生：
            <input name='sex' checked={this.state.sex} type="checkbox" onChange={(e) => this.handleChange('sex', e)} />
          </label>
          <br />
          <label>
            年龄：
            <input name='age' type='number' value={this.state.age} onChange={(e) => this.handleChange('age', e)}/>
          </label>
          {/* 事件对象e会隐式传递 */}
          <label>
            爱好：
            <select name='hobby' value={this.state.hobby} onChange={this.handleChange.bind(this, 'hobby')}>
              {['唱', '跳', 'rap'].map((hobby) => {
                return (
                  <option key={hobby} value={hobby}>
                    {hobby}
                  </option>
                )
              })}
            </select>
          </label>
          <br/>
          <label>
            介绍：
            <textarea name='desc' value={this.state.desc} onChange={(e) => this.handleChange('desc', e)} />
          </label>
          <br/>
          <label>
            <input type="submit" value="提交" />
          </label>
        </form>
        <Link to="/">跳转到Home</Link>
      </>
    )
  }
}

export default JqForm