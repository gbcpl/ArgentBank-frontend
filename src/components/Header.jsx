import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutSuccess, setFirstName } from '../redux/authSlice';
import { useEffect } from 'react';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const firstName = useSelector((state) => state.auth.firstName);

  useEffect(() => {
    if (isLoggedIn) {
      // Dispatch de l'action pour récupérer le prénom
      fetchUserProfile();
    }
  }, [isLoggedIn]);

  const fetchUserProfile = async () => {
    try {
      const token = sessionStorage.getItem('jwtToken');
      console.log(token)
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        console.log(response)
        throw new Error('Error 404');
      }

      const data = await response.json();
      dispatch(setFirstName(data.firstName));
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  const handleLogout = async () => {
      sessionStorage.clear();
      dispatch(logoutSuccess());
      navigate('/login');
  };

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img className="main-nav-logo-image" src="../src/assets/argentBankLogo.png" alt="Argent Bank Logo"></img>
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        {isLoggedIn ? (
          <>
            <span className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {firstName}
            </span>
            <a className="main-nav-item" href="#" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </a>
          </>
        ) : (
          <a className="main-nav-item" href="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        )}
      </div>
    </nav>
  );
}

export default Header;