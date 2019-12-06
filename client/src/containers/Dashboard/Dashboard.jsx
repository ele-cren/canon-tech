import React, { useState } from 'react'
import DashboardNavMenu from '../../components/Dashboard/DashboardNavMenu'
import DashboardInfos from './DashboardInfos'

const Dashboard = () => {
  const [selectedMenu, setMenu] = useState(1)

  return (
    <div className="Dashboard__container">
      <DashboardNavMenu selectedMenu={selectedMenu} setMenu={setMenu} />
      {selectedMenu === 1 ? <DashboardInfos /> : ''}
    </div>
  )
}

export default Dashboard
