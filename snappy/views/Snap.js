import React, { useState, useEffect } from 'react';
import {Text, View, TouchableOpacity, Button} from 'react-native';
import { Camera } from 'expo-camera';
import { Picker } from 'react-native';

// import {Picker} from '@react-native-community/picker';
import {fetchEmails, sendSnap} from '../services/snap/index';

export default function App () {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [emails, setEmails] = useState([]);
  const [email, setEmail] = useState('');
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [snap, setSnap] = useState('');
  const [duration, setDuration] = useState(1);
  const durations = [...Array(10).keys()].map(i => i+1);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  useEffect(() =>{
    fetchEmails(setEmails).then((rep) => {
      setEmail(rep[0].email);
    });
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  async function takePhoto () {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      await setSnap(photo.uri);
    }
  }

  async function resetSnap () {
    await setSnap('');
  }

  async function sendNewSnap () {
    await sendSnap({photo: snap, duration, email });
    setSnap('');
  }

  return (
    <View style={{ flex: 1 }}>
      { snap !== '' &&
      <View>
        <Text>SNAP IS DEFINE</Text>

        <Picker
          selectedValue={duration}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setDuration(itemValue)}
        >
          {durations.map((d) => (
            <Picker.Item key={d} label={d.toString()} value={d} />
          ))}
        </Picker>

        <Picker
          selectedValue={email}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setEmail(itemValue)}
        >
          {emails.map((e) => (
            <Picker.Item key={e.email} label={e.email} value={e.email} />
          ))}
        </Picker>

        <Button title="Reset" onPress={resetSnap} />
        <Button title="Send" onPress={sendNewSnap} />
      </View>
      }

      {snap === '' &&
        <Camera style={{ flex: 1 }} type={type} ref={ref => {
          setCameraRef(ref) ;
        }}
        >

          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              justifyContent: 'flex-end'
            }}>
            <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: 'flex-end'
              }}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignSelf: 'center'}} onPress={takePhoto}>
              <View style={{
                borderWidth: 2,
                borderRadius: 50,
                borderColor: 'white',
                height: 50,
                width:50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'}}
              >
                <View style={{
                  borderWidth: 2,
                  borderRadius: 50,
                  borderColor: 'white',
                  height: 40,
                  width:40,
                  backgroundColor: 'white'}} >
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </Camera>
      }
    </View>
  );
}
