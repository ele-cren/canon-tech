import React, { useState, useEffect } from 'react'
import DashboardReview from '../../components/Dashboard/DashboardReview'
import {connect} from 'react-redux'
import axios from 'axios'
import { API_URL } from '../../utils/utils.js'

const DashboardReviews = (props) => {
  const [postReviews, setPostReviews] = useState([])

  useEffect(() => {
    const getReviews = async () => {
      const response = await axios.get(API_URL + '/post/reviews/' + props.user.user._id)
      if (response.data.documents) {
        setPostReviews(response.data.documents)
      }
    }

    getReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let reviews = []
  if (postReviews) {
    reviews = postReviews.map((x, i) => {
      return <DashboardReview key={i} id={x._id} review={x.reviews[0].review} img={x.posterUrl} />
    })
  }
  return (
    <div className="DashboardReviews__container">
      <h2 className="font-roboto">Mes avis</h2>
      <div className="DashboardReviews__reviews-container">
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

export default connect(mapStateToProps, {})(DashboardReviews)
