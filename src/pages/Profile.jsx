import { useEffect } from "react";
import Account from "../components/Account";
import Welcome from "../components/Welcome";
import useFetchUserProfile from "../hooks/useFetchUserProfile";

function Profile() {
  const { isLoggedIn } = useFetchUserProfile();

  useEffect(() => {
    if (isLoggedIn) {
      useFetchUserProfile; 
    }
  }, [isLoggedIn]);

  return (
    <main className="main bg-dark">
      <Welcome />
      <h2 className="sr-only">Accounts</h2>
      <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" balance="Available Balance" />
      <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" balance="Available Balance" />
      <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" balance="Current Balance" />
    </main>
  );
}

export default Profile;
