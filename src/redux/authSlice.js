import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isLoggedIn: false,
    firstName: '',
    lastName: '',
    id: '',
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logoutSuccess: (state) => {
      state.token = null;
      state.isLoggedIn = false;
    },
    userProfile(state, action) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.id = action.payload.id;
    }
  },
});

export const { loginSuccess, logoutSuccess, userProfile } = authSlice.actions;
export default authSlice.reducer;