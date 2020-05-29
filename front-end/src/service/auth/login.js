const axios = require('axios');
const token = localStorage.getItem('token');
const email = localStorage.getItem('email');

export async function fetchLogin (email, password) {
  try {
    const reponse = await axios.post('http://snapi.epitech.eu/connection', {email, password});

    return reponse.data.data;
  } catch (e){
    return {error: e.response.data.data};
  }
}

export function isAuthenticated () {
  return (token)
}

export function getCurentUser () {
  if (!isAuthenticated() || token === 'undefined') {
    return false;
  }

  return email;
}