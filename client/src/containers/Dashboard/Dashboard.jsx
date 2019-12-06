import React, { useState } from 'react'
import DashboardNavMenu from '../../components/Dashboard/DashboardNavMenu'

const Dashboard = () => {
  const [selectedMenu, setMenu] = useState(1)

  return (
    <div className="Dashboard__container">
      <DashboardNavMenu selectedMenu={selectedMenu} setMenu={setMenu} />
    </div>
  )
}

export default Dashboard
