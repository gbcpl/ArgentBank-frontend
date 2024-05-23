import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isLoggedIn: false,
    firstName: '',
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = true;
      state.firstName = "Tony"
    },
    logoutSuccess: (state) => {
      state.token = null;
      state.isLoggedIn = false;
      state.firstName = '';
    },
    restoreSession(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.firstName = "Tony"
    }
  },
});

export const { loginSuccess, logoutSuccess, restoreSession } = authSlice.actions;
export default authSlice.reducer;