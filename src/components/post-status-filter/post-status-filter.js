import React, { Component } from "react"
import Button from "react-bootstrap/Button"

export default class PostStatusFilter extends Component {
  constructor(props) {
    super(props)
    this.btns = [
      { name: "all", label: "Все" },
      { name: "like", label: "Понравилось" },
    ]
  }

  render() {
    const { onFilterSelect } = this.props
    const btns = this.btns.map(({ name, label }) => {
      const active = this.props.filter === name
      const variant = active ? "info" : "outline-secondary"
      return (
        <Button
          key={name}
          variant={variant}
          onClick={() => onFilterSelect(name)}
        >
          {label}
        </Button>
      )
    })
    return <div className="btn-group">{btns}</div>
  }
}
