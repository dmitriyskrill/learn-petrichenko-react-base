import React from "react"
import "./post-list-item.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faHeartbeat, faStar } from "@fortawesome/free-solid-svg-icons"

const PostListItem = () => {
  return (
    <li className="app-list-item d-flex justify-content-between">
      <span className="app-list-item-label">Hello World</span>
      <div className="d-flex justify-content align-items-center">
        <button className="btn-star btn-sm" type="button">
          <FontAwesomeIcon icon={faStar} />
        </button>
        <button className="btn-trash btn-sm" type="button">
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <FontAwesomeIcon icon={faHeartbeat} />
      </div>
    </li>
  )
}

export default PostListItem
