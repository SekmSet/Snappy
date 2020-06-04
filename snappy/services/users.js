import axios from './axios';

<<<<<<< HEAD
export const users = () => {
  return axios.get('http://snapi.epitech.eu/all');
};
=======
export async function fetchEmails(setEmail) {
    const response = await axios.get('all');
    setEmail(response.data.data);
}
>>>>>>> Design users
