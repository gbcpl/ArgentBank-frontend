async function login(email, password) {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
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

export default login