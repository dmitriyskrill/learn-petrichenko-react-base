import React, { Component } from "react"
import "./post-list-item.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faHeartbeat, faStar } from "@fortawesome/free-solid-svg-icons"

export default class PostListItem extends Component {
  render() {
    const {
      label,
      important,
      like,
      onDelete,
      onToggleImportant,
      onToggleLike,
    } = this.props

    let classNames = "app-list-item d-flex justify-content-between"
    if (important) classNames += " important"
    if (like) classNames += " like"
    return (
      <div className={classNames}>
        <span onClick={onToggleLike} className="app-list-item-label">
          {label}
        </span>
        <div className="d-flex justify-content align-items-center">
          <button
            className="btn-star btn-sm"
            type="button"
            onClick={onToggleImportant}
          >
            <FontAwesomeIcon icon={faStar} />
          </button>
          <button className="btn-trash btn-sm" type="button" onClick={onDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button className="btn-heart btn-sm" type="button">
            <FontAwesomeIcon icon={faHeartbeat} />
          </button>
        </div>
      </div>
    )
  }
}
