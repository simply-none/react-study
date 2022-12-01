import React from "react";

export default class UncontrolledComponents extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.fileInput = React.createRef()
  }

  handleSubmit (evt) {
    evt.preventDefault()
    console.log(evt, this.fileInput)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>上传文件：
          <input type='file' ref={this.fileInput}/>
        </label>
        <br />
        <button type="submit">提交</button>
      </form>
    )
  }
}