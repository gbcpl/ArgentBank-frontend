import { useSelector, useDispatch } from "react-redux";
import editProfile from "../service/editProfileService";
import { userProfile } from "../redux/authSlice";

function useEditProfile() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const postEditProfile = async (editedFirstName, editedLastName) => {
    try {
      await editProfile(editedFirstName, editedLastName, token);
        dispatch(userProfile({ firstName: editedFirstName, lastName: editedLastName }));
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

  return {
    postEditProfile,
  };
}

export default useEditProfile