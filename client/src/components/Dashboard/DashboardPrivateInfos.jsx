import React from 'react'

const DashboardPrivateInfos = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div style={{ marginTop: 40 }} className="DashboardFormInfos__container">
        <div className="DashboardFormInfos__input-bloc">
          <label htmlFor="password">Nouveau mot de passe</label>
          <input type="password" name="password" />
        </div>
        <div className="DashboardFormInfos__input-bloc">
          <label htmlFor="password-conf">Confirmation</label>
          <input type="password" name="password-conf" />
        </div>
        <div className="DashboardFormInfos__input-bloc">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
      </div>
      <div style={{ marginBottom: 40 }} className="DashboardFormInfos__btn-container">
        <input type="submit" value="Mettre à jour" />
      </div>
    </form>
  )
}

export default DashboardPrivateInfos