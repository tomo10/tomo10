import React from 'react';
import { View, TextInput, Button } from 'react-native';
import cuid from 'cuid';
import { RealmContext } from 'react-use-realm';
import { TodoSchema, DinoSchema } from './realm';
import { IWorkspace } from './types';
import realm from './realm';

export default function TodoForm () {
    const [name, setName] = React.useState('');

    // const { realm } = React.useContext(RealmContext);

    function addTodo() {
        if (realm) {
            try {
                realm.write(() => {
                    const dino = {
                        id: cuid(),
                        name
                    };
                    realm.create(DinoSchema.name, dino);
                    console.log('dino:', dino)
                });
                setName('');
            } catch (e) {
                console.log('error on creation:', e)
            }
           
        }
    }

    // let dinos = realm.objects('Dino')

    return (
        <>
        <View style={{ flexDirection: 'row', margin: 16 }}>
            <TextInput value={name} onChangeText={value => setName(value)} style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 8 }} />
            <Button title="Add" onPress={() => addTodo()} />
        </View>
        <View>
            {

            }
        </View>

        </>
    )
}