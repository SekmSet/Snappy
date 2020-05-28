import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import {register, login} from "./services/auth"
import {storeData, getData} from "./services/localStorage";

export default function App() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleRegister = (event)=>{
      register(email,password).then(data=>console.log(data)).catch(err=>console.error(err));
  }
  const handleLogin = (event)=>{

    login(email,password)
        .then( data=>storeData(data.data.token)
            .then(res => console.log(res))
            .catch(e=>console.log(e)) )
        .catch(err=>console.error(err));
  }
  const handleEmailChange = (value) => {
    setEmail(value);
    console.log("mail "+ email)
  }
  const handlePasswordChange = (value) => {
    setPassword(value);
    console.log("pass "+ password)
  }
  return (
    <SafeAreaView style={styles.container}>
        <View></View>

        <View style={styles.topContainer}>
          <Text style={styles.jo}>Snappy</Text>
        </View>
        <View style={styles.topContainer}>
          <View>
            <TextInput style={styles.input} placeholder='EMAIL' onChangeText={handleEmailChange}/>
            <TextInput style={styles.input} placeholder='PASSWORD' onChangeText={handlePasswordChange}/>
          </View>
          <View styles={{display: 'flex', flexDirection: 'row', width:'100%'}}>
              <Button title="Register" buttonStyle={{width: "30%"}} onPress={handleRegister}/>
              <Button title="Login" buttonStyle={{width: "30%"}} onPress={handleLogin} />
          </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  beli : {
    color: '#bdbdbd'
  },
  topContainer: {
    backgroundColor: '#121212',
    width: '100%',
    height: '50%',

  },
  jo : {
    color: '#bdbdbd'
  },
  input: {
    backgroundColor: '#353535',
    color: '#121212',
    marginTop: 25,
    padding: 15,
    width: 230,
    height: 40,
    borderRadius: 20,
  },

});
