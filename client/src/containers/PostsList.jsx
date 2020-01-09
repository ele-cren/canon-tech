import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import PostsListFilters from '../components/PostsList/PostsListFilters'
import PostsListDisplay from '../components/PostsList/PostsListDisplay'


const PostsList = () => {
  return (
<div className="PostsList__container">
  <div className="PostsList__main-container">
    <div className="PostsList__searchbar-container">
          <input className="PostsList__searchbar" type="text" />
          <FontAwesomeIcon icon={faSearch} />
     </div>

     <div className="PostsList__data-container">
          <PostsListFilters />
          <PostsListDisplay />
        </div>
      </div>
    </div>
  )
}

export default PostsList
