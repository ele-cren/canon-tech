import React from 'react'
import UserPicture from '../../assets/pictures/women 5.png'

const PostComment = (props) => {
  const { comment } = props
  return (
    <div className="PostComment__container">
      <div className="PostComment__userinfos-container">
        <img src={UserPicture} />
        <span>{comment.username}</span>
      </div>
      <div className="PostComment__comment">
        {comment.comment}
      </div>
    </div>
  )
}

export default PostComment
