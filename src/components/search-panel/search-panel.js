import React, { Component } from "react"

export default class SearchPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: "",
    }
  }
  onChangeSearchInput = (event) => {
    const searchInput = event.target.value
    this.setState({ searchInput })
    this.props.onChangeSearchInput(searchInput)
  }
  render() {
    return (
      <input
        className="form-control search-input"
        type="text"
        placeholder="Поиск по записям"
        onChange={this.onChangeSearchInput}
      />
    )
  }
}
