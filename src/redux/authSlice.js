import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  isLoggedIn: false,
  firstName: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    logoutSuccess: (state) => {
      state.token = null;
      state.isLoggedIn = false;
      state.firstName = '';
    },
    setFirstName(state, action) {
      state.firstName = action.payload;
    },
  },
});

export const { loginSuccess, logoutSuccess, setFirstName } = authSlice.actions;
export default authSlice.reducer;