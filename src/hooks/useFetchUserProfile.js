import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "../redux/authSlice";
import fetchUserProfile from "../service/fetchUserProfileService";

const useFetchUserProfile = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const token = useSelector((state) => state.auth.token);

  const getUserProfile = async () => {
    try {
      const userData = await fetchUserProfile(token);
      dispatch(userProfile({
        firstName: userData.firstName,
        lastName: userData.lastName,
        id: userData.id
      }));
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  getUserProfile();

  return { isLoggedIn };
};

export default useFetchUserProfile;
