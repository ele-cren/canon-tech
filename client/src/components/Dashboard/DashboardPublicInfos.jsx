import React from 'react'

const DashboardPublicInfos = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="DashboardFormInfos__container">
        <div className="DashboardFormInfos__input-bloc">
          <label htmlFor="firstName">Prénom</label>
          <input type="text" name="firstName" />
        </div>
        <div className="DashboardFormInfos__input-bloc">
          <label htmlFor="lastName">Nom</label>
          <input type="text" name="lastName" />
        </div>
        <div className="DashboardFormInfos__input-bloc">
          <label htmlFor="nickname">Pseudo</label>
          <input type="text" name="nickname" />
        </div>
      </div>
      <div className="DashboardFormInfos__btn-container">
        <input type="submit" value="Mettre à jour" />
      </div>
    </form>
  )
}

export default DashboardPublicInfos