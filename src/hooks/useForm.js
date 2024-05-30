import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../redux/authSlice';
import login from '../service/loginService';

const useForm = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  
  const dispatch = useDispatch();

  const handleRememberMe = (e) => setRememberMe(e.target.checked);

  const postForm = async (email, password) => {
    try {
      const data = await login(email, password);
      const { token } = data.body;

      if (rememberMe) {
        localStorage.setItem('jwtToken', token);
      }

      dispatch(loginSuccess({ token, isLoggedIn }));
    } catch (error) {
      console.error('Authentication failed:', error);
      setError('Username or password incorrect');
    }
  };

  return {
    rememberMe,
    setRememberMe: handleRememberMe,
    error,
    postForm,
    isLoggedIn
  };
};

export default useForm;