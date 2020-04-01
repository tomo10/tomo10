import React, { useEffect, useContext } from 'react';
import { ThomasSchema } from './../Models';
import { RealmContext, useRealmQuery } from 'react-use-realm';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableHighlight
  } from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const EventDetailsScreen = () => {

    const person = useRealmQuery({
      source: ThomasSchema.name
    })

    // console.log('person', person)

    return (
        <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
            <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            <View style={styles.body}>
                <View style={styles.sectionContainer}>
                <Text style={styles.sectionDescription}>
                    Test {person}
                </Text>
                </View>
                <View style={styles.sectionContainer}>

                    <Text style={styles.sectionDescription}>
                        <ReloadInstructions />
                </Text>
                </View>
                <View style={styles.sectionContainer}>
                  <TouchableHighlight>
                    <Text style={styles.sectionTitle}>Go to event</Text>
                  </TouchableHighlight>
                    <Text style={styles.sectionDescription}>
                    <DebugInstructions />
                </Text>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
        </>
    )
  }


  export default EventDetailsScreen;

  
const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  });