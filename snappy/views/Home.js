import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { Button } from 'react-native-elements';
// import { users } from "../services/users";
// import { storeData, getData } from "../services/localStorage";

export default function Home(props) {
    // const [user, setUser] = useState(null);
    // const userss = users();
    // useEffect(() => {
    //     // let link = "http://snapi.epitech.eu/all";
    //     fetch(users())
    //         .then(response => response.json())
    //         .then(json => setUser(json));
    // }, [props]);
    // console.log(user)
    // console.log(props);
    // const handleUsers = (event) => {
    //     users(token).then(data => console.log(data)).catch(err => console.error(err));
    // }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <Image
                    style={styles.logo}
                    source={require('../assets/lv.jpg')}
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

                    <Image
                        style={styles.logo}
                        source={require('../assets/lv.jpg')}
                    />
                    <View style={styles.principal}>
                        <Text style={styles.friend}>Zebi</Text>

                        <View style={styles.reception}>
                            <Image
                                style={styles.triangle}
                                source={require('../assets/triangle.png')}
                            />
                            <Text style={styles.message}>Reçu il y a </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.oneDialog}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/lv.jpg')}
                    />
                    <Text style={styles.friend}>Zebi</Text>
                </View>

                <View style={styles.oneDialog}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/lv.jpg')}
                    />
                    <Text style={styles.friend}>Zebi</Text>
                </View>

                <View style={styles.oneDialog}>

                    <Image
                        style={styles.logo}
                        source={require('../assets/lv.jpg')}
                    />
                    <Text style={styles.friend}>Zebi</Text>

                </View>
                <View style={styles.oneDialog}>

                    <Image
                        style={styles.logo}
                        source={require('../assets/lv.jpg')}
                    />
                    <Text style={styles.friend}>Zebi</Text>

                </View>
                <View style={styles.oneDialog}>

                    <Image
                        style={styles.logo}
                        source={require('../assets/lv.jpg')}
                    />
                    <Text style={styles.friend}>Zebi</Text>

                </View>
                <View style={styles.oneDialog}>

                    <Image
                        style={styles.logo}
                        source={require('../assets/lv.jpg')}
                    />
                    <Text style={styles.friend}>Zebi</Text>

                </View>
                <View style={styles.oneDialog}>

                    <Image
                        style={styles.logo}
                        source={require('../assets/lv.jpg')}
                    />
                    <Text style={styles.friend}>Zebi</Text>

                </View>
            </View>
        </SafeAreaView>
        // <View>
        //     {user === null
        //         ? false
        //         : user.data.map(users => { users.email })}
        // </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#555',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        backgroundColor: '#353535',
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
        overflow: scroll,
        marginTop: '30vw'
    },
    oneDialog: {
        backgroundColor: '#909090',
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        margin: '2px',
    },
    friend: {
        color: '#353535',
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
        marginTop: '1vh',
        marginLeft: '25px',
        fontStyle: 'italic',
        color: '#ffc900',
    }

});
