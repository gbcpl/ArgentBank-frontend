import { useEffect, useState } from 'react';
import useForm from '../hooks/useForm';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { postForm, error, rememberMe, setRememberMe, isLoggedIn } = useForm();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    postForm(email, password)
    e.preventDefault();
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/profile'); 
    }
  }, [isLoggedIn, navigate]);

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={email} onChange={handleEmail} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={handlePassword} />
        </div>
        <div className="input-remember">
        <input type="checkbox" id="remember-me" checked={rememberMe} onChange={setRememberMe} />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="sign-in-button">Sign In</button>
      </form>
    </section>
  )
}

export default Form