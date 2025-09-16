import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyProfile = () => {
  const { userData } = useContext(AppContext)

  if (!userData) return null

  return (
    <div className='max-w-md mx-auto flex flex-col items-center gap-4 pt-10 text-center'>
      {/* Profile Image */}
      <img className='w-36 h-36 rounded-full object-cover' src={userData.image} alt={userData.name} />

      {/* Name */}
      <p className='text-3xl font-medium text-gray-800'>{userData.name}</p>

      {/* Contact Info */}
      <div className='mt-4 text-sm text-gray-700'>
        <p>Email: <span className='text-blue-500'>{userData.email}</span></p>
        <p>Phone: <span className='text-blue-500'>{userData.phone}</span></p>
      </div>
    </div>
  )
}

export default MyProfile
