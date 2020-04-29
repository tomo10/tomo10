import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { RealmContext, useRealmQuery } from 'react-use-realm';
import { MONTH_HEIGHT, months } from './CalendarModel';
import MonthToDisplay from './MonthToDisplay';
const unix = Date.now();



export default () => {

    const [month_data_array, set_month_data_array] = useState<Array<{}>>();
    const [current_month_index, set_current_month_index] = useState<number>();

    useEffect(() => {
        initializeMonths();
    
    }, [])

    let temp_month_data_array = [];
    const numberOfMonths = 1;

    const chooseDifferentMonth = (index: number) => {
        if (index !== current_month_index) set_current_month_index(index) 
    }

    const listItem = (index: number, item: {}) => (    
        <MonthToDisplay 
          month_data={item}
          month_index={index}
          chooseDifferentMonth={chooseDifferentMonth}  
        />
   );

    const initializeMonths = () => {
        let currentMonth = new Date().getMonth();
        let currentYear = new Date().getFullYear();

        getFollowingMonths(currentMonth, currentYear, numberOfMonths);
    }
    
    const getFollowingMonths = (currentMonth: number, currentYear: number, numberOfMonths: number) => {
        if (numberOfMonths === 0) {
            set_month_data_array(temp_month_data_array)
            return;
        } 
        temp_month_data_array.push({ month: currentMonth, year: currentYear });
        
        if (currentMonth === 11) currentMonth = 0, currentYear +=1;
        else {currentMonth += 1};

        numberOfMonths -= 1;

        getFollowingMonths(currentMonth, currentYear, numberOfMonths);
    }

    let events = useRealmQuery({ source: 'CalendarEvent', filter: 'startDate > 2020-3-1@00:00:00:000' });
    
    return (
        <>
        <View>
            <Text>Lots of days</Text>
        </View>
        <View style={{height: MONTH_HEIGHT}}>
            <FlatList 
                data={month_data_array}
                renderItem={({item, index}) => listItem(index, item)}
                decelerationRate={'fast'}
                snapToAlignment={'start'}
                snapToInterval={MONTH_HEIGHT}
                // initialScrollIndex={new Date().getMonth()}
                initialNumToRender={1}
                windowSize={10}
                pagingEnabled={true}
            />
        </View>
        <TouchableOpacity style={{padding: 10}} onPress={() => console.log(month_data_array)}>
            <Text style={{fontSize: 25}}>REVEAL</Text>
        </TouchableOpacity>
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