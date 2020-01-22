import React from 'react'
import { Link } from 'react-router-dom'

const DashboardReview = (props) => {
  return (
    <>
      <div className="DashboardReview__container">
        <img src={props.img} alt="Document Poster" className="DashboardReview__img"/>
        <div className="DashboardReview__review">
          <div className="DashboardReview__title">{props.title}</div>
          {props.review}
          <Link to={'/post/' + props.id} className="DashboardReview__overflow-handler">Lire</Link>
        </div>
      </div>
    </>
  )
}

export default DashboardReview
