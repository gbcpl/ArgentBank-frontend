import { useState } from "react";
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import login from '../service/loginService';

const useAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleRememberMe = (e) => setRememberMe(e.target.checked);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      const { token } = data.body;

      if (rememberMe) {
        localStorage.setItem('jwtToken', token);
      }

      dispatch(loginSuccess({ token }));

      navigate('/profile');
    } catch (error) {
      console.error('Authentication failed:', error);
      setError('Username or password incorrect');
    }
  };

  return {
    email,
    setEmail: handleEmail,
    password,
    setPassword: handlePassword,
    rememberMe,
    setRememberMe: handleRememberMe,
    error,
    handleSubmit,
  };
};

export default useAuth;