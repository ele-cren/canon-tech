import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'

const OAuthForm = (props) => {
  return (
    <div className="OAuthForm__btn-container">
      <button className="OAuthForm__google-btn OAuthForm__btn font-roboto">
        <FontAwesomeIcon className="OAuthForm__google-ico" icon={faGoogle} />
      {props.isRegister ? 'Inscription' : 'Connexion'} avec <span className="OAuthForm__google">Google</span>
      </button>
      <button className="OAuthForm__facebook-btn OAuthForm__btn font-roboto">
        <FontAwesomeIcon className="OAuthForm__facebook-ico" icon={faFacebookF} />
        {props.isRegister ? 'Inscription' : 'Connexion'} avec <span className="OAuthForm__facebook">Facebook</span>
      </button>
    </div>
  )
}

export default OAuthForm
