import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useRealmQuery } from 'react-use-realm';
import {NetworkInfo} from 'react-native-network-info';
import { Filter, IDino } from './../types';
import { DinoSchema } from '../realm';

import TodoForm from './../TodoForm';



export default function HomeScreen() {
    const [filter, setFilter] = React.useState<Filter>('all');

    // Get Local IP


    // let dinos = realm.objects('Dino');
    const dinos = useRealmQuery<IDino>({
        source: DinoSchema.name
    });


    return <View style={styles.body}>
              <View style={styles.workspace}>
                <TodoForm />
                { dinos ?
                  dinos.map((dino, index) => {
                    return (
                      <View style={{borderColor: 'black', borderWidth: 1}}>
                        <Text style={{fontSize: 20, color: 'black'}}>{dino.name} {index}</Text>
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