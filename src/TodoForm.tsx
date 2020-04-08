import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { RealmContext } from 'react-use-realm';
import { event2, event3, event5 } from './Models';
import { CalendarEventSchema } from './realm';

export default function TodoForm () {
    const [name, setName] = React.useState('');
    const { realm } = React.useContext(RealmContext);



    function addTodo() {
        if (realm) {
            try {
                realm.write(() => {
                    realm.create(CalendarEventSchema.name, event5);
                    console.log('event:', event5)
                });
                setName('');
            } catch (e) {
                console.log('error on creation:', e)
            }
           
        }
    }


    return (
        <>
        <View style={{ flexDirection: 'row', margin: 16 }}>
            <TextInput value={name} onChangeText={value => setName(value)} style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 8 }} />
            <Button title="Add" onPress={() => addTodo()} />
        </View>
        </>
    )
}