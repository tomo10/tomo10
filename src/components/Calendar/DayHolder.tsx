import React, { useState } from 'react'

import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

export default (props) => {

    const [ dayHolderStyle, setDayHolderStyle ] = useState({})
    const [ dayTextStyle, setDayTextStyle ] = useState({})
    
    const chooseDay = (index) => {

        setDayHolderStyle(styles.ChosenDayHolder);
        setDayTextStyle(styles.ChosenDayText);

        props.changeCurrentCalendarDayIndex(index)

        props.chooseDifferentMonth(props.month_index)
    }

    /*componentDidMount(){
        setState({
            dayHolderStyle: styles.UnchosenDayHolder,
            dayTextStyle: styles.UnchosenDayText
        })
    }

    componentDidUpdate(prevProps, prevState){
        //If we choose another day then we reset the previous day's style
        //This means if this day is the previous day then reset its style
        if(props.lastCalendarDayIndex !== prevProps.lastCalendarDayIndex && props.lastCalendarDayIndex === props.calendarDayIndex){
            setState({
                dayHolderStyle: styles.UnchosenDayHolder,
                dayTextStyle: styles.UnchosenDayText,
            })
        }

        if(props.month_index !== props.current_month_index && props.current_month_index !== prevProps.current_month_index){
            setState({
                dayHolderStyle: styles.UnchosenDayHolder,
                dayTextStyle: styles.UnchosenDayText,
            })
        }
    }*/

   
        return (
            <TouchableHighlight
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 5,
                }}

                underlayColor="transparent"
                // onPress = {chooseDay.bind(this, props.calendarDayIndex)}
                onPress = {() => console.log('day selected')}
            >
                <View
                    style={dayHolderStyle}
                >
                    <Text
                        style={dayTextStyle}
                    >
                        {props.day}
                    </Text>
                </View>

            </TouchableHighlight>
        )
    
}

const styles = StyleSheet.create({
    UnchosenDayHolder: {
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        backgroundColor: "white"
    },

    UnchosenDayText: {
        color: 'black'
    },

    ChosenDayHolder: {
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        backgroundColor: "black"
    },

    ChosenDayText: {
        color: 'white'
    },
})