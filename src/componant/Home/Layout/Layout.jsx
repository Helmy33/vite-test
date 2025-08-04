import React from 'react'
import { Outlet } from 'react-router-dom'
import NAvbar from '../NAvbar/NAvbar'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <div>
      <NAvbar />
      <div className="min-h-dvh flex items-center justify-center bg-[#1ABC9C]">
        <div className="container mx-auto px-2 sm:px-0">
      <Outlet />
      </div>
      </div>
      <Footer />

    </div>
  )
}
