import * as React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
const MONTH_HEIGHT = 260;
const monthArray = [1,2,3,4,5,6,7,8,9,10,11,12]

const listItem = ( item: number, index: number ) => {    
    console.log(item)
    return <View key={index} style={styles.row}>
            <Text style={{fontSize: 20}}>{item}</Text>
        </View>
};


export default () => {

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
                initialScrollIndex={4}
                initialNumToRender={1}
                windowSize={1}
                pagingEnabled={true}
            />
        </View>
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