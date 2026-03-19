import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../components/Home/Banner'

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Layout