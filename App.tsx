/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
// import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RealmProvider } from "react-use-realm";

import HomeScreen from './src/pages/HomeScreen';

import EventDetailsScreen from './src/pages/EventDetailsScreen';
import realm from './src/realm';
import { SafeAreaView, StatusBar } from 'react-native';

const Stack = createStackNavigator();



const App = () => {
  return (
    <RealmProvider initialRealm={realm}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </RealmProvider>
  );
};

/*
<NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="EventDetails" component={EventDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
*/

export default App;
