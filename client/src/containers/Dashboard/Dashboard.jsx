import React, { useState, useEffect } from 'react'
import DashboardNavMenu from '../../components/Dashboard/DashboardNavMenu'
import DashboardInfos from './DashboardInfos'
import DashboardDisplayBtn from '../../components/Dashboard/DashboardDisplayBtn'

const Dashboard = () => {
  const [selectedMenu, setSelected] = useState(1)
  const [width, setWidth] = useState(0)
  const [isMobile, setMobile] = useState(false)
  const [isMenuOpened, setMenu] = useState(false)

  useEffect(() => {
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  })

  useEffect(() => {
    if (width <= 800) {
      if (!isMobile) {
        setMobile(true)
      }
    } else {
      if (isMobile) {
        setMobile(false)
      }
      if (isMenuOpened) {
        setMenu(false)
      }
    }
  }, [isMobile, isMenuOpened, width])

  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  return (
    <div className="Dashboard__container">
      {isMobile ? <DashboardDisplayBtn isMenuOpened={isMenuOpened} setMenu={setMenu} /> : ''}
      {(isMenuOpened && isMobile) || !isMobile ? <DashboardNavMenu selectedMenu={selectedMenu} setMenu={setSelected} /> : ''}
      {selectedMenu === 1 ? <DashboardInfos /> : ''}
    </div>
  )
}

export default Dashboard
