import React, { Component } from "react"
import AppHeader from "../app-header"
import SearchPanel from "../search-panel"
import PostStatusFilter from "../post-status-filter"
import PostList from "../post-list"
import PostAddForm from "../post-add-form"
// import "./app.css"
// import style from './app.module.css'
import styled from "styled-components"

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [
        { label: "Going to React", important: true, id: "1", like: false },
        { label: "That is so good", important: false, id: "23", like: false },
        { label: "I need a break...", important: false, id: "32", like: false },
      ],
      searchInput: "",
      filter: "",
    }
  }

  onChangeSearchInput = (searchInput) => {
    this.setState({ searchInput })
  }

  searchPosts = (posts, searchInput) => {
    if (searchInput.length === 0) return posts
    return posts.filter((item) => item.label.indexOf(searchInput) >= 0)
  }

  filterPosts(posts, filter = "all") {
    switch (filter) {
      case "like":
        return posts.filter((post) => post.like)

      default:
        return posts
    }
  }

  filterSelect = (filter) => {
    console.log("app filter select", filter)
    this.setState({ filter })
  }

  postDelete(id) {
    this.setState(({ posts }) => ({
      posts: [...posts.filter((post) => post.id !== id)],
    }))
  }

  postAdd(newPost) {
    this.setState(({ posts }) => ({ posts: [...posts, newPost] }))
  }

  postToggleImportant(id) {
    this.setState(({ posts }) => {
      const index = posts.findIndex((post) => post.id === id)
      if (index === -1) return
      const newItem = { ...posts[index], important: !posts[index].important }
      const newArray = [
        ...posts.slice(0, index),
        newItem,
        ...posts.slice(index + 1),
      ]
      return {
        posts: newArray,
      }
    })
  }

  postToggleLike(id) {
    this.setState(({ posts }) => {
      const index = posts.findIndex((post) => post.id === id)
      if (index === -1) return
      const newItem = { ...posts[index], like: !posts[index].like }
      const newArray = [
        ...posts.slice(0, index),
        newItem,
        ...posts.slice(index + 1),
      ]
      return {
        posts: newArray,
      }
    })
  }

  render() {
    const { posts, searchInput, filter } = this.state
    const likedPostsCount = posts.filter((item) => item.like).length
    const allPostsCount = posts.length

    const filteredPosts = this.filterPosts(
      this.searchPosts(posts, searchInput),
      filter,
    )
    return (
      <AppBlock>
        <AppHeader
          likedPostsCount={likedPostsCount}
          allPostsCount={allPostsCount}
        />
        <div className="search-panel d-flex">
          <SearchPanel onChangeSearchInput={this.onChangeSearchInput} />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.filterSelect}
          />
        </div>
        <PostList
          posts={filteredPosts}
          onDelete={(id) => this.postDelete(id)}
          onToggleImportant={(id) => this.postToggleImportant(id)}
          onToggleLike={(id) => this.postToggleLike(id)}
        />
        <PostAddForm onAdd={(newPost) => this.postAdd(newPost)} />
      </AppBlock>
    )
  }
}
