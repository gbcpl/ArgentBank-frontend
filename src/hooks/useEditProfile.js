import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import editProfile from "../service/editProfileService";
import { userProfile } from "../redux/authSlice";

function useEditProfile() {
  const first = useSelector((state) => state.auth.firstName); 
  const last = useSelector((state) => state.auth.lastName);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedFirstName, setEditedFirstName] = useState('');
  const [editedLastName, setEditedLastName] = useState('');

  const handleEditClick = (firstName, lastName) => {
    firstName = first;
    lastName = last;
    setIsEditing(true);
    setEditedFirstName(firstName);
    setEditedLastName(lastName);
    console.log(firstName)
    console.log(lastName)
  };

  const handleSaveClick = async () => {
    try {
      await editProfile(editedFirstName, editedLastName, token);
      dispatch(userProfile({ firstName: editedFirstName, lastName: editedLastName }));
      setIsEditing(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleCancelClick = async () => {
    setIsEditing(false);
  };

  return {
    isEditing,
    editedFirstName,
    editedLastName,
    handleSaveClick,
    handleEditClick,
    handleCancelClick,
    setEditedFirstName,
    setEditedLastName,
    setIsEditing,
    first,
    last
  };
}

export default useEditProfile