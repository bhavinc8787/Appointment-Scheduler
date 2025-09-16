import React from 'react'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 p-4">
      
      {/* Sidebar: Specialities (always visible) */}
      <div className="w-full sm:w-1/4">
        <SpecialityMenu isSidebar />
      </div>

      {/* Main content: Top Doctors */}
      <div className="w-full sm:w-3/4">
        <TopDoctors />
      </div>
    </div>
  )
}

export default Home
