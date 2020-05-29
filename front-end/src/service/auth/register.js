const axios = require('axios');

// const token = localStorage.getItem('token');
// if (token) {
//   headers.append('Authorization', 'Basic ' + token);
// }

export async function fetchRegister ({email, password}) {
  try {
    const reponse = await axios.post('http://snapi.epitech.eu/inscription', {email, password});
    return reponse.data.data;
  } catch (e){
    return {error: e.response.data.data};
  }
}
