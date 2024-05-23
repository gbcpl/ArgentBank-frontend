import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutSuccess } from '../redux/authSlice';
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const firstName = useSelector((state) => state.auth.firstName); 

  const handleLogout = async () => {
      sessionStorage.clear();
      localStorage.clear();
      dispatch(logoutSuccess());
      navigate('/');
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
              <Link to="/profile" relative="path"><i className="fa fa-user-circle"></i><span>{firstName}</span></Link>
            </span>
            <span className="main-nav-item" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i>
              <span>Sign Out</span>
            </span>
          </>
        ) : (
          <span className="main-nav-item">
            <Link to="/login" relative="path"><i className="fa fa-user-circle"></i><span>Sign In</span></Link>
          </span>
        )}
      </div>
    </nav>
  );
}

export default Header;