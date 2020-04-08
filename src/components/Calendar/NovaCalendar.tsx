import * as React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { RealmContext, useRealmQuery } from 'react-use-realm';
import { MONTH_HEIGHT, months } from './CalendarModel';
import MonthToDisplay from './MonthToDisplay';
const monthArray = [1,2,3,4,5,6,7,8,9,10,11,12]
const unix = Date.now();

const listItem = ( item: number, index: number ) => {    
    console.log(months[item]);
    return <MonthToDisplay />
};


export default () => {

    const { realm } = React.useContext(RealmContext);
    // let events = realm?.objects('CalendarEvent').filtered('startDate > 2020-5-1@00:00:00:000');
    let events = useRealmQuery({
        source: 'CalendarEvent',
        filter: 'startDate > 2020-5-1@00:00:00:000'
    });
    
    console.log('-----------------')
    return (
        <>
        <View>
            <Text>Lots of days</Text>
        </View>
        <View style={{height: MONTH_HEIGHT}}>
            <FlatList 
                data={monthArray}
                renderItem={({item, index}) => listItem(item, index)}
                decelerationRate={'fast'}
                snapToAlignment={'start'}
                snapToInterval={MONTH_HEIGHT}
                initialScrollIndex={new Date().getMonth()}
                initialNumToRender={1}
                windowSize={3}
                pagingEnabled={true}
            />
        </View>
        {
            events?.map(event => (
                <Text>{event.title}</Text>
            ))
        }
        </>
    );
}

const styles = StyleSheet.create({
    row: {
        height: MONTH_HEIGHT,
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center'
    }
})