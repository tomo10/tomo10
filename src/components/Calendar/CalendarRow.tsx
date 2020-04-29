import React from 'react'

import {
    View, Text
} from 'react-native';

import DayHolder from './DayHolder'
// import DummyHolder from './DummyHolder'

export default (props) => {


        return(
            //Rendering each row
            <View
                style={{
                    flexDirection: "row"
                }}
            >
                {props.rowData.map((data, index) => {
                    if(data.dayData.main){
                        return(
                            <DayHolder
                                key={"day holder " + data.calendarDayIndex}

                                day = {data.dayData.day}

                                calendarDayIndex = {data.calendarDayIndex}
                                lastCalendarDayIndex = {props.lastCalendarDayIndex}
                                changeCurrentCalendarDayIndex = {props.changeCurrentCalendarDayIndex}

                                month_index = {props.month_index}
                                current_month_index = {props.current_month_index}
                                chooseDifferentMonth = {props.chooseDifferentMonth}
                            />
                        )
                    }

                    else{
                        return(
                            <>
                                <Text>Dummy</Text>
                            </>
                            // <DummyHolder
                            //     key={"dummy holder "+ data.calendarDayIndex}

                            //     day = {data.dayData.day}
                            // />
                        )
                    }
                })}

            </View>
        )
    
}