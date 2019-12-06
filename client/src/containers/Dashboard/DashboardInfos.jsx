import React from 'react'
import DashboardInfosImage from '../../components/Dashboard/DashbordInfosImage'

const DashboardInfos = () => {
  return (
    <div className="DashboardInfos__container">
      <h2 className="font-roboto">Informations personnelles</h2>
      <div className="DashboardInfos__center-container">
        <DashboardInfosImage />
      </div>
    </div>
  )
}

export default DashboardInfos
