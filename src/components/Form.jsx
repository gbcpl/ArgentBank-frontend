import useForm from '../hooks/useForm';

function Form() {

  const {
    email, setEmail,
    password, setPassword,
    rememberMe, setRememberMe,
    error,
    handleSubmit,
  } = useForm();
  
  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={email} onChange={setEmail} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={setPassword} />
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