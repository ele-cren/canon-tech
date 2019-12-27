import React from 'react'
import Rating from 'react-rating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'

const PostHeading = (props) => {
  return (
    <div className="PostHeading__container">
      <img src={props.img} />
      <div className="PostHeading__infos-container">
        <h1 className="font-roboto">{props.title} ({props.year})</h1>
        <h2 className="font-roboto">{props.author}</h2>
        <div className="PostHeading__rating-container">
          <div className="PostHeading__stars">
            <Rating
              stop={10}
              emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
              fullSymbol={<FontAwesomeIcon icon={faStar} />} />
          </div>
          <div className="PostHeading__rating-separator"></div>
          <div className="PostHeading__rating-info">
            <FontAwesomeIcon icon={emptyStar} /> {props.note} / 10
          </div>
        </div>
        <button className="PostHeading__addlist-btn">Ajouter à une liste</button>
      </div>
    </div>
  )
}

export default PostHeading
