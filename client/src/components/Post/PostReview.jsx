import React from 'react'
import UserPicture from '../../assets/pictures/women 5.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'

const PostReview = (props) => {
  const { review } = props
  return (
    <div className="PostReview__container">
      <div className="PostReview__userinfos-container">
        <img src={UserPicture} />
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
    </div>
  )
}

export default PostReview
