import React, { useState, useEffect } from 'react'
import Rating from 'react-rating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'
import { connect } from 'react-redux'

const PostHeading = (props) => {
  const [myRate, setMyRate] = useState(0)

  useEffect(() => {
    if (props.rates) {
      for (let i = 0; i < props.rates.length; i++) {
        if (props.rates[i].rater === props.user.user._id) {
          setMyRate(props.rates[i].rate)
          break;
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateRate = (value) => {
    if (props.user.user._id) {
      setMyRate(value)
      props.updateRate(value)
    }
  }

  let note = 0
  if (props.rates) {
    props.rates.forEach(x => {
      note += x.rate
    })
  }
  note = note > 0 ? note / props.rates.length : note
  note = note % 1 !== 0 ? note.toFixed(2) : note

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
            <FontAwesomeIcon icon={emptyStar} /> {note} / 10
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

export default connect(mapStateToProps, {})(PostHeading)
