import axios from './axios';

export const users = () => {
    return axios.get('http://snapi.epitech.eu/all');
}