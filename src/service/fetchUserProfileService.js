async function fetchUserProfile(token) {

  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    });

    if (!response.ok) {
      throw new Error('Error 404');
    }

    const data = await response.json();
    return data.body;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}

export default fetchUserProfile