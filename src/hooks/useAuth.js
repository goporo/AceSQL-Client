// src/hooks/useAuth.js

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import authService from '../services/authService'
import { useDispatch } from 'react-redux'
import { ROUTES } from '../routes/RouterConfig'

const useAuth = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const checkToken = async () => {
      const token = authService.getToken()

      if (!token) {
        // No token found, redirect to login
        navigate(ROUTES.Login)
      } else {
        try {
          const isValid = await authService.verifyAccessTokenRequest()

          if (isValid) {
            authService.handleAutoLogin(dispatch)
          } else {
            authService.handleLogout(dispatch)
            navigate(ROUTES.Login)
          }
        } catch (error) {
          console.error('Token validation error', error)
          authService.handleLogout(dispatch)
          navigate(ROUTES.Login)
        }
      }
    }

    checkToken()
  }, [dispatch, navigate])

  return
}

export default useAuth
