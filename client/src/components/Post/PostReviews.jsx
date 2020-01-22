import React from 'react'
import PostReview from './PostReview'
import PostAddArea from './PostAddArea'
import { connect } from 'react-redux'

const PostReviews = (props) => {
  const onPostReview = (review) => {
    props.addReview(review)
  }
  
  const reviews = props.reviews.map((x, i) => {
    return <PostReview key={i} review={x} />
  })
  return (
    <div className="PostReviews__container">
      <div className="PostReviews__title">Avis des membres</div>
      { props.user.user._id && <PostAddArea callback={onPostReview} btn="Poster" /> }
      <div className="PostReviews__reviews-container">
        {reviews}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {})(PostReviews)
