import { Link } from 'react-router-dom'
import React from 'react'
import Child from './shareDataChild'

export default class JqForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      temperature: '',
      scale: 'c',
    }
    this.onTemperatureChangeF = this.onTemperatureChangeF.bind(this)
    this.onTemperatureChangeC = this.onTemperatureChangeC.bind(this)
  }

  onTemperatureChangeF(val) {
    console.log(val)
    this.setState({
      scale: 'f',
      temperature: val,
    })
  }

  onTemperatureChangeC(val) {
    console.log(val)
    this.setState({
      scale: 'c',
      temperature: val,
    })
  }

  tryConvert(temperature, convertFn) {
    const input = parseFloat(temperature)
    if (Number.isNaN(input)) {
      return ''
    }
    const output = convertFn(input)
    const round = Math.round(output * 1000) / 1000
    return round.toString()
  }

  convertToF(temperature) {
    return (temperature * 9) / 5 + 32
  }

  convertToC(temperature) {
    return ((temperature - 32) * 5) / 9
  }

  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const cData = scale === 'c' ? temperature : this.tryConvert(temperature, this.convertToC)
    const fData = scale === 'f' ? temperature : this.tryConvert(temperature, this.convertToF)
    return (
      <>
        <Child scale={'c'} temperature={cData} onTemperatureChange={this.onTemperatureChangeC} />
        <Child scale={'f'} temperature={fData} onTemperatureChange={this.onTemperatureChangeF} />
        <Link to="/">跳转到Home</Link>
      </>
    )
  }
}
