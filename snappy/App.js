import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Label } from 'react-native';
// import { FormLabel } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { register, login } from "./services/auth"
import { storeData, getData } from "./services/localStorage";

export default function App() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleRegister = (event) => {
    register(email, password).then(data => console.log(data)).catch(err => console.error(err));
  }
  const handleLogin = (event) => {

    login(email, password)
      .then(data => storeData(data.data.token)
        .then(res => console.log(res))
        .catch(e => console.log(e)))
      .catch(err => console.error(err));
  }
  const handleEmailChange = (value) => {
    setEmail(value);
    console.log("mail " + email)
  }
  const handlePasswordChange = (value) => {
    setPassword(value);
    console.log("pass " + password)
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bar}></View>
      <View style={styles.header}>
        <Text style={styles.title}>SNAPPY</Text>
      </View>

      <View style={styles.topContainer}>
        <View>
          <TextInput style={styles.input} placeholder='EMAIL' placeholderStyle={{ color: '#FFF' }} onChangeText={handleEmailChange} />
          <TextInput secureTextEntry={true} style={styles.input} placeholder='PASSWORD' onChangeText={handlePasswordChange} />
          <Text style={styles.agree}> By logging in you accepts the terms of nudes</Text>
        </View>

        <View style={styles.buttons}>
          <Button style={styles.register} title="REGISTER" buttonStyle={{ backgroundColor: '#ffd800', borderRadius: 15, padding: 10 }} titleStyle={{ color: '#000', fontSize: 14 }} onPress={handleRegister} />
          <Button style={styles.login} title="LOGIN" buttonStyle={{ backgroundColor: '#151515', borderRadius: 15, padding: 10 }} titleStyle={{ color: '#FFF', fontSize: 14 }} onPress={handleLogin} />
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  header: {
    color: '#f7f7f7',
    backgroundColor: '#353535',
    width: 100 + 'vw',
    textAlign: 'center',
    position: 'absolute',
    top: 0,
  },
  title: {
    marginTop: 100,
    marginBottom: 100,
    color: '#bdbdbd',
    fontWeight: 'bold',
    fontSize: '14vw',
    width: '100%',
  },
  topContainer: {
    marginTop: '50%',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#555555',
    color: '#121212',
    marginTop: 25,
    padding: 15,
    width: '100%',
    height: 40,
    borderRadius: 20,
  },
  buttons: {
    position: 'relative',
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'center',
  },
  register: {
    width: '25vw',
    marginRight: '20px',
  },
  login: {
    width: '25vw',
  },
  agree: {
    color: '#808080',
    marginTop: 15,
    fontSize: 10,
    textAlign: 'center',
  },
  bar: {
    display: 'flex',
    width: '12px',
    height: '100%',
    backgroundColor: '#ffd800',
    position: 'absolute',
    zIndex: 1000,
    left: 0,
    top: 0,
  }
});
