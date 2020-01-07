import React, { useState } from 'react'
import UserPicture from '../../assets/pictures/women 5.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import PostComment from './PostComment'
import PostAddArea from './PostAddArea'

const PostReview = (props) => {
  const [isOpen, setOpen] = useState(false);
  const { review } = props
  const comments = review.comments.map((x, i) => {
    return <PostComment key={i} comment={x} />
  })
  return (
    <div className="PostReview__container">
      <div className="PostReview__userinfos-container">
        <img src={UserPicture} alt="User avatar" />
        <div className="PostReview__username">{review.username}</div>
      </div>
      <div className="PostReview__review">
        {review.review}
      </div>
      <div className="PostReview__rates-container">
        <div className="PostReview__review-rate">
          <FontAwesomeIcon icon={faStar} />
          {review.rate} / 10
        </div>
        <div className="PostReview__review-votes">
          <FontAwesomeIcon icon={faThumbsUp} /> <span>{review.upvotes}</span>
          <FontAwesomeIcon icon={faThumbsDown} /> <span>{review.downvotes}</span>
        </div>
      </div>
      <div className="PostReview__comments-container">
        <div onClick={() => setOpen(!isOpen)} className="PostReview__comments-title">Afficher les commentaires <FontAwesomeIcon icon={faChevronDown} /></div>
        {isOpen ? (
          <div className="PostReview__collapse-content">
            <PostAddArea btn="Commenter" />
            {comments}
          </div>
        ) : ''}
      </div>
    </div>
  )
}

export default PostReview
