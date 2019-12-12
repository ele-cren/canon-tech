import React from 'react'
import DashboardList from '../../components/Dashboard/DashboardList'

const DashboardLists = () => {
  let lists = []
  for (let i = 0; i < 3; i++) {
    lists = [...lists, <DashboardList />]
  }
  return (
    <div className="DashboardLists__container">
      <h2 className="font-roboto">Listes</h2>
      <div className="DashboardLists__lists-container">
        {lists}
      </div>
    </div>
  )
}

export default DashboardLists
