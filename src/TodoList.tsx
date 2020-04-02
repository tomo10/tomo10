  
import React from 'react';
import { FlatList, View, Text, Switch } from 'react-native';
import { useRealmQuery, RealmContext } from 'react-use-realm';

import { Filter, ITodo, IWorkspace, IDino } from './types';

const filterQueries: Record<Filter, string | undefined> = {
    'all': undefined,
    'done': 'doneAt != null',
    'not-done': 'doneAt = null'
};

function TodoItem({ dino }: { dino: IDino }) {

    const { realm } = React.useContext(RealmContext);


    return <View style={{ flexDirection: 'row', alignItems: 'center', margin: 16 }}>
        <Text style={{ flex: 1, marginLeft: 8 }}>{dino.name}</Text>
    </View>
}

export default function TodosList({ workspace, filter }: { workspace: IWorkspace, filter: Filter }) {
    const todos = useRealmQuery<ITodo>({
        source: workspace.todos,
        filter: filterQueries[filter]
    });

    return (
        <>
            {<FlatList data={todos as Realm.Collection<ITodo>} renderItem={({ item }) => <TodoItem todo={item} />} />}
        </>
    )
}