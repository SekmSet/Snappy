import axios from '../axios';

export async function fetchLogin (email, password) {
  try {
    const reponse = await axios.post('connection', {email, password});

    return reponse.data.data;
  } catch (e) {
    return {error: e.response.data.data};
  }
}
