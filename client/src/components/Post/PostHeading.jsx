import React, { useState, useEffect } from 'react'
import Rating from 'react-rating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'
import { connect } from 'react-redux'
import { updateInfos } from '../../actions/userActions/updateActions'

const PostHeading = (props) => {
  const [myRate, setMyRate] = useState(0)

  useEffect(() => {
    if (props.user.user.ratings) {
      props.user.user.ratings.forEach(x => {
        if (props.postId === x.docId) {
          setMyRate(x.rate)
        }
      })
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateRate = (value) => {
    setMyRate(value)
    let exists = false
    let newRatings = []
    if (props.user.user.ratings) {
      newRatings = props.user.user.ratings.map(x => {
        if (x.docId === props.postId) {
          x.rate = value
          exists = true
        }
        return x
      })
    }
    newRatings = !props.user.user.ratings || !exists ? [{ docId: props.postId, rate: value }] : newRatings
    props.updateUserInfos({ ratings: newRatings })
  }

  return (
    <div className="PostHeading__container">
      <img src={props.img} alt="Document Poster" />
      <div className="PostHeading__infos-container">
        <h1 className="font-roboto">{props.title} ({props.year})</h1>
        <h2 className="font-roboto">{props.author}</h2>
        <div className="PostHeading__rating-container">
          <div className="PostHeading__stars">
            <Rating
              stop={10}
              initialRating={myRate}
              onChange={updateRate}
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

const mapStateToProps = state => {
  return {
    user: state.user
  }
}


const mapDispatchToProps = {
  updateUserInfos: updateInfos
}

export default connect(mapStateToProps, mapDispatchToProps)(PostHeading)
