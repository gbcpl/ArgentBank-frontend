import { useState } from "react";
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUsername = (e) => setUsername(e.target.value)
  const handlePassword = (e) => setPassword(e.target.value)
  const handleRememberMe = (e) => setRememberMe(e.target.checked)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Error with network response');
      }

      const data = await response.json();
      console.log('Data:', data); 

      const { token } = data.body;
      console.log('Token:', token);
      if (rememberMe) {
        localStorage.setItem('jwtToken', token);
      } else {
        sessionStorage.setItem('jwtToken', token);
      }

      dispatch(loginSuccess(token));

      navigate('/profile');
    
    } catch (error) {
      console.error('Authentication failed:', error);
      setError('Username or password incorrect');
    }
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={username} onChange={handleUsername} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={handlePassword} />
        </div>
        <div className="input-remember">
        <input type="checkbox" id="remember-me" checked={rememberMe} onChange={handleRememberMe} />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="sign-in-button">Sign In</button>
      </form>
    </section>
  )
}

export default Form