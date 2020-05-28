import axios from 'axios';

export const register =  (email,password)=>{
    return axios.post('http://snapi.epitech.eu/inscription', {email, password})
}

export const login =  (email,password)=>{
    return axios.post('http://snapi.epitech.eu/connection', {email, password})
}

