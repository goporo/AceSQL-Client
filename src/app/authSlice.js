import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    isLoggedIn: false,
  },
  reducers: {
    loginSuccess: (state) => {
      // state.user = action.payload
      state.isLoggedIn = true
    },
    logoutSuccess: (state) => {
      state.isLoggedIn = false
    },
  },
})

export const { loginSuccess, logoutSuccess } = authSlice.actions
export default authSlice.reducer
