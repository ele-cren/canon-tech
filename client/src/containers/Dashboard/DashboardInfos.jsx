import React from 'react'
import DashboardInfosImage from '../../components/Dashboard/DashbordInfosImage'
import DashboardPublicInfos from '../../components/Dashboard/DashboardPublicInfos'
import DashboardPrivateInfos from '../../components/Dashboard/DashboardPrivateInfos'

const DashboardInfos = () => {
  return (
    <div className="DashboardInfos__container">
      <h2 className="font-roboto">Informations personnelles</h2>
      <div className="DashboardInfos__center-container">
        <DashboardInfosImage />
        <DashboardPublicInfos />
        <DashboardPrivateInfos />
      </div>
    </div>
  )
}

export default DashboardInfos
