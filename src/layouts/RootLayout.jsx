import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className="flex flex-col m-0 p-0">
        <Navbar/>
        <main className="flex-1 mt-[8rem]">
            <div className="relative container mx-auto m-0 p-0">
                <Outlet/>
            </div>
        </main>
    </div>
  )
}

export default RootLayout