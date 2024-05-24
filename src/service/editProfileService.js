async function editProfile(firstName, lastName, token) {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'PUT',
    headers: {
      "Authorization": `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ firstName, lastName }),
  })

  if (!response.ok) {
    throw new Error('Error with network response');
  }

  return response.json();
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}

export default editProfile