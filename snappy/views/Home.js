import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
<<<<<<< HEAD
import { fetchAllUser } from '../services/allusers';
import { vw, vh } from 'react-native-expo-viewport-units';

export default function Auth ({ navigation }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUser(setUsers);
  }, []);

  function Item ({ email }) {
    email = typeof email === 'string' ? email.split('@')[0] : '';
    return (
      <View style={styles.item}>
        <Text>{email}</Text>
      </View>
=======
import { fetchEmails } from '../services/users';

import { storeData, getData } from "../services/localStorage";
// import { users } from "../services/users";
// import { storeData, getData } from "../services/localStorage";

const Home = () => {

    const [emails, setEmails] = useState([]);
    useEffect(() => {
        fetchEmails(setEmails);
    }, []);
    // setEmails(getData());

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <Image
                    style={styles.logo}
                    source={require('../assets/user7.png')}
                />
                <Text style={styles.name}>Monzzzz</Text>
                <View style={styles.setting}>
                    <View style={styles.settingContainer}>
                        <Image
                            style={styles.settingIcon}
                            source={require('../assets/setting.png')}
                        />
                    </View>
                    <View style={styles.dialogContainer}>
                        <Image
                            style={styles.newTchat}
                            source={require('../assets/dialog.png')}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.allDialog}>
                <View style={styles.oneDialog}>
                    {/* {emails.map((email) => (
                        <Text key={email.email} value={email.email}> {email.email} </Text>
                    ))} */}
                    <Image
                        style={styles.logo}
                        source={require('../assets/user2.png')}
                    />
                    <View style={styles.principal}>
                        <Text style={styles.friend}>Belinda</Text>

                        <View style={styles.reception}>
                            <Image
                                style={styles.triangle}
                                source={require('../assets/triangle.png')}
                            />
                            <Text style={styles.message}>Reçu il y a 1h</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.oneDialog}>

                    <Image
                        style={styles.logo}
                        source={require('../assets/user3.png')}
                    />
                    <View style={styles.principal}>
                        <Text style={styles.friend}>Zach</Text>

                        <View style={styles.reception}>
                            <Image
                                style={styles.triangle}
                                source={require('../assets/triangle.png')}
                            />
                            <Text style={styles.message}>Reçu il y a 1h</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.oneDialog}>

                    <Image
                        style={styles.logo}
                        source={require('../assets/user1.png')}
                    />
                    <View style={styles.principal}>
                        <Text style={styles.friend}>Priscilla</Text>

                        <View style={styles.reception}>
                            <Image
                                style={styles.triangle}
                                source={require('../assets/triangle.png')}
                            />
                            <Text style={styles.message}>Reçu il y a 1h</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.oneDialog}>

                    <Image
                        style={styles.logo}
                        source={require('../assets/user5.png')}
                    />
                    <View style={styles.principal}>
                        <Text style={styles.friend}>Jordan</Text>

                        <View style={styles.reception}>
                            <Image
                                style={styles.triangle}
                                source={require('../assets/triangle.png')}
                            />
                            <Text style={styles.message}>Reçu il y a 1h</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.oneDialog}>

                    <Image
                        style={styles.logo}
                        source={require('../assets/user6.png')}
                    />
                    <View style={styles.principal}>
                        <Text style={styles.friend}>Jessica</Text>

                        <View style={styles.reception}>
                            <Image
                                style={styles.triangle}
                                source={require('../assets/triangle.png')}
                            />
                            <Text style={styles.message}>Reçu il y a 1h</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.oneDialog}>

                    <Image
                        style={styles.logo}
                        source={require('../assets/user4.png')}
                    />
                    <View style={styles.principal}>
                        <Text style={styles.friend}>Tom</Text>

                        <View style={styles.reception}>
                            <Image
                                style={styles.triangle}
                                source={require('../assets/triangle.png')}
                            />
                            <Text style={styles.message}>Reçu il y a 1h</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.oneDialog}>

                    <Image
                        style={styles.logo}
                        source={require('../assets/user8.png')}
                    />
                    <View style={styles.principal}>
                        <Text style={styles.friend}>Les Pains Durs</Text>

                        <View style={styles.reception}>
                            <Image
                                style={styles.triangle}
                                source={require('../assets/triangle.png')}
                            />
                            <Text style={styles.message}>Reçu il y a 1h</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.oneDialog}>

                    <Image
                        style={styles.logo}
                        source={require('../assets/user3.png')}
                    />
                    <View style={styles.principal}>
                        <Text style={styles.friend}>Dentiste</Text>

                        <View style={styles.reception}>
                            <Image
                                style={styles.triangle}
                                source={require('../assets/triangle.png')}
                            />
                            <Text style={styles.message}>Reçu il y a 1h</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView >
>>>>>>> Design users
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../assets/lv.jpg')}
        />
        <Text style={styles.name}>Snappy</Text>
        <View style={styles.setting}>
          <View style={styles.settingContainer}>
            <Image
              style={styles.settingIcon}
              source={require('../assets/setting.png')}
            />
          </View>
          <View style={styles.dialogContainer}>
            <Image
              style={styles.newTchat}
              source={require('../assets/dialog.png')}
            />
          </View>
        </View>
      </View>
      <View>
        <Button
          title="Take a Snap"
          onPress={() => navigation.navigate('Snap')}
        />
        <Button
          title="Snaps"
          onPress={() => navigation.navigate('ShowAllSnap')}
        />

      </View>
      <View style={styles.reception}>
        <FlatList
          data={users}
          renderItem={({ item }) => <Item email={item.email} />}
          keyExtractor={item => item.email}
        />
      </View>
      <View style={styles.reception}>
        <Image
          style={styles.triangle}
          source={require('../assets/triangle.png')}
        />
        <Text style={styles.message}>Reçu il y a </Text>
      </View>
    </SafeAreaView>
  );
}
<<<<<<< HEAD
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    backgroundColor: '#353535',
    width: vw(100),
    // position: 'fixed',
    top: 0,
    display: 'flex',
    flexDirection: 'row',
    zIndex: 1000
  },
  logo: {
    width: vw(14),
    height: vw(14),
    borderRadius: 50,
    margin: 30
  },
  name: {
    color: '#ffc900',
    marginTop: 38,
    fontSize: vw(8),
    fontWeight: 'bold',
    width: vw(50),
    marginLeft: vw(7)
  },
  settingContainer: {
    // position: 'absolute',
    top: vh(1.5),
    left: '100%',
    width: vw(10),
    height: vw(10),
    borderRadius: 50,
    backgroundColor: 'white',
    padding: 6,
    justifyContent: 'center'
  },
  settingIcon: {
    width: vw(7),
    height: vw(7),
  },
  dialogContainer: {
    // position: 'absolute',
    top: vh(10),
    left: '100%',
    width: vw(8),
    height: vw(8),
    borderRadius: 50,
    backgroundColor: '#ffc900',
    justifyContent: 'center',
    padding: 3
  },
  newTchat: {
    width: vw(6.5),
    height: vw(6.5),
  },
  allDialog: {
    // overflow: scroll,
    marginTop: vw(30)
  },
  oneDialog: {
    backgroundColor: '#909090',
    width: vw(100),
    display: 'flex',
    flexDirection: 'row',
    margin: 2,
  },
  friend: {
    color: '#353535',
    marginTop: 25,
    fontSize: vw(6),
    fontWeight: 'bold',
    width: vw(50),
    marginLeft: vw(3)
  },
  reception: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
  },
  triangle: {
    marginTop: vh(1),
    marginLeft: vw(4),
    width: vw(3),
    height: vw(3),
    transform: [{ rotate: '90deg' }]
  },
  message: {
    marginTop: vh(1),
    marginLeft: 25,
    fontStyle: 'italic',
    color: '#ffc900',
  },
  item: {
    backgroundColor: '#CCCCCC',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
=======
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        backgroundColor: '#333',
        width: '100vw',
        position: 'fixed',
        top: 0,
        display: 'flex',
        flexDirection: 'row',
        zIndex: 1000
    },
    logo: {
        width: '14vw',
        height: '14vw',
        borderRadius: '50%',
        margin: '30px'
    },
    name: {
        color: '#ffc900',
        marginTop: '38px',
        fontSize: '8vw',
        fontWeight: 'bold',
        width: '50vw',
        marginLeft: '7vw'
    },
    settingContainer: {
        position: 'absolute',
        top: '1.5vh',
        left: '100%',
        width: '10vw',
        height: '10vw',
        borderRadius: '50%',
        backgroundColor: 'white',
        padding: '6px',
        justifyContent: 'center'
    },
    settingIcon: {
        width: '7vw',
        height: '7vw',
    },
    dialogContainer: {
        position: 'absolute',
        top: '10vh',
        left: '100%',
        width: '8vw',
        height: '8vw',
        borderRadius: '50%',
        backgroundColor: '#ffc900',
        justifyContent: 'center',
        padding: '3px'
    },
    newTchat: {
        width: '6.5vw',
        height: '6.5vw',
    },
    allDialog: {
        overflow: "scroll",
        marginTop: '30vw'
    },
    oneDialog: {
        backgroundColor: '#e2e2e2',
        width: '99vw',
        display: 'flex',
        flexDirection: 'row',
        margin: '2px',
    },
    friend: {
        color: '#333',
        marginTop: '25px',
        fontSize: '6vw',
        fontWeight: 'bold',
        width: '50vw',
        marginLeft: '3vw'
    },
    reception: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '15px',
    },
    triangle: {
        marginTop: '1vh',
        marginLeft: '4vw',
        width: '3vw',
        height: '3vw',
        transform: [{ rotate: "90deg" }]
    },
    message: {
        marginTop: '0.5vh',
        marginLeft: '2vw',
        color: '#353535',
        fontSize: '3.5vw',
        textShadowColor: '#ffc900',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 0
    }
>>>>>>> Design users
});
