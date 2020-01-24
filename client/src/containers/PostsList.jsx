import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import PostsListFilters from '../components/PostsList/PostsListFilters'
import PostsListDisplay from '../components/PostsList/PostsListDisplay'
import PostsListDisplayBtn from '../components/PostsList/PostsListDisplatBtn'
import axios from 'axios'
import { API_URL } from '../utils/utils'

const PostsList = () => {
  const [documents, setDocuments] = useState([])
  const [width, setWidth] = useState(window.innerWidth)
  const [isMobile, setMobile] = useState(false)
  const [isMenuOpened, setMenu] = useState(false)

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth)
    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [])

  useEffect(() => {
    if (width <= 650) {
      if (!isMobile) {
        setMobile(true)
      }
    } else {
      if (isMobile) {
        setMobile(false)
      }
      if (isMenuOpened) {
        setMenu(false)
      }
    }
  }, [isMobile, isMenuOpened, width])

  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    const getDocuments = async () => {
      const response = await axios.get(API_URL + '/posts')
      setDocuments(response.data.documents)
    }
    getDocuments()
  }, [])
  
  return (
    <div className="PostsList__container">
      <div className="PostsList__main-container">
        <div className="PostsList__searchbar-container">
          <input className="PostsList__searchbar" type="text" />
          <FontAwesomeIcon icon={faSearch} />
        </div>

        <div className="PostsList__data-container">
          {isMobile ? <PostsListDisplayBtn isMenuOpened={isMenuOpened} setMenu={setMenu} /> : ''}
          {(isMenuOpened && isMobile) || !isMobile ? <PostsListFilters /> : ''}
          <PostsListDisplay documents={documents} />
        </div>
      </div>
    </div>
  )
}

export default PostsList
