import React from 'react'
import PostReview from './PostReview'
import PostAddArea from './PostAddArea'

const PostReviews = (props) => {
  const reviews = props.reviews.map((x, i) => {
    return <PostReview key={i} review={x} />
  })
  return (
    <div className="PostReviews__container">
      <div className="PostReviews__title">Avis des membres</div>
      <PostAddArea btn="Poster" />
      <div className="PostReviews__reviews-container">
        {reviews}
      </div>
    </div>
  )
}

export default PostReviews
