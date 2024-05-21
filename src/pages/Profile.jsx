import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Account from "../components/Account"
import Welcome from "../components/Welcome"

function Profile() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login'); // Redirige l'utilisateur vers la page de connexion si l'utilisateur n'est pas connecté
    }
  }, [isLoggedIn, navigate]);

  return (
    <main className="main bg-dark">
      <Welcome />
      <h2 className="sr-only">Accounts</h2>
        <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" balance="Available Balance" />
        <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" balance="Available Balance" />
        <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" balance="Current Balance" />
    </main>
  )
}

export default Profile