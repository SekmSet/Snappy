import AsyncStorage from '@react-native-community/async-storage';


export const storeData = async (value) => {
    const  result= {};
    try {
        result.message  = await AsyncStorage.setItem('@storage_Key', value);
        result.success = true;
    } catch (e) {
        result.error = e;
        result.success = false
    }
  return result;
}

export const storeDataJson = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
        // saving error
    }
}

export const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if(value !== null) {
            // value previously stored
        }
    } catch(e) {
        // error reading value
    }
}

export const getDataJson = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@storage_Key')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        // error reading value
    }
}

