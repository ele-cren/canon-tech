import React from 'react'
import DashboardReview from '../../components/Dashboard/DashboardReview'

const DashboardReviews = () => {
  let reviews = []
  for (let i = 0; i < 3; i++) {
    reviews = [...reviews, <DashboardReview key={i} img="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Blade_Runner_%281982_poster%29.png/220px-Blade_Runner_%281982_poster%29.png" />]
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

export default DashboardReviews
