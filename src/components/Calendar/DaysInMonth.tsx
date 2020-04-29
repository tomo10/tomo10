import React, { useState } from 'react'

import CalendarRow from './CalendarRow'

export default (props) => {

    const [lastCalendarDayIndex, setLastCalendarDayIndex] = useState<number>(0);    //To keep track of the last chosen day in the month (for resetting its style)
    const [currentCalendarDayIndex, setCurrentCalendarDayIndex] = useState<number>(0);  //Keeping track of the current chosen day in the month (for changing its style to proper one)

    console.log('row days array:',props.row_days_array)
    //If we choose a different day in the month, then this function will be called
    // changeCurrentCalendarDayIndex = (index) => {
    //     setState({
    //         currentCalendarDayIndex: index
    //     })
    // }


    //After we get the currentCalendarDayIndex, we set the lastCalendarDayIndex to the previous currentCalendarDayIndex
    /*componentDidUpdate(prevProps, prevState){
        if(state.currentCalendarDayIndex !== prevState.currentCalendarDayIndex){
            setState({
                lastCalendarDayIndex: prevState.currentCalendarDayIndex
            })
        }
    }*/

    
        return(
            <>
                {
                    props.row_days_array.map((rowData, index) => (
                        <CalendarRow 
                            key = {'calendar row ' + index}
                            rowData = {rowData}

                            lastCalendarDayIndex = {lastCalendarDayIndex}
                            changeCurrentCalendarDayIndex = {setCurrentCalendarDayIndex}

                            month_index = {props.month_index}
                            current_month_index = {props.current_month_index}
                            chooseDifferentMonth = {props.chooseDifferentMonth}
                        />
                    ))
                }
            </>
        )
    
}