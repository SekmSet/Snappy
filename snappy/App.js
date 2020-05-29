import React from "react";
// import { StyleSheet, Text, View, AppRegistry } from "react-native";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

// import { NativeRouter, Route, Link } from "react-router-native";
import Auth from "./views/Auth";
import Home from "./views/Home";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer >
  );
};

export default App;
// function App() {
//   const Stack = createStackNavigator();
//   return (

//     <NavigationContainer>
//       <Stack.Navigator>

//         <Stack.Screen name="Auth" component={Auth} />
//         {/* <Route path="/about" component={About} />
//       <Route path="/topics" component={Topics} /> */}

//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// };


