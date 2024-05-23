import Router from './router/Router'
import { useDispatch } from 'react-redux';
import { loginSuccess } from './redux/authSlice';
import { useEffect } from 'react';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('jwtToken')
    if (token) {
      dispatch(loginSuccess({ token }));
    }
  }, [dispatch]);

  return (
    <Router />
  )
}

export default App
