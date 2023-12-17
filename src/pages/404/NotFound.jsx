import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import UiButton from 'components/common/ui/UiButton/UiButton'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'routes/RouterConfig'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col gap-12 items-center justify-center h-screen bg-slate-primary">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
      <UiButton
        icon={faArrowLeft}
        className="h-[46px] gap-2 rounded-full w-[260px] bg-primary text-white"
        onClick={() => navigate(ROUTES.Home)}
      >
        Back to home
      </UiButton>
    </div>
  )
}

export default NotFound
