import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UserConsumer, UserProvider } from './context/context';
import Auth from './views/Auth';
import Home from './views/Home';
import Snap from './views/Snap';
import ShowAllSnap from './views/ShowAllSnap';

const Stack = createStackNavigator();
console.disableYellowBox = true;

function App () {
  return (
    <UserProvider>
      <UserConsumer>
        {({ isAuth }) => (
          <NavigationContainer>
            <Stack.Navigator>
              {!isAuth && (
                <Stack.Screen
                  name="Auth"
                  component={Auth}
                  options={{
                    title: 'Auth',
                    animationTypeForReplace: isAuth ? 'pop' : 'push',
                  }}
                />
              )}
              {isAuth && (
                <Stack.Screen name="Home" component={Home} />
              )}
              {isAuth && (
                <Stack.Screen name="Snap" component={Snap} />
              )}
              {isAuth && (
                <Stack.Screen name="ShowAllSnap" component={ShowAllSnap} />
              )}
            </Stack.Navigator>
          </NavigationContainer>
        )}
      </UserConsumer>
    </UserProvider>
  );
}

export default App;
