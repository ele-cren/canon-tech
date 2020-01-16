import React, { useReducer } from 'react'
import { connect } from 'react-redux'
import { updateInfos } from '../../actions/userActions/updateActions'
const DashboardPublicInfos = (props) => {
  const [userInputs, setUserInputs] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstName: props.user.user.firstName,
      lastName: props.user.user.lastName,
      username: props.user.user.username
    }
  )

  const updateInfos = (e) => {
    e.preventDefault()
    props.updatePublicInfos(userInputs)
  }

  return (
    <form onSubmit={updateInfos}>
      <div className="DashboardFormInfos__container">
        <div className="DashboardFormInfos__input-bloc">
          <label htmlFor="firstName">Prénom</label>
          <input
            onChange={(e) => setUserInputs({ [e.target.name] : e.target.value  })}
            value={userInputs.firstName} type="text" name="firstName" />
        </div>
        <div className="DashboardFormInfos__input-bloc">
          <label htmlFor="lastName">Nom</label>
          <input
            onChange={(e) => setUserInputs({ [e.target.name] : e.target.value  })}
            value={userInputs.lastName} type="text" name="lastName" />
        </div>
        <div className="DashboardFormInfos__input-bloc">
          <label htmlFor="nickname">Pseudo</label>
          <input
            onChange={(e) => setUserInputs({ [e.target.name] : e.target.value  })}
            value={userInputs.username} type="text" name="username" />
        </div>
      </div>
      <div className="DashboardFormInfos__btn-container">
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

const mapDispatchToProps = {
  updatePublicInfos: updateInfos
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPublicInfos)
