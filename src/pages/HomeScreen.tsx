import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useRealmQuery, RealmContext } from 'react-use-realm';
import {NetworkInfo} from 'react-native-network-info';
import { Filter, IDino, CalendarEvent } from './../types';
import { CalendarEventSchema } from '../realm';

import TodoForm from './../TodoForm';



export default function HomeScreen() {
    const [filter, setFilter] = React.useState<Filter>('all');
    const { realm } = React.useContext(RealmContext);

    useEffect(() => {
      console.log('home screen renders')
      // realmStatus()
    })

    const events = useRealmQuery<CalendarEvent>({
        source: CalendarEventSchema.name
    });


    const realmStatus = () => {
      try {
        // Realm.deleteFile({ schema: [ DinoSchema ] })
        console.log('realm status:', realm?.schema)
      } catch (e) {
        console.log('error:', e)
      }
    }



    return <View style={styles.body}>
              <View style={styles.workspace}>
                <TodoForm />
                { events ?
                  events.map((event, index) => {
                    return (
                      <View key={index} style={{borderColor: 'black', borderWidth: 1}}>
                        <Text style={{fontSize: 20, color: 'black'}}>{event.title}</Text>
                        <Text style={{fontSize: 16, color: 'black'}}>{event.startDate.toDateString()}</Text>
                      </View>
                    )               
                  }) 
                  : <Text style={{fontSize: 20, color: 'black'}} >No dinosaurs here</Text>
                }
              </View>
          </View>
};



const styles = StyleSheet.create({
    body: {
        backgroundColor: Colors.white,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    workspace: {
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    workspaceHeader: {
        marginHorizontal: 20,
        paddingVertical: 8,
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});