import React from 'react'
export default class JqForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scaleNames: {
        f: '℉',
        c: '℃'
      }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    console.log(e)
    // 阻止表单默认行为
    e.preventDefault()
    this.props.onTemperatureChange(e.target.value)
  }

  render () {
    const { scale, temperature } = this.props
    return (
      <>
        <fieldset>
          <legend>输入温度{this.state.scaleNames[scale]}</legend>
          <input value={temperature} onChange={this.handleChange} />
        </fieldset>
      </>
    )
  }
}
