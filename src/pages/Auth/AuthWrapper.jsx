import React from 'react'

const AuthWrapper = ({ children }) => {

    return (
        <div className="bg-slate-400 w-screen h-screen flex justify-center items-center">
            {children}
        </div>
    )
}

export default AuthWrapper