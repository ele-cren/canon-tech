import React from 'react'

const DashboardReview = (props) => {
  return (
    <>
      <div className="DashboardReview__container">
        <img src={props.img} alt="Image" className="DashboardReview__img"/>
        <div className="DashboardReview__review">
          <div className="DashboardReview__title">{props.title}</div>
          {props.review}
          <div className="DashboardReview__overflow-handler">Lire</div>
        </div>
      </div>
    </>
  )
}

export default DashboardReview
