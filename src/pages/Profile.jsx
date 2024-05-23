import { useDispatch, useSelector } from "react-redux";
import Account from "../components/Account"
import Welcome from "../components/Welcome"
import { useEffect } from "react";
import { userProfile } from "../redux/authSlice";

function Profile() {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const token = useSelector((state) => state.auth.token)

  useEffect(() => {
    if (isLoggedIn) {
      fetchUserProfile();
    }
  }, []);

  const fetchUserProfile = async () => {
    try {
      console.log(token)
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
      });

      if (!response.ok) {
        console.log(response)
        throw new Error('Error 404');
      }

      const data = await response.json();
      console.log(data)
      dispatch(userProfile({firstName: data.body.firstName, lastName: data.body.lastName, id: data.body.id}));
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

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