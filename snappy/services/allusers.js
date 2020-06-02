import axios from './axios';

export async function FetchAllUser(setUsers) {
    try {
        const resultUser = await axios.get('all');
        setUsers(resultUser.data.data);
        console.log(resultUser.data.data);
        return resultUser;
    } catch (exception) {
        return exception;
    }
}