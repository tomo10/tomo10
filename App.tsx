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
import { RealmProvider } from "react-use-realm";
import realm from './src/realm';
import { Routes } from './src/Routes';


const App = () => {
  return (
      <RealmProvider initialRealm={realm}>
        <Routes />
      </RealmProvider>
    );
};


export default App;
