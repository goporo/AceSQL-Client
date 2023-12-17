import React from 'react'

const AuthWrapper = ({ children }) => {
  return (
    <div className="bg-white w-screen h-screen flex justify-center items-center">
      {children}
    </div>
  )
}

export default AuthWrapper
