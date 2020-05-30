import axios from "../axios";

export async function fetchRegister ({email, password}) {
  try {
    const reponse = await axios.post('inscription', {email, password});
    return reponse.data.data;
  } catch (e){
    return {error: e.response.data.data};
  }
}
