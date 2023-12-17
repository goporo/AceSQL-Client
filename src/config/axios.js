import axios from 'axios'
import { LOCAL_STORAGE } from '../utils/storageConstants'

// eslint-disable-next-line no-undef
const baseURL = process.env.REACT_APP_SERVICE_URI

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const handleError = (error) => {
  const errorObjects = {
    status: -1,
    message: '',
  }

  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    errorObjects.status = error.response.status
    if (errorObjects.status === 400) {
      errorObjects.message = 'Bad Request'
    } else if (errorObjects.status === 401) {
      errorObjects.message = 'Unauthorized'
    } else if (errorObjects.status === 403) {
      errorObjects.message = 'Forbidden'
    } else if (errorObjects.status === 404) {
      errorObjects.message = 'Not Found'
    } else if (errorObjects.status === 409) {
      errorObjects.message = 'Conflict'
    } else if (errorObjects.status === 412) {
      errorObjects.message = 'Precondition Failed'
    } else if (errorObjects.status === 422) {
      errorObjects.message = 'Request failed'
    } else if (errorObjects.status === 500) {
      errorObjects.message = 'Internal Server Error'
    } else if (errorObjects.status === 503) {
      errorObjects.message = 'Service Unavailable'
    }
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    errorObjects.status = 444
    errorObjects.message = 'Not Response'
  } else {
    errorObjects.message = error.message
  }

  console.log(errorObjects)
  // Something happened in setting up the request that triggered an Error
  return errorObjects
}

export const getAccessToken = () => {
  return window.localStorage.getItem(LOCAL_STORAGE.JWT_TOKEN)
}

api.interceptors.request.use((config) => {
  const accessToken = getAccessToken()
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return new Promise((_resolve, reject) => {
      const errorObject = handleError(error)
      reject(errorObject)
    })
  },
)

export default api
