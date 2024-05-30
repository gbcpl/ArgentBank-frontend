import { useSelector } from 'react-redux';
import useEditProfile from '../hooks/useEditProfile';
import { useState } from 'react';

function Welcome() {
  const first = useSelector((state) => state.auth.firstName); 
  const last = useSelector((state) => state.auth.lastName);
  const [editedFirstName, setEditedFirstName] = useState('');
  const [editedLastName, setEditedLastName] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const { postEditProfile } = useEditProfile();

  const handleEditClick = (firstName, lastName) => {
    firstName = first;
    lastName = last;
    setIsEditing(true);
    setEditedFirstName(firstName);
    setEditedLastName(lastName);
  };

  const handleSaveClick = async () => {
    postEditProfile(editedFirstName, editedLastName)
    setIsEditing(false);
  };

  const handleCancelClick = async () => {
    setIsEditing(false);
  };

  return (
    <div className="header">
      <h1>Welcome back<br />
        {isEditing ? (
          <div className="edit-inputs">
            <input type="text" className="edit-names" value={editedFirstName} onChange={(e) => setEditedFirstName(e.target.value)} />
            <input type="text" className="edit-names" value={editedLastName} onChange={(e) => setEditedLastName(e.target.value)} />
          </div>
        ) : (
          <>
            <span className="firstName">{first}</span> <span className="lastName">{last}!</span>
          </>
        )}
      </h1>
      {isEditing ? (
        <div className="save-cancel-buttons">
          <button className="save-button" onClick={handleSaveClick}>Save</button>
          <button className="cancel-button" onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
      )}
    </div>
  ) 
}

export default Welcome;