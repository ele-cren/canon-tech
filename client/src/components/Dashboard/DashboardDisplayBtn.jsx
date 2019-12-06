import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

const DashboardDisplayBtn = (props) => {
  return (
    <button onClick={() => props.setMenu(!props.isMenuOpened)} className="DashboardDisplayBtn__btn">
      <FontAwesomeIcon icon={ props.isMenuOpened ? faArrowAltCircleLeft : faArrowAltCircleRight} />
    </button>
  )
}

export default DashboardDisplayBtn
