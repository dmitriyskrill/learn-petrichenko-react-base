import React, { Component } from "react"
import "./post-add-form.css"

export default class PostAddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText: "",
      filter: "all",
    }
  }

  onInputChange = (event) => this.setState({ inputText: event.target.value })

  onSubmit = (event) => {
    event.preventDefault()
    this.props.onAdd({
      label: this.state.inputText,
      important: false,
      like: false,
      id: +new Date(),
    })
    this.setState({ inputText: "" })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="bottom-panel d-flex">
        <input
          type="text"
          placeholder="О чем вы думаете сейчас"
          className="form-control new-post-label"
          onChange={this.onInputChange}
          value={this.state.inputText}
        />
        <button type="submit" className="btn btn-outline-secondary">
          Добавить
        </button>
      </form>
    )
  }
}
