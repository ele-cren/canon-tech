import React, { useReducer, useState } from 'react'
import { connect } from 'react-redux'
import { updateInfos } from '../../actions/userActions/updateActions'

const DashboardPrivateInfos = (props) => {
  const [infos, setInfos] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: props.user.user.email,
      password: '',
      confirm: ''
    }
  )
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors({})
    if (infos.password !== infos.confirm) {
      setErrors({ password: 'Les mots de passe ne correspondent pas' })
    } else {
      props.updateUser({ email: infos.email, password: infos.password })
      setInfos({ password: '', confirm: '' })
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginTop: 40 }} className="DashboardFormInfos__container">
        <div className="DashboardFormInfos__input-bloc">
          <label htmlFor="password">Nouveau mot de passe</label>
          <input
            value={infos.password} onChange={(e) => setInfos({ [e.target.name]: e.target.value })}
            type="password" name="password" />
        </div>
        <div className="DashboardFormInfos__input-bloc">
          <label htmlFor="confirm">Confirmation</label>
          <input
            value={infos.confirm} onChange={(e) => setInfos({ [e.target.name]: e.target.value })}
            type="password" name="confirm" />
          <div className="DashboardFormInfos__error">{errors.password}</div>
        </div>
        <div className="DashboardFormInfos__input-bloc">
          <label htmlFor="email">Email</label>
          <input
            value={infos.email} onChange={(e) => setInfos({ [e.target.name]: e.target.value })}
            type="email" name="email" />
        </div>
      </div>
      <div style={{ marginBottom: 40 }} className="DashboardFormInfos__btn-container">
        <input type="submit" value="Mettre à jour" />
      </div>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mpaDispatchToProps = {
  updateUser: updateInfos
}

export default connect(mapStateToProps, mpaDispatchToProps)(DashboardPrivateInfos)
