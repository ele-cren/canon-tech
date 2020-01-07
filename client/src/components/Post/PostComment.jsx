import React from 'react'
import UserPicture from '../../assets/pictures/women 5.png'
import PostAddArea from './PostAddArea'

const PostComment = (props) => {
  const { comment } = props
  return (
    <div className="PostComment__container">
      <div className="PostComment__userinfos-container">
        <img src={UserPicture} alt="User avatar" />
        <span>{comment.username}</span>
      </div>
      <div className="PostComment__comment">
        {comment.comment}
      </div>
      <PostAddArea btn="Répondre" />
    </div>
  )
}

export default PostComment
