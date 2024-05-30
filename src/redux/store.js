import { configureStore } from '@reduxjs/toolkit';
import authReducer, { loginSuccess } from './authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

const token = localStorage.getItem('jwtToken');
if (token) {
  store.dispatch(loginSuccess({ token }));
}

export default store;