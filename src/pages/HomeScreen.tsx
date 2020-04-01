import React, { useEffect } from 'react';
import Realm from 'realm';
import { event, CalendarDetailsSchema, ThomasSchema } from './../Models';
import { CalendarEvent } from './../types';
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
import { RealmContext } from "react-use-realm";  

declare var global: {HermesInternal: null | {}};


const HomeScreen = ({ navigation }) => {

  const { realm, setRealm } = React.useContext(RealmContext)
 
  const initRealm = () => {
    try {
      const realm = new Realm({ schema: [ThomasSchema] });
      setRealm(realm);
      console.log('Realm initialised')
    } catch (e) {
      console.log('Error on db initialisation', e)
    }
  }

  const addEvent = () => {
    if (realm) {
      realm.write(() => {
        const thomas = {
          name: 'Thomas Edwards'
        }
        realm.create(ThomasSchema.name, thomas);
      });
      
    }

    //  catch (e) {
    //   console.log("Error on creation:", e)
    // };
  }




    return (
        <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
            <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            {global.HermesInternal == null ? null : (
                <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
                </View>
            )}
            <View style={styles.body}>
                <View style={styles.sectionContainer}>
                  <TouchableHighlight onPress={() => initRealm()}>
                    <Text style={styles.sectionTitle}>Create Realm</Text>
                  </TouchableHighlight>
                <Text style={styles.sectionDescription}>
                    Edit <Text style={styles.highlight}>App.tsx</Text> to change
                    this screen and then come back to see your edits.
                </Text>
                </View>
                <View style={styles.sectionContainer}>
                  <TouchableHighlight onPress={() => addEvent()}>
                    <Text style={styles.sectionTitle}>Add Obj to Realm DBizzle</Text>

                  </TouchableHighlight>
                    <Text style={styles.sectionDescription}>
                        <ReloadInstructions />
                </Text>
                </View>
                <View style={styles.sectionContainer}>
                  <TouchableHighlight onPress={() => navigation.navigate('EventDetails')}>
                    <Text style={styles.sectionTitle}>Go to event</Text>
                  </TouchableHighlight>
                    <Text style={styles.sectionDescription}>
                    <DebugInstructions />
                </Text>
                </View>
                <View style={styles.sectionContainer}>
                  <TouchableHighlight onPress={() => console.log(realm)}>
                    <Text style={styles.sectionTitle}>Learn More</Text>

                  </TouchableHighlight>
                <Text style={styles.sectionDescription}>
                    Read the docs to discover what to do next:
                </Text>
                </View>
                <LearnMoreLinks />
            </View>
            </ScrollView>
        </SafeAreaView>
        </>
    )
}

export default HomeScreen;


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