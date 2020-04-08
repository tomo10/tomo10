import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { MONTH_HEIGHT, months, monthIndex } from './CalendarModel';




export default () => {

    return (
        <View style={styles.row}>
            <Text style={{fontSize: 20}}>{months[monthIndex]}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    row: {
        height: MONTH_HEIGHT,
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center'
    }
})