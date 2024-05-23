import Router from './router/Router'
import { useDispatch } from 'react-redux';
import { restoreSession } from './redux/authSlice';
import { useEffect } from 'react';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('jwtToken') || sessionStorage.getItem('jwtToken');
    if (token) {
      dispatch(restoreSession({ token }));
    }
  }, [dispatch]);

  return (
    <Router />
  )
}

export default App
