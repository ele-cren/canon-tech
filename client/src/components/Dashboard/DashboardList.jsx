import React from 'react'
import Item from '../Item'

const DashboardList = () => {
  let items = []
  for (let i = 0; i < 6; i++) {
    items = [...items, <Item img="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Blade_Runner_%281982_poster%29.png/220px-Blade_Runner_%281982_poster%29.png"
    title="Blade Runner" author="Ridley Scott" />]
  }
  return (
    <div className="DashboardList__container">
      <div className="DashboardList__title-container">
        <h2 className="DashboardList__title">Mes films préférés</h2>
      </div>
      <div className="DashboardList__items-container">
        {items}
      </div>
    </div>
  )
}

export default DashboardList