import useEditProfile from '../hooks/useEditProfile';

function Welcome() {
  const { isEditing, editedFirstName, editedLastName, handleEditClick, setEditedFirstName, setEditedLastName, handleSaveClick, handleCancelClick, first, last } = useEditProfile();

  return (
    <div className="header">
      <h1>Welcome back<br />
        {isEditing ? (
          <div className="edit-inputs">
            <input type="text" className="edit-names" placeholder={editedFirstName} onChange={(e) => setEditedFirstName(e.target.value)} />
            <input type="text" className="edit-names" placeholder={editedLastName} onChange={(e) => setEditedLastName(e.target.value)} />
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