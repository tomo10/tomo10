import React from 'react';
import { Platform, Picker, StyleSheet, View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useRealmQuery, RealmContext } from 'react-use-realm';
import {NetworkInfo} from 'react-native-network-info';

import { Filter, IWorkspace, IDino } from './../types';
import { DinoSchema } from '../realm';
import TodosList from './../TodoList';
import TodoForm from './../TodoForm';
import realm from './../realm'

const filterDisplayNames: Record<Filter, string> = {
    'all': 'All Tasks',
    'done': 'Completed Tasks',
    'not-done': 'Incomplete Tasks'
};

export default function HomeScreen() {
    const [filter, setFilter] = React.useState<Filter>('all');

    // Get Local IP


    // let dinos = realm.objects('Dino');
    const dinos = useRealmQuery<IDino>({
        source: DinoSchema.name
    });


    return <View style={styles.body}>
        {Platform.OS === 'android' && 
          <Picker 
            mode="dropdown" 
            selectedValue={filter} 
            prompt={filterDisplayNames[filter]} 
            style={{ height: 40, width: '100%', margin: 16 }} 
            onValueChange={value => setFilter(value)}>
            {Object.keys(filterDisplayNames).map(filter => <Picker.Item key={filter} value={filter} label={filterDisplayNames[filter as Filter]} />)}
          </Picker>}
          <View style={styles.workspace}>
            <TodoForm />
            { dinos ?
              dinos.map((dino, index) => {
                console.log(dino)
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
}

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