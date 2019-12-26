import React from 'react'
import PostHeading from '../components/Post/PostHeading'

const Post = () => {
  return (
    <div className="Post__container">
      <PostHeading
        img="http://fr.web.img4.acsta.net/c_215_290/medias/nmedia/18/68/46/16/19028526.jpg"
        title="Tron"
        year="1982"
        author="Steven Lisberger" />
    </div>
  )
}

export default Post