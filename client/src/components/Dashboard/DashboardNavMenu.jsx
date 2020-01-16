import React from 'react'
import classNames from 'classnames'

const DashboardNavMenu = (props) => {
  return (
    <aside className="DashboardNavMenu__container">
      <nav>
       <ul>
         <li className={classNames({ 'active-menu': props.selectedMenu === 1} )} onClick={() => props.setMenu(1)}>Informations personnelles</li>
         <li className={classNames({ 'active-menu': props.selectedMenu === 2} )} onClick={() => props.setMenu(2)}>Listes</li>
         <li className={classNames({ 'active-menu': props.selectedMenu === 3} )} onClick={() => props.setMenu(3)}>Mes avis</li>
       </ul>
      </nav>
    </aside>
  )
}

export default DashboardNavMenu
