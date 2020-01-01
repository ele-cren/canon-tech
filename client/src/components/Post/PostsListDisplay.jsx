import React from 'react'
import Item from '../Item'

const PostsListDisplay = () => {

  let items = []
  for (let i = 0; i < 20; i++) {
    items = [...items, <Item key={i} img="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Blade_Runner_%281982_poster%29.png/220px-Blade_Runner_%281982_poster%29.png"
      title="Blade Runner" author="Ridley Scott" />]
  }
  return (
    <div className="PostsList__posts-infos-container">
      <div className="PostsList__infos-container">
        <p> 20 oeuvres</p>
        <p> afficher 25 - 50 - 100</p>
        <p>menu filtre</p>
      </div>

      <div className="PostsList__posts-container">
        {items}

      </div>
    </div>

  )
}

export default PostsListDisplay