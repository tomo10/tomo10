import React, { useEffect, useContext } from 'react';


import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableHighlight
  } from 'react-native';

import Content from './../components/Content';



const EventDetailsScreen = ({ route }) => {
  const { event } = route.params

    return (
        <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
            <Content {...{event}} />
        </SafeAreaView>
        </>
    )
  }


  export default EventDetailsScreen;

  